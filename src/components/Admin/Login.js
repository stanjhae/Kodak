import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button,
} from 'rsuite';
import { store } from '../../redux/store';

const { dispatch } = store;

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch.admin.login({ userName, password });
  };

  return (
    <>
      <Form>
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <FormControl name="name" value={userName} onChange={setUsername} />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl name="password" type="password" value={password} onChange={setPassword} />
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </>
  );
};

const mapState = (state) => ({
  images: state.gallery.images,
});

export default connect(mapState)(Login);
