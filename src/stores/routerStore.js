import { types } from 'mobx-state-tree';
import { RouterModel } from 'mst-react-router';

export const routerModel = RouterModel.create();

const RouterStore = types.model({
  router: RouterModel,
});

const routerStore = RouterStore.create({ router: routerModel });

export default routerStore;
