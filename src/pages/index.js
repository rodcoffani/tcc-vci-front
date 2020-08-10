import React from 'react';
import './styles.css';
import Header from '../components/Header';
import L from '../pages/Login/'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="title">
          <div className="h1">
            Treinamentos
          </div>
          <div className="sub">
            Nós somos uma plataforma de treinamento da empresa VCI-Brasil.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
