import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import './App.css';
import Footer from './layout/Footer';
import Home from './components/Home';
import About from './pages/About';

function App() {
  return (
    <Fragment>
      <Header></Header>

      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
        </Switch>
      </Router>

      <Footer></Footer>
    </Fragment>
  );
}

export default App;
