import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from '~/screens/HomeScreen';
import LayoutWrapper from '~/components/LayoutWrapper';

const App = ({ isAuth, account, handleLogout }) => {
  return (
    <Router>
      <LayoutWrapper
        isAuth={isAuth}
        account={account}
        handleLogout={handleLogout}>
        <Switch>
          <Route path='*'>
            <HomeScreen />
          </Route>
        </Switch>
      </LayoutWrapper>
    </Router>
  );
};

export default App;
