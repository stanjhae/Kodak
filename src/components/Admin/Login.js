import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button } from 'rsuite';
import { store } from '../../redux/store';
import './login.styles.css';

const { dispatch } = store;

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch.admin.login({ userName, password });
  };

  return (
    <div className="loginContainer center">
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
  images: state.gallery.images,
});

export default connect(mapState)(Login);
