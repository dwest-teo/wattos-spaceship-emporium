import { handleActions } from 'redux-actions';
import { SidebarActions } from '../actions';

const sidebarState = {
  open: false,
};

const Sidebar = handleActions({
  [SidebarActions.openSidebar]: (state, action) => ({
    ...state,
    open: action.payload,
  }),
}, sidebarState);

export default Sidebar;
