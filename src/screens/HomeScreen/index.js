import { connect } from 'react-redux';
import { getList } from '~/redux/actions/authActions';
import HomeScreen from './view';

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  users: auth.users,
});

const mapDispatchToProps = dispatch => ({
  handleGetList: () => {
    dispatch(getList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
