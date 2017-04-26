import { handleActions } from 'redux-actions';
import { CALCULATE_RESPONSIVE_STATE } from 'redux-responsive';
import { SidebarActions } from '../actions';

const sidebarState = {
  docked: false,
  open: false,
};

const Sidebar = handleActions({
  [CALCULATE_RESPONSIVE_STATE]: (state, action) => ({
    ...state,
    docked: action.innerWidth >= 832,
  }),
  [SidebarActions.openSidebar]: (state, action) => ({
    ...state,
    open: action.payload,
  }),
}, sidebarState);

export default Sidebar;
