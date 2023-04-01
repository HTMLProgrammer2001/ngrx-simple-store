import {MetaReducer, INIT} from '@ngrx/store';
import {StoreService} from '../../../common/services/store.service';
import {State} from '../../index';

export const saveCartStateMetaReducer: MetaReducer<State> = reducer => (state, action) => {
  const afterActionState = reducer(state, action);

  if (action.type === INIT) {
    return {...afterActionState, cart: {...afterActionState.cart, items: StoreService.getCartItems()}};
  } else {
    if (state?.cart !== afterActionState?.cart && afterActionState.cart) {
      StoreService.saveCartItems(afterActionState.cart.items);
    }

    return afterActionState;
  }
};
