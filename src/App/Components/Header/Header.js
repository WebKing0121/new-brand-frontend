import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Header.css';

const PageDropDown = ({ label, onSelected, items }) => {
  const [ isOpened, openDropDown ] = useState(false);

  const onMouseOver = () => {
    openDropDown(true);
  };

  const onMouseLeave = () => {
    openDropDown(false);
  };

  const toggle = () => {
    openDropDown(!isOpened)
  }
  if(label===undefined) {
    label = items[0];
  }

  return (
    <React.Fragment>
      <Dropdown
        className="d-inline-block"
        isOpen={isOpened}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        toggle={toggle}
      >
        <DropdownToggle>
          {label}
        </DropdownToggle>
        <DropdownMenu>
          {items.map(item => (
            <DropdownItem onClick={() => onSelected(item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeOpen: false,
      pricingOpen: false,
    };
  }

  setHomePage = (value) => {
    const { homeOpen } = this.state;
    this.setState({
      homeOpen: !homeOpen,
      homeValue: value
    });
  };

  setWorkPage = (value) => {
    const { pricingOpen } = this.state;
    this.setState({
      pricingOpen: !pricingOpen,
      workValue: value
    });
  };

  

  render() {  
    return (
      <div className = "header">
        <div className = "logo">
          <a href = "/">
            <span>N/<b className = "brand">B</b></span>
            <span className="brand-tail">rands</span>
          </a>
        </div>
        <div className = "menu">
          <PageDropDown items={['Home/', 'Our story', 'Newsroom']} onSelected = {this.setHomePage} label={this.state.homeValue}/>
        </div>
        <div className = "group">
          <PageDropDown items={['How it work', 'Pricing', 'Developers']} onSelected = {this.setWorkPage} label={this.state.workValue} />
        </div>
        <div className = "en">
          <span>/ En</span>
        </div>
        <div className = "auth">
          <div className = "login">
            <span>Login /</span>
          </div>
          <div className = "register">
            <span>&nbsp;Register</span>
          </div>
        </div>
      </div>
    );
  }
}