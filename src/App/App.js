import React from 'react';
import Routes from './Routes';

const App = () =>(
    <div className="main-wrapper">
      <div className="header-container">
        This is header
      </div>
      <div className={"body"}>
        <Routes />
      </div>
      <div className="footer-container">
        This is footer
      </div>
    </div>
    );

export default App;
