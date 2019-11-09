import { push } from 'connected-react-router';

const galleryState = {
  images: [],
  filtered: [],
  filter: '',
  categories: [
    { label: 'Tourism', value: 'Tourism' },
    { label: 'Wedding', value: 'Wedding' },
    { label: 'Horror', value: 'Horror' },
  ],
};

export const gallery = {
  state: { ...galleryState },
  reducers: {
    createSuccess: (state, payload) => ({
      ...state,
      images: payload,
    }),
    filterImages: (state, payload) => {
      let filtered = [...state.images];
      filtered = filtered.filter(({ category }) => category === payload);
      return {
        ...state,
        filtered,
        filter: payload,
      };
    },
  },
  effects: (dispatch) => ({
    createImage: (payload, state) => {
      const data = {
        ...payload,
        url: payload.url.substring(0, 4) === 'http' ? payload.url : `images/${payload.url}`,
      };
      const gallery = [...state.gallery.images, data];
      localStorage.setItem('images', JSON.stringify(gallery));
      dispatch.gallery.createSuccess(gallery);
      dispatch.gallery.filterImages('');
      dispatch(push('/'));
    },
    deleteImage: (payload, state) => {
      const gallery = [...state.gallery.images];
      gallery.splice(payload, 1);
      localStorage.setItem('images', JSON.stringify(gallery));
      dispatch.gallery.createSuccess(gallery);
      dispatch.gallery.filterImages('');
    },
  }),
};
