import {
  SET_WEBSITE_SEARCH_TEXT,
  SET_OPEN_WEBSITE_SEARCH,
  SET_OPEN_SIDEBAR_MENU,
  SET_DARK_MODE,
  DATA_ERROR,

} from "./types";

export const setWebsiteSearchText = (websiteSearchText) => async (dispatch) => {

  try {
    dispatch({
      type: SET_WEBSITE_SEARCH_TEXT,
      websiteSearchText: websiteSearchText
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: err.response,
    });
  }
};

export const setOpenWebsiteSearch = (websiteSearchOpen) => async (dispatch) => {

  try {
    dispatch({
      type: SET_OPEN_WEBSITE_SEARCH,
      websiteSearchOpen: websiteSearchOpen
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: err.response,
    });
  }
};

export const setOpenSidebarMenu = (sidebarMenuOpen, sidebarMenuManualClose=true) => async (dispatch) => {

  try {
    dispatch({
      type: SET_OPEN_SIDEBAR_MENU,
      sidebarMenuOpen: sidebarMenuOpen,
      sidebarMenuManualClose: sidebarMenuManualClose,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: err.response,
    });
  }
};

export const setDarkMode = (darkMode) => async (dispatch) => {

  try {
    dispatch({
      type: SET_DARK_MODE,
      darkMode: darkMode,
    });
  } catch (err) {
    dispatch({
      type: DATA_ERROR,
      payload: err.response,
    });
  }
};