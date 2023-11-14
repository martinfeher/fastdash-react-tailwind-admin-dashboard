import {
  SET_WEBSITE_SEARCH_TEXT,
  SET_OPEN_WEBSITE_SEARCH,
  SET_OPEN_SIDEBAR_MENU,
  SET_OPEN_CALENDAR_EVENT_MODAL,
  SET_DARK_MODE,
  DATA_ERROR,
} from "../actions/types";

const initialState = {
  sidebarMenuOpen: true,
  sidebarMenuManualClose: false,
  websiteSearchOpen: false,
  calendarEventModalOpen: false,
  websiteSearchText: '',
  availableSearchItems: [
    { name: 'Analytics', link: '/'},
    { name: 'Crm', link: '/crm'},
    { name: 'Kanban', link: '/kanban'},
    { name: 'Profile', link: '/profile'},
    { name: 'Charts', link: '/charts'},
    { name: 'Maps', link: '/maps'},
    { name: 'Buttons', link: '/buttons'},
    { name: 'Sign in', link: '/sign-in'},
    { name: 'Sign up', link: '/sign-up'},
  ],
  searchItems: [],
  darkMode: false,
  // darkMode: true,
};

const globalReducer = (state = initialState, action) => {
  let websiteSearchOpen = false; 
  let websiteSearchText = ''; 
  let searchItems = []; 

  switch (action.type) {
    case SET_WEBSITE_SEARCH_TEXT:

      websiteSearchText = action.websiteSearchText;

      searchItems = []
      state.availableSearchItems.map((item, index) => {
        if ((item.name.toLowerCase()).includes(websiteSearchText.toLowerCase())) {
          searchItems.push(item)
        }
      })

      return { 
        ...state,
        websiteSearchText: websiteSearchText,
        searchItems: searchItems,
      };

    case SET_OPEN_WEBSITE_SEARCH:
      websiteSearchOpen = action.websiteSearchOpen;

      return {
        ...state,
        websiteSearchOpen: websiteSearchOpen,
        searchItems: websiteSearchOpen ? state.availableSearchItems: state.searchItems,
        websiteSearchText: '',
      };

    case SET_OPEN_SIDEBAR_MENU:

    let sidebarMenuOpen = action.sidebarMenuOpen
    let sidebarMenuManualClose = sidebarMenuOpen ? false : action.sidebarMenuManualClose

      return {
        ...state,
        sidebarMenuOpen: sidebarMenuOpen,
        sidebarMenuManualClose: sidebarMenuManualClose,
      };


    case SET_OPEN_CALENDAR_EVENT_MODAL:

      // let calendarEventModalOpen = action.calendarEventModalOpen
  
        return {
          ...state,
          darkMode: action.calendarEventModalOpen,
        };

    case SET_DARK_MODE:

    let darkMode = action.darkMode

      return {
        ...state,
        darkMode: darkMode,
      };

    case DATA_ERROR:
      return {
        ...state,
        error: action.err,
      };

    default:
      return state;
  }
};

export default globalReducer;