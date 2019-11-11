import React from 'react';
import lottie from 'lottie-web';
import './noImage.styles.css';
import { Button } from 'rsuite';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NoImage = ({ admin }) => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('noImage'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets3.lottiefiles.com/packages/lf20_S9kP4W.json',
    });
  }, []);

  return (
    <div className="noImageContainer center">
      <div id="noImage" />
      <h4>There are no images</h4>
      {admin && (
        <Link to="/upload">
          <Button size="md" color="violet">
            Add Image
          </Button>
        </Link>
      )}
    </div>
  );
};

const mapState = state => ({
  admin: state.admin.credentials.userName,
});

export default connect(mapState)(NoImage);
