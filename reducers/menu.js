import { handleActions } from 'redux-actions';
import { MenuActions } from '../actions';

const menuState = {
  sidebarOpen: false,
  dropdownOpen: false,
};

const Menu = handleActions({
  [MenuActions.openSidebar]: (state, action) => ({
    ...state,
    sidebarOpen: action.payload,
  }),
  [MenuActions.toggleDropdown]: state => ({
    ...state,
    dropdownOpen: !state.dropdownOpen,
  }),
}, menuState);

export default Menu;
