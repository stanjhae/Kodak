import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { FlexboxGrid } from 'rsuite';
import { store, history } from './redux/store';
import Home from './components/Home/Home';
import Login from './components/Admin/Login';
import 'rsuite/dist/styles/rsuite-default.css';
import Navbar from './components/Navbar';
import Create from './components/Admin/Create';

const { dispatch } = store;

const App = () => {
  useEffect(() => {
    const init = async () => {
      const admin = await localStorage.getItem('admin');
      const images = await localStorage.getItem('images');
      if (admin) dispatch.admin.loginSuccess(JSON.parse(admin));
      if (images) dispatch.gallery.createSuccess(JSON.parse(images));
    };
    init().then();
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={4}>
            <Navbar />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={20}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/create" component={Create} />
              <Route component={Home} />
            </Switch>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
