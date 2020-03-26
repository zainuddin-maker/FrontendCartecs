import React from 'react';
import { Link } from "react-router-dom";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Profile from "../../../assets/img/fotoprofil.svg";
import Dasar from "../../../assets/img/Dasar.svg";
import Bodi from "../../../assets/img/Bodimobil.svg";
import Listrik from "../../../assets/img/Listrik.svg";
import Pendingin from "../../../assets/img/Pendingin.svg";
import Mesin from "../../../assets/img/Mesin.svg";
import Bahanbkar from "../../../assets/img/Bahanbakar.svg";
import Pengapian from "../../../assets/img/Pengapian.svg";
import Pengemudian from "../../../assets/img/Pengemudian.svg";
import Roda from "../../../assets/img/Roda.svg";
import Transmisi from "../../../assets/img/Transmisi.svg";
import Suspensi from "../../../assets/img/Suspensi.svg";

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
          
          <DropdownItem  >Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}