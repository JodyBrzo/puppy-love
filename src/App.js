import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import CreatePuppy from './pages/Create';
import PuppiesPage from './pages/Puppies';
import Wrapper from './components/wrapper';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {PuppiesProvider} from './Providers/Puppies/puppies.provider';

function App (props) {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
        <PuppiesProvider> 
          {/* <Wrapper> */}
            <Switch>
              <Route path="/" exact component={PuppiesPage} />
              <Route path="/create" component={CreatePuppy} />
            </Switch>
          {/* </Wrapper> */}
        </PuppiesProvider> 
      </div>
    </Router>
  );
}

export default App;
