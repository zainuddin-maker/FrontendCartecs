import React from 'react';
import { Link } from "react-router-dom";


import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Profile from "../../../assets/img/fotoprofil.svg";
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  render() {
    return (
      <Dropdown  onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle style={{backgroundColor:"#ffffff" ,border:"#ffffff"}}>
        <img alt="Profile Logo" src={Profile}  style={{  }} />
        </DropdownToggle>
        <DropdownMenu> 
          <DropdownItem>Profil</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Ubah Password</DropdownItem>
          <DropdownItem divider />
          <Link to="/users/login" >
          <DropdownItem  >Log Out</DropdownItem>
          </Link>
        </DropdownMenu>
      </Dropdown>
    );
  }
}