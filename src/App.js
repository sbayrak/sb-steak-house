import { Fragment } from 'react';
import Header from './layout/Header';
import './App.css';
import Landing from './components/Landing';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Landing></Landing>
    </Fragment>
  );
}

export default App;
