import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import CreatePuppy from './pages/Create';
import Puppies from './pages/Puppies';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PuppiesProvider from './Providers/Puppies/puppies.provider';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
        <PuppiesProvider>
          <Switch>
            <Route path="/" exact component={Puppies} />
            <Route path="/create" component={CreatePuppy} />
          </Switch>
        </PuppiesProvider>
      </div>
    </Router>
  );
}

export default App;
