import {
  SET_WEBSITE_SEARCH_TEXT,
  SET_OPEN_WEBSITE_SEARCH,
  SET_OPEN_SIDEBAR_MENU,
  SET_OPEN_CALENDAR_EVENT_MODAL,
  SET_CALENDAR_EVENTS,
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
  calendarEvents: [
    { title: 'event 1', date: '2023-11-01', description: 'Lorem ipsum' },
    { title: 'event 2', start: '2023-11-12 08:15:00', end: '2023-11-12 08:45:00'},
    { title: 'event 3', start: '2023-11-12 15:30:00' },
    { title: 'event 4', start: '2023-11-15', end: '2023-11-18' }
  ]
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

      let calendarEventModalOpen = action.calendarEventModalOpen
  
        return {
          ...state,
          calendarEventModalOpen: calendarEventModalOpen,
        };

    case SET_CALENDAR_EVENTS:

      let calendarEventsNew = action.calendarEventsNew

      console.log('calendarEventsNew')
      console.log(calendarEventsNew)
  
        return {
          ...state,
          calendarEvents: calendarEventsNew,
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