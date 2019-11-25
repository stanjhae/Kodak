import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, ButtonToolbar, Button, SelectPicker, Uploader, Icon, Alert } from 'rsuite';
import { store } from '../../redux/store';
import './uploadImage.styles.css';

const { dispatch } = store;

const UploadImagePage = ({ categories }) => {
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (url && category) {
      setIsSubmitting(true);
      dispatch.gallery.createImage({ url, category });
    } else Alert.error('Url and category are required');
  };

  const handleChange = file => {
    if (file.length) setUrl(file[0].blobFile);
    else setUrl({});
  };

  return (
    <div className="uploadImageContainer center">
      <Form className="formContainer">
        <FormGroup>
          <h3 className="label">Click the box to upload</h3>
          <Uploader multiple={false} listType="picture" onChange={handleChange} autoUpload={false}>
            <Button type="upload">
              <Icon icon="camera-retro" size="lg" />
            </Button>
          </Uploader>
        </FormGroup>
        <FormGroup>
          <h3 className="label">Category</h3>
          <SelectPicker data={categories} onChange={setCategory} style={{ width: 224 }} />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button type="submit" color="violet" size="lg" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'Processing Image' : 'Submit'}
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
};

const mapState = state => ({
  categories: state.gallery.categories,
});

export default connect(mapState)(UploadImagePage);
