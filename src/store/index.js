import { types } from 'mobx-state-tree';

const Store = types.model({
  isOpenMenu: types.boolean,
});

const store = Store.create({
  isOpenMenu: true,
});

export default store;
