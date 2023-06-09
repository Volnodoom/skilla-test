import { LoadingStatus, SEARCH } from "utils/constants";

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

export const sortCalls = (state) => state.sortAllCall;
export const setSortingFormat = (state) => state.setSortingFormat;

export const fetchFilter = (state) => state.fetchFilter;
export const updateFilter = (state) => state.updateFilter;
export const clearAllFilters = (state) => state.clearAllFilters;
export const getFilters = (state) => state.filtering;
export const getSearchFilter = (state) => state.filtering.find((line) => line.type === SEARCH);
export const setTimeSpan = (state) => state.setTimeSpan;

// Record
export const fetchRecord = (state) => state.fetchRecord;

export const getRecordUrl = (state) => (recordId) => {
  const recObject = state.records.find((line) => line.recordId === recordId);
  return recObject ? recObject.objectUrl : null;
};

