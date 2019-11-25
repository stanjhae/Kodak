import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './redux/store';
import Home from './components/Home/Home';
import Login from './components/Admin/Login';
import Navbar from './components/navBar/Navbar';
import CreateImage from './pages/upload/uploadImage.page';
import Mobile from './components/mobile/mobile';
import AboutPage from './pages/about/aboutPage';

const { dispatch } = store;

const App = () => {
  useEffect(() => {
    const init = async () => {
      const admin = await localStorage.getItem('admin');
      dispatch.gallery.getImages();
      if (admin) dispatch.admin.loginSuccess(JSON.parse(admin));
    };
    init().then();
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Mobile />
        <div className="mainContainer">
          <Navbar />
          <div className="mainAppContainer">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/upload" component={CreateImage} />
              <Route path="/about" component={AboutPage} />
              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
