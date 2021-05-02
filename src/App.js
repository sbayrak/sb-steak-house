import { Fragment } from 'react';
import Header from './layout/Header';
import './App.css';
import Landing from './components/Landing';
import Welcomer from './components/Welcomer';
import Ornament from './layout/Ornament';
import MenuSection from './components/MenuSection';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Landing></Landing>
      <Ornament></Ornament>
      <Welcomer></Welcomer>
      <Ornament></Ornament>
      <MenuSection></MenuSection>
      <Ornament></Ornament>
    </Fragment>
  );
}

export default App;
