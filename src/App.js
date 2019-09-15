import React from 'react';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Container from '@material-ui/core/Container/Container';
import './App.css';

function App() {
  return (
    <div className="bg-grey">
        <Header/>
        <Container maxWidth="md">
            <Register/>
        </Container>
    </div>
  );
}

export default App;
