import { connect } from 'react-redux';
import { createAction } from '~/redux/actionUtils';
import HomeScreen from './view';

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  users: auth.users,
});

const mapDispatchToProps = dispatch => ({
  handleGetList: () => {
    dispatch(createAction('GET_LIST')());
  },
  handleLogin: payload => {
    dispatch(createAction('LOGIN')(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
