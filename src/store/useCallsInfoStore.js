import { FetchParams, LoadingStatus, STEP, UrlList } from "utils/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer"
import { adapterCallsInfo } from "./adapterCallsInfo";
import { api } from "services/api";

export const useCallsInfoStore = create()(immer((set, get) => ({
  calls: [],
  totalCalls: null,
  stepsCount: 0,
  loadingStatus: LoadingStatus.Idle,
  records: [],
  recordsStatus: [],

  fetchInitiation: async (dateStart, dateEnd) => {
    // limit start calculate from the total number of items
    try {
      const {data} = await api({
        url: UrlList.CallList,
        params: {
          [FetchParams.DateStart]: dateStart,
          [FetchParams.DateEnd]: dateEnd,
          [FetchParams.LimitStart]: get().stepsCount*STEP,
          [FetchParams.LimitEnd]: STEP,
        }

      });

      if(get().calls.length === 0) {
        const clientUpdates = data.results.map((serverDatum) => adapterCallsInfo(serverDatum));
        set({totalCalls: data['total_rows']});
        set(state => {state.calls.push(...clientUpdates)});
        set({loadingStatus: LoadingStatus.Succeeded});
      }

    } catch(err) {
      set({loadingStatus: LoadingStatus.Failed});
      throw err;
    }
  },

  fetchRecord: async (recordId, partnerId) => {
    try {
      const {data} = await api({
        url: UrlList.Record,
        params: {
          [FetchParams.Record]: recordId,
          [FetchParams.PartnerId]: partnerId,
        },
        responseType: 'blob',
      })

      const objectUrl =  URL.createObjectURL(data);

      set(state => {
        state.records.push({
          recordId: recordId,
          objectUrl,
        })
      })
    } catch(err) {
      throw err;
    }
  },

  clearStore: () => ({
    calls: [],
    totalCalls: null,
    stepsCount: 0,
    loadingStatus: LoadingStatus.Idle,
    records: [],
  }),

  resetStepCount: () => set( {stepsCount: 0}),
  increaseStep: () => set( state => ({stepsCount: state.stepsCount + 1})),

  changeLoadingStatus: (statusUpdate) => set({loadingStatus: statusUpdate}),
})))
