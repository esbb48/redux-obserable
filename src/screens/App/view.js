import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeScreen from '~/screens/HomeScreen';
import LayoutWrapper from '~/components/LayoutWrapper';

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Switch>
          <Route path='*'>
            <HomeScreen />
          </Route>
        </Switch>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
