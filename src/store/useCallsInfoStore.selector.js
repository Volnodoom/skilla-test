import { LoadingStatus } from "utils/constants";

export const getCalls = (state) => state.calls;
export const getCurrentCallsNumber = (state) => state.calls.length;
export const getTotalCalls = (state) => state.totalCalls;
export const getLoadingStatus = (state) => state.loadingStatus;
export const getIsLoading = (state) => state.loadingStatus === LoadingStatus.Loading;
export const getIsSucceeded = (state) => state.loadingStatus === LoadingStatus.Succeeded;
export const getIsFailed = (state) => state.loadingStatus === LoadingStatus.Failed;

export const clearStore = (state) => state.clearStore;
export const fetchInitiation = (state) => state.fetchInitiation;
export const changeLoadingStatus = (state) => state.changeLoadingStatus;
export const fetchMoreCalls = (state) => state.fetchMoreCalls;

// Record
export const fetchRecord = (state) => state.fetchRecord;

export const getRecordUrl = (state) => (recordId) => {
  const recObject = state.records.find((line) => line.recordId === recordId);
  return recObject ? recObject.objectUrl : null;
};

