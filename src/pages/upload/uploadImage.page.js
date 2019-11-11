import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  Button,
  SelectPicker,
  Uploader,
  Icon,
  Alert,
} from 'rsuite';
import { store } from '../../redux/store';
import './uploadImage.styles.css';

const { dispatch } = store;

const UploadImagePage = ({ categories }) => {
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    if (url && category) dispatch.gallery.createImage({ url, category });
    else Alert.error('Url and category are required');
  };

  const handleChange = file => {
    setUrl(file[0].name);
  };

  return (
    <div className="uploadImageContainer center">
      <Form>
        <FormGroup>
          <ControlLabel>URL</ControlLabel>
          <FormControl name="name" value={url} onChange={setUrl} />
        </FormGroup>
        <FormGroup>
          <Uploader
            listType="picture-text"
            onChange={handleChange}
            autoUpload={false}
            renderFileInfo={file => (
              <div>
                <span>
                  File Name:
                  {file.name}
                </span>
                <p>
                  File URL:
                  {file.url}
                </p>
              </div>
            )}
          >
            <button>
              <Icon icon="camera-retro" size="lg" />
            </button>
          </Uploader>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Category</ControlLabel>
          <SelectPicker data={categories} onChange={setCategory} style={{ width: 224 }} />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button color="violet" size="lg" onClick={handleSubmit}>
              Submit
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
