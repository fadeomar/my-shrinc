import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuLogo, menuTopLogo } from '../../assets';
import menuData from './menu-items';
import './Header.css';

class Header extends Component {
  state = {
    isClosed: true,
    blurred: false,
  };

  onclick = () => {
    const { isClosed, blurred } = this.state;
    this.setState({ isClosed: !isClosed, blurred: !blurred });
  };

  onclickForModel = e => {
    if (e.target.id === 'model') {
      this.setState({ isClosed: true, blurred: false });
    }
  };

  render() {
    const { isClosed, blurred } = this.state;
    return (
      <div>
        <div className="header">
          <div className="header_befor-click">
            <div className="menu-icon" onClick={this.onclick} role="button">
              <Menu />
            </div>
            <Link to="/">
              <img src={menuTopLogo} alt="menu logo" />
            </Link>
          </div>
          {/* sidebar */}
          <div
            className={blurred ? 'menu-model' : ''}
            onClick={this.onclickForModel}
            id="model"
            role="button"
          >
            <nav className={`menu_nav-container ${isClosed ? 'hide' : ''}`}>
              <div
                className="menu_nav-header"
                onClick={this.onclick}
                role="button"
              >
                <h2 className="menu-title">Menu</h2>
              </div>
              <ul className="menu-list">
                <div className="menu_img-container">
                  <img src={MenuLogo} alt="menu"></img>
                </div>
                {menuData.map(item => (
                  <li key={item.label} className="menu-item">
                    {item.icon ? item.icon : ''}
                    <Link to={item.url} className="menu-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
