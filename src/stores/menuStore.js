import { types } from 'mobx-state-tree';

const MenuStore = types.model({
  isOpenMenu: types.boolean,
});

const menuStore = MenuStore.create({
  isOpenMenu: true,
});

export default menuStore;
