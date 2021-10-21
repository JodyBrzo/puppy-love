import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import PuppyList from './components/puppy-list.component';
import CreatePuppy from './pages/Create';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PuppiesProvider from './Providers/Puppies/puppies.provider';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
        <PuppiesProvider>
          <Route path="/" exact component={PuppyList} />
          <Route path="/create" component={CreatePuppy} />
        </PuppiesProvider>
      </div>
    </Router>
  );
}

export default App;
