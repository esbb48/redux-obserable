import { connect } from 'react-redux';
import { createAction } from '~/redux/actionUtils';
import App from './view';

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  account: auth.account,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: payload => {
    dispatch(createAction('LOGOUT')(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
