import { push } from 'connected-react-router';
import { Alert } from 'rsuite';
import galleryApi from '../../api/galleryApi';

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
      filtered = filtered.filter(({ category }) => category.toLowerCase() === payload);
      return {
        ...state,
        filtered,
        filter: payload,
      };
    },
  },
  effects: dispatch => ({
    createImage: async (payload, state) => {
      const response = await galleryApi.createImage(payload);
      if (!response.success) {
        return Alert.error('Something went wrong', 5000);
      }
      const images = [response.result, ...state.gallery.images];
      dispatch.gallery.createSuccess(images);
      return dispatch(push('/'));
    },
    getImages: async () => {
      const response = await galleryApi.getImages();
      dispatch.gallery.createSuccess(response.result);
      const filter = window.location.pathname.slice(1);
      dispatch.gallery.filterImages(filter);
    },
    likeImage: async (payload, state) => {
      const images = [...state.gallery.images];
      const response = await galleryApi.likeImage(payload.image);
      if (!response.success) {
        return Alert.error('Something went wrong', 5000);
      }
      images.splice(payload.index, 1, response.result);
      return dispatch.gallery.createSuccess(images);
    },
    deleteImage: async (payload, state) => {
      const images = [...state.gallery.images];
      const response = await galleryApi.deleteImage(payload.image);
      if (!response.success) {
        return Alert.error('Something went wrong', 5000);
      }
      images.splice(payload.index, 1);
      return dispatch.gallery.createSuccess(images);
    },
  }),
};
