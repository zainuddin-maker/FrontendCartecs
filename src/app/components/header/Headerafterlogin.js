import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, IconButton, InputBase, MenuItem, Button } from '@material-ui/core';
import { Search as SearchIcon, Apps as SortIcon, More as MoreIcon ,NotificationsNone as Notif } from '@material-ui/icons';
import { grey, blue } from '@material-ui/core/colors';
import cartech from "../../../assets/img/cartech-logo.svg";
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
import { BUTTON_OVAL, DARK } from '../../../assets/css/main';
import Sparator from '../general/Sparator';


import { Dropdown, Menu,Image } from 'semantic-ui-react' ;
import 'semantic-ui-css/semantic.min.css';

const trigger = (
    <Grid  style={{height:"2px" }}>


    <Image  src={Dasar} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
    <span style={{paddingLeft:"10px"}}> Dasar</span>
  
    </Grid>
)
const trigger2 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Bodi} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Bodi Mobil</span>

  </Grid>
)
const trigger3 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Listrik} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Rem</span>

  </Grid>
)
const trigger4 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Pendingin} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Pendingin</span>

  </Grid>
)
const trigger5 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Mesin} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Mesin</span>

  </Grid>
)
const trigger6 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Bahanbkar} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Bahan Bakar</span>

  </Grid>
)
const trigger7 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Pengapian} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Pengapian</span>

  </Grid>
)
const trigger8 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Pengemudian} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Pengemudian</span>

  </Grid>
)
const trigger9 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Suspensi} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Suspensi</span>

  </Grid>
)
const trigger10 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Transmisi} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Transmisi</span>

  </Grid>
)
const trigger11 = (
  <Grid  style={{height:"2px" }}>


  <Image  src={Roda} verticalAlign='middle' style={{height:"15px",width:"15px"}} /> 
  <span style={{paddingLeft:"10px"}}>Roda</span>

  </Grid>
)



const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        fontSize: 12,
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: grey[100],
        '&:hover': {
            backgroundColor: grey[200],
        },
        border: "0.5px solid",
        borderColor: grey[200],
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 4, 1, 4),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 300,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimaryAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <div >
            <AppBar position="absolute" color="default" style={{ backgroundColor: "white", top: 0, bottom: 'auto', position: 'fixed' }} >
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Link to="/" >
                                    <img alt="Cartech Logo" src={cartech}  style={{ height:"40px" , width:"40px" }} />
                                </Link>
                        <Grid item lg={1}></Grid>
                        <Grid item lg={2} className={classes.title}>
                            <Grid container justify="center">
                                
                                <Sparator type="vertical-spacing" width={10} />
                             

                                <Button startIcon={<SortIcon style={{ color: "#3B69CE" }} />} style={{ textTransform: 'capitalize' }}>
                                <Dropdown text='Kategori' pointing='top' className='link item'  >
                                <Dropdown.Menu>
                                                <Dropdown trigger={trigger}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"140px"}} >
                                                    
                                                    <Dropdown.Menu>
                                                    
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Alat Pengukuran dan Teknik</Dropdown.Item>
                                                        </Link>
                                                        
                                                        <Link to="/users/login">
                                                        <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>        Gambar Teknik</Dropdown.Item>
                                                        </Link>
                                                        
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Teknologi Pembentukan Dasar</Dropdown.Item>
                                                        </Link>

                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Teknik otomotif Dasar</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px" }}>Manajemen Industri Otomotif</Dropdown.Item>
                                                        </Link>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                                <Dropdown trigger={trigger2}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"140px"}} >
                                                    
                                                    <Dropdown.Menu>
                                                    
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Teknologi Bodi Kendaraan</Dropdown.Item>
                                                        </Link>
                                                        
                                                        <Link to="/users/login">
                                                        <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Teknologi Pengecatan</Dropdown.Item>
                                                        </Link>
                                                        
                                                        
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown trigger={trigger3}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"140px"}} >
                                                  <Dropdown.Menu>
                                                    <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Teknik Rem</Dropdown.Item>
                                                        </Link>
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown trigger={trigger4}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"140px"}} >
                                                  <Dropdown.Menu>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Listrik dan Elektronika Dasar</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>elektronika Analog dan Digital</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Listrik dan Elektronika Otomotif</Dropdown.Item>
                                                        </Link>
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown trigger={trigger5}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"140px"}} >
                                                  <Dropdown.Menu>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Sistem AC</Dropdown.Item>
                                                        </Link>
                                                        
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown trigger={trigger6}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"170px"}} >
                                                  <Dropdown.Menu>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Elemen Mekanik Otomotif</Dropdown.Item>
                                                        </Link>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Desain Otomotif</Dropdown.Item>
                                                        </Link>
                                                        
                                                        <Link to="/users/login">
                                                        <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Mekanika Gerak Kendaraan</Dropdown.Item>
                                                        </Link>
                                                        
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Engin Manajemen sistem</Dropdown.Item>
                                                        </Link>

                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Diagnosis Kendaraan</Dropdown.Item>
                                                        </Link>
                                                        
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown trigger={trigger7}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"140px"}} >
                                                  <Dropdown.Menu>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Teknik Pengapian</Dropdown.Item>
                                                        </Link>
                                                        
                                                        
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown trigger={trigger8}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"170px"}} >
                                                  <Dropdown.Menu>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Teknik Kemudi</Dropdown.Item>
                                                        </Link>
                                                        
                                                        
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown trigger={trigger9}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"140px"}} >
                                                  <Dropdown.Menu>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Teknik Suspensi</Dropdown.Item>
                                                        </Link>
                                                        
                                                        
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown trigger={trigger10}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"140px"}} >
                                                  <Dropdown.Menu>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Sistem Pemindahan Tenaga</Dropdown.Item>
                                                        </Link>
                                                        
                                                        
                                                   </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown trigger={trigger11}  pointing='left' className='link item' margin="auto" style={{height:"30px",width:"140px"}} >
                                                  <Dropdown.Menu>
                                                        <Link to="/users/login">
                                                                <Dropdown.Item style={{color:"#000000" ,paddingLeft:"16px" ,width:"250px",fontSize:"12px"}}>Sistem Roda</Dropdown.Item>
                                                        </Link>
                                                        
                                                        
                                                   </Dropdown.Menu>
                                                </Dropdown>
        
        

        
                                        </Dropdown.Menu>
                                        </Dropdown>
                                                            
                                        </Button>
                                 
                            </Grid>
                        </Grid>
                        
                        <Grid item lg={4}>
                            <Grid className={useStyles().search} container alignItems="center">
                                <InputBase
                                    placeholder="Apa yang ingin kamu pelajari…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <SearchIcon style={{color :blue[200] , position: 'absolute', right: 10 }} />
                            </Grid>
                        </Grid>
                        <Grid item lg={4}>
                            <Grid container justify="flex-end" alignItems="center">
                                <div className={classes.grow} />
                                <div className={classes.sectionDesktop}>
                                    <div style={{paddingTop:"10px",paddingRight:"15px"}}>
                                    <Link to="/users/Notification">
                                    
                                    <Notif style={{color :"#000000"}} />
                                    </Link>
                                    </div>
                                    
                                    <Sparator type="vertical" width={10} />
                                    <Link to="/users/loginpengguna ">
                                    <img alt="Profile Logo" src={Profile}  style={{  }} />
                                    </Link>
                                </div>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            
        </div >
    );
}
