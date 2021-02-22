export const initialState = {
  app: {
    lang: "ru",
    modalWikiPreview: {
      open: false,
      pageid: 0,
    },
  },
  search: {
    loading: false,
    list: [],
    count: 0,
    rowsPerPage: 5,
    currentPage: 0,
  },
};
