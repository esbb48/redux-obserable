import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from '~/screens/HomeScreen';
import LayoutWrapper from '~/components/LayoutWrapper';
import reduxStore from '~/redux/configureStore';

const store = reduxStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        <LayoutWrapper>
          <Switch>
            <Route path='*'>
              <HomeScreen />
            </Route>
          </Switch>
        </LayoutWrapper>
      </Router>
    </Provider>
  );
}

export default App;
