import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Header />
      <Body />
      <Footer message = 'Fun Recipes Application' />  
      <Footer message= "Let's leran how make delicious food" />  
      <Footer message="We are foodies" />  
    </div>
  );
}

export default App;
