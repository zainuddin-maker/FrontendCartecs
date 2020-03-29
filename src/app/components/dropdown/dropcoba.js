import React from 'react';
import {  Grid } from '@material-ui/core';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StoreIcon from '@material-ui/icons/Store';
import ForumIcon from '@material-ui/icons/Forum';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Profile from "../../../assets/img/fotoprofil.svg";
import './dropdow.css';
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
        <DropdownToggle style={{width:"180px" ,height:"40px" ,backgroundColor:"#4774d1" ,boxShadow:"0 8px 20px 0 rgba(0, 0, 0, 0.2)" ,border:"#4774d1"}} >
        <Grid container direction="row">
         <Grid container alignItems="center" justify="center" item lg={3}>
          <ImportContactsIcon style={{color:"#ffffff"}} fontSize="small" />

         </Grid>
         <Grid container alignItems="center" justify="flex-start"  item lg={8} className="elearing">
             E-Learning

         </Grid>
         <Grid   item lg={1} >
         <ExpandMoreIcon style={{color:"#ffffff"}} fontSize="small" />

         </Grid>
        </Grid>
        
           
        
        </DropdownToggle>
        <DropdownMenu> 
          <DropdownItem style={{width:"180px" ,height:"40px"  }}  >
          <Grid container direction="row">
         <Grid container alignItems="center" justify="flex-start" item lg={1}>
          <ImportContactsIcon style={{color:"#4774d1"}} fontSize="small" />

         </Grid>
         <Grid container alignItems="center" justify="center"  item lg={8} className="elearing" style={{color:"#4774d1"}}>
             E-Learning

         </Grid>
         
        </Grid>
        
          </DropdownItem>
          
          <DropdownItem style={{width:"180px" ,height:"40px"  }} >
          <Grid container direction="row">
         <Grid container alignItems="center" justify="flex-start" item lg={1}>
          <StoreIcon style={{color:"#000000"}} fontSize="small" />

         </Grid>
         <Grid container alignItems="center" justify="center"  item lg={8} className="elearing" style={{color:"#000000"}}>
         Oto-Market

         </Grid>
         
        </Grid>
            </DropdownItem>
          
          
          <DropdownItem  style={{width:"180px" ,height:"40px"  }} >
          <Grid container direction="row">
         <Grid container alignItems="center" justify="flex-start" item lg={1}>
          <ForumIcon style={{color:"#000000"}} fontSize="small" />

         </Grid>
         <Grid container alignItems="center" justify="center"  item lg={8} className="elearing" style={{color:"#000000"}}>
         Forum

         </Grid>
         
        </Grid>
          </DropdownItem>
         
        </DropdownMenu>
      </Dropdown>
    );
  }
}