import { createBrowserHistory } from 'history';
import { init } from '@rematch/core';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { gallery } from './models/gallery';
import { admin } from './models/admin';

export const history = createBrowserHistory();

export const store = init({
  models: {
    gallery,
    admin,
  },
  redux: {
    middlewares: [routerMiddleware(history)],
    reducers: {
      router: connectRouter(history),
    },
    devtoolOptions: {},
  },
});
