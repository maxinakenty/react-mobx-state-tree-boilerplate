import { types } from 'mobx-state-tree';
import { RouterModel } from 'mst-react-router';

export const routerModel = RouterModel.create();

const Store = types.model({
  menuIsOpen: types.boolean,
  router: RouterModel,
});

const initialState = {
  menuIsOpen: true,
  router: routerModel,
};

const store = Store.create(initialState);

export default store;
