import { FetchParams, LoadingStatus, STEP, THREE_DAYS_BEFORE, UrlList } from "utils/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer"
import { adapterCallsInfo } from "./adapterCallsInfo";
import { api } from "services/api";
import { formateDateNoTime, sortData } from "utils/utils";

const today = new Date();
const threeDaysBefore = new Date().setDate(new Date().getDate() - THREE_DAYS_BEFORE);

export const useCallsInfoStore = create()(immer((set, get) => ({
  calls: [],
  totalCalls: null,
  stepsCount: 0,
  loadingStatus: LoadingStatus.Idle,
  records: [],
  recordRequestList: [],
  sorting: null,
  filtering: [],
  timeSpan: {
    dayStart: new Date(threeDaysBefore),
    dayEnd: today,
  },

  fetchInitiation: async () => {
    // limit start calculate from the total number of items
    try {
      const {data} = await api({
        url: UrlList.CallList,
        params: {
          [FetchParams.DateStart]: formateDateNoTime(get().timeSpan.dayStart),
          [FetchParams.DateEnd]: formateDateNoTime(get().timeSpan.dayEnd),
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

  fetchMoreCalls: async () => {
    const currentFilters = get().filtering;
    const matchedFilter = (requestParam) => currentFilters.find((line) => line.requestParam === requestParam);
    const activeValue = (requestParam) => matchedFilter(requestParam) ? matchedFilter(requestParam).requestParamValue : '';
    const hasInOutRequest = matchedFilter(FetchParams.InOut);

    try {
      let dataObject;
      if(hasInOutRequest) {
        dataObject = await api({
          url: UrlList.CallList,
          params: {
            [FetchParams.DateStart]: formateDateNoTime(get().timeSpan.dayStart),
            [FetchParams.DateEnd]: formateDateNoTime(get().timeSpan.dayEnd),
            [FetchParams.LimitEnd]: STEP,
            [FetchParams.LimitStart]: (get().stepsCount + 1)*STEP,
            [FetchParams.InOut]: activeValue(FetchParams.InOut),
            [FetchParams.Source]: activeValue(FetchParams.Source),
            [FetchParams.CallType]: activeValue(FetchParams.CallType),
            [FetchParams.Error]: activeValue(FetchParams.Error),
            [FetchParams.Search]: activeValue(FetchParams.Search),
          },
        })
      } else {
        dataObject = await api({
          url: UrlList.CallList,
          params: {
            [FetchParams.DateStart]: formateDateNoTime(get().timeSpan.dayStart),
            [FetchParams.DateEnd]: formateDateNoTime(get().timeSpan.dayEnd),
            [FetchParams.LimitEnd]: STEP,
            [FetchParams.LimitStart]: (get().stepsCount + 1)*STEP,
            [FetchParams.Source]: activeValue(FetchParams.Source),
            [FetchParams.CallType]: activeValue(FetchParams.CallType),
            [FetchParams.Error]: activeValue(FetchParams.Error),
            [FetchParams.Search]: activeValue(FetchParams.Search),
          },
        })
      }

      const {data} = dataObject;

      const clientUpdates = data.results.map((serverDatum) => adapterCallsInfo(serverDatum));

      set({totalCalls: data['total_rows']});
      set({loadingStatus: LoadingStatus.Succeeded});
      set( state => ({stepsCount: state.stepsCount + 1}));

      if(get().sorting) {
        const {sortType, isIncrease} = get().sorting;
        const currentData = get().calls;

        const sortedData = sortData(sortType, isIncrease, [...currentData, ...clientUpdates])
        set({calls: sortedData});
        return;
      }

      set(state => {state.calls.push(...clientUpdates)});
    } catch(err) {
      set({loadingStatus: LoadingStatus.Failed});
      throw err;
    }
  },

  fetchRecord: async (recordId, partnerId) => {
    const hasData = get().recordRequestList.some((line) => line === recordId);

    if(hasData) {
      return;
    }

    try {
      set(state => {
        state.recordRequestList.push(recordId);
      })

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

  fetchFilter: async (requestParam, requestParamValue) => {
    const currentFilters = get().filtering;
    const matchedFilter = (requestParam) => currentFilters.find((line) => line.requestParam === requestParam);
    const activeValue = (requestParam) => matchedFilter(requestParam) ? matchedFilter(requestParam).requestParamValue : '';
    const hasInOutRequest = FetchParams.InOut === requestParam || matchedFilter(FetchParams.InOut);

    try {
      let dataObject;
      if(hasInOutRequest) {
        dataObject = await api({
          url: UrlList.CallList,
          params: {
            [FetchParams.DateStart]: formateDateNoTime(get().timeSpan.dayStart),
            [FetchParams.DateEnd]: formateDateNoTime(get().timeSpan.dayEnd),
            [FetchParams.LimitEnd]: STEP,
            [FetchParams.InOut]: requestParam === FetchParams.InOut ? requestParamValue : activeValue(FetchParams.InOut),
            [FetchParams.Source]: requestParam === FetchParams.Source ? requestParamValue : activeValue(FetchParams.Source),
            [FetchParams.CallType]: requestParam === FetchParams.CallType ? requestParamValue : activeValue(FetchParams.CallType),
            [FetchParams.Error]: requestParam === FetchParams.Error ? requestParamValue : activeValue(FetchParams.Error),
            [FetchParams.Search]: requestParam === FetchParams.Search ? requestParamValue : activeValue(FetchParams.Error),
          },
        })
      } else {
        dataObject = await api({
          url: UrlList.CallList,
          params: {
            [FetchParams.DateStart]: formateDateNoTime(get().timeSpan.dayStart),
            [FetchParams.DateEnd]: formateDateNoTime(get().timeSpan.dayEnd),
            [FetchParams.LimitEnd]: STEP,
            [FetchParams.Source]: requestParam === FetchParams.Source ? requestParamValue : activeValue(FetchParams.Source),
            [FetchParams.CallType]: requestParam === FetchParams.CallType ? requestParamValue : activeValue(FetchParams.CallType),
            [FetchParams.Error]: requestParam === FetchParams.Error ? requestParamValue : activeValue(FetchParams.Error),
            [FetchParams.Search]: requestParam === FetchParams.Search ? requestParamValue : activeValue(FetchParams.Error),
          },
        })
      }

      const {data} = dataObject;
      const clientUpdates = data.results.map((serverDatum) => adapterCallsInfo(serverDatum));

      set({calls: [...clientUpdates]});
      set({totalCalls: data['total_rows']});
      set({stepsCount: 0});

    } catch(err) {
      throw err;
    }
  },

  sortAllCall: (sortedData) => set({calls: sortedData}),
  setSortingFormat: (sortingFormat) => set({sorting: sortingFormat}),

  updateFilter: (updateInfo) => {
    const currentFiltering = get().filtering;
    const index = currentFiltering.findIndex((line) => line.type === updateInfo.type);

    if(index >= 0) {
      if(currentFiltering.length === 1) {
        set(state => {state.filtering = [updateInfo]});
        return;
      } else {
        set(state => {state.filtering = [
          ...currentFiltering.slice(0, index),
          updateInfo,
          ...currentFiltering.slice(index + 1),
        ]});
        return;
      }

    }

    set(state => {state.filtering.push(updateInfo)});
  },
  clearAllFilters: () => set({filtering: []}),

  clearStore: () => ({
    calls: [],
    totalCalls: null,
    stepsCount: 0,
    loadingStatus: LoadingStatus.Idle,
    records: [],
    recordRequestList: [],
    sorting: null,
    filtering: [],
    timeSpan: {
      dayStart: new Date(threeDaysBefore),
      dayEnd: today,
    },
  }),

  changeLoadingStatus: (statusUpdate) => set({loadingStatus: statusUpdate}),
})))
