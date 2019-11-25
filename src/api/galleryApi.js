import axios from 'axios';

const url = 'http://18.194.21.114:9002/api';

class galleryApi {
  static getImages() {
    return axios({
      method: 'GET',
      url: `${url}/posts/all`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static likeImage(image) {
    return axios({
      method: 'PUT',
      url: `${url}/posts/like`,
      timeout: 5 * 1000,
      data: { image },
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static deleteImage(image) {
    return axios({
      method: 'DELETE',
      url: `${url}/posts/${image}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => data)
      .catch(error => error);
  }

  static createImage(payload) {
    const formData = new FormData();

    const images = ['url'];

    Object.keys(payload).map(key => {
      if (images.includes(key)) {
        return formData.append('image', payload[key], payload.name);
      }
      return formData.append(key, payload[key]);
    });

    return axios({
      method: 'post',
      url: `${url}/posts/`,
      timeout: 5 * 2000,

      data: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(({ data }) => data)
      .catch(error => error);
  }
}

export default galleryApi;
