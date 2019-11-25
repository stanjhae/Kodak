import { push } from 'connected-react-router';
import { Alert } from 'rsuite';

const adminState = {
  credentials: {
    userName: '',
    password: '',
  },
};

export const admin = {
  state: { ...adminState },
  reducers: {
    loginSuccess: (state, payload) => ({
      ...state,
      credentials: payload,
    }),
  },
  effects: dispatch => ({
    login: payload => {
      if (payload.userName === 'faisal' && payload.password === 'Thesis_2019') {
        localStorage.setItem('admin', JSON.stringify(payload));
        dispatch.admin.loginSuccess(payload);
        dispatch(push('/'));
        dispatch.gallery.getImages();
      } else {
        Alert.error('Incorrect username or password');
      }
    },
    logout: () => {
      localStorage.removeItem('admin');
      dispatch.admin.loginSuccess({});
    },
  }),
};
