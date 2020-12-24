import React from 'react';

import './MainHeader.css';

const MainHeader = props => {
    return <header className = "main-header " >
        <button
          className="main-navigation__menu-btn"
          onClick={props.onClick}
        >
          <span />
          <span />
          <span />
        </button>
          </header>;
};

export default MainHeader;