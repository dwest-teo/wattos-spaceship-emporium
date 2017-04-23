import { handleActions } from 'redux-actions';
import { InventoryActions } from '../actions';

const inventoryState = {
  feed: [],
  activeItem: null,
};

const Inventory = handleActions({
  [InventoryActions.getInventoryFeed]: (state, action) => ({
    ...state,
    feed: action.payload,
  }),
  [InventoryActions.getInventoryItem]: (state, action) => ({
    ...state,
    activeItem: {
      ...action.payload,
    },
  }),
}, inventoryState);

export default Inventory;
