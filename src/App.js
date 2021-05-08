import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import './App.css';
import Footer from './layout/Footer';
import Home from './components/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reservation from './pages/Reservation';
import Menu from './pages/Menu';

function App() {
  return (
    <Fragment>
      <Header></Header>

      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/gallery' component={Gallery}></Route>
          <Route exact path='/reservation' component={Reservation}></Route>
          <Route exact path='/menu' component={Menu}></Route>
        </Switch>
      </Router>

      <Footer></Footer>
    </Fragment>
  );
}

export default App;
