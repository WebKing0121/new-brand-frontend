import React from 'react';
import './Header.css';
import logoImg from '../../Assets/images/logo2.png';

const Menu = ({ activeItemIdx, onSelect, menuItems }) => {
  if (activeItemIdx === undefined) {
    activeItemIdx = 0;
  }
  activeItemIdx = activeItemIdx % 2;

  return (
    <React.Fragment>
      <div className="header_menu">
        {menuItems.map((item, idx) => (
          <a className={activeItemIdx === idx ? 'active' : 'passive'}>
            <div onClick={() => onSelect(idx)}>
              {item}
            </div>
          </a>
        ))}
      </div>
    </React.Fragment>
  );
}
export default class Header extends React.Component {
  menuItems = ['Home /', 'How it work', 'Our story', 'Pricing', 'Newsroom', 'Developers'];
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  selectItem = (idx) => {
    // const { homeOpen } = this.state;
    // this.setState({
    //   homeOpen: !homeOpen,
    //   activeItemIdx: idx
    // });
    let temp = this.menuItems[idx % 2];
    this.menuItems[idx % 2] = this.menuItems[idx];
    this.menuItems[idx] = temp;
    this.setState({
      activeItemIdx: idx
    })
  };

  setWorkPage = (value) => {
    const { pricingOpen } = this.state;
    this.setState({
      pricingOpen: !pricingOpen,
      workValue: value
    });
  };

  onMouseOver = () => {
    this.setState({
      openDropDown: true,
      // homeValue: value
    });
  };

  onMouseLeave = () => {
    this.setState({
      openDropDown: false,
    });
  };

  render() {
    return (
      <div className="header"
        // isOpen={isOpened}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}>
        <div className="header_logo">
          <div className="header_logo_region">
            <img src={logoImg} alt="N/Brands" />
          </div>
        </div>
        <Menu
          onSelect={(idx) => this.selectItem(idx)}
          activeItemIdx={this.state.activeItemIdx}
          menuItems={this.menuItems}
        />
        <div className="header_lang">
          <span>/ En</span>
        </div>
        <div className="header_auth">
          <div className="login">
            <span>Login /</span>
          </div>
          <div className="register">
            <span>&nbsp;Register</span>
          </div>
        </div>
      </div>
    );
  }
}