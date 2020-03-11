import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';

import { Grid, Button } from '@material-ui/core';
import { COLOR, BOLD, COLUMN_CENNTER, BUTTON_OVAL, DARK } from '../../../assets/css/main';
import { Link } from "react-router-dom";
import { grey } from '@material-ui/core/colors';
import "react-multi-carousel/lib/styles.css"; 
import {Gearbox,Mengecat,Bahanbakar,Radiatormobil,MazdaLogo, BmwLogo, VwLogo, SuzukiLogo, AudiLogo, ToyotaLogo , Background ,Backgrounddua ,Backgroundtiga, Otomotif ,Career, Sertified , Increase,Frame } from '../../../assets/img';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Header,Headerafter, Footer } from '../../components/index.js';
import './Uploadtrainer.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
      
      border :" #e0e0e0",
      backgroundColor:"#fbfbfb" ,
      opacity:"0.1",
      
      
    },
    selectEmpty: {
      marginTop: theme.spacing(0)
    }
  }));
  

export default function Uploadtrainer()  {
    const classes = useStyles();
    const [state, setState] = React.useState({
      level: ""
    });
  
    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value
      });
    };
    
    
        return (
             
            <React.Fragment>
                <Grid container justify="center" alignContent="center" >
                    
                
                    <Grid item lg={12} container justify="center"   style={{  }}>
                            <Grid item lg={12}  style={{height:"900px" }}  >
                                    <Grid container direction="row" item lg={12} style={{height:"6%",backgroundColor:"#000000"}}>
                                              <Grid container direction="row" item lg={12}  style={{ height:"60px" ,backgroundColor:"#656c9a" }}>
                                                  <Grid container alignItems="center" justify="center" item md={3}  style={{height:"100%" }}>
                                                      <Button variant="text" startIcon={<ArrowBackIosIcon />} style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px" ,backgroundColor:"#ffffff",width:"40%" ,height:"60%"}}>Kembali</Button>
                                                  </Grid>
                                                  <Grid container alignItems="center" justify="flex-start" item md={9} style={{height:"100%"}}>
                                                      <div className="materibaru">
                                                        Buat Materi Baru
                                                      </div>
                                                  </Grid>

                                              </Grid>
                                             
                                    </Grid>
                                    <Grid item lg={12} container direction="row" style={{backgroundColor:"#000000", height:"20px"}}  >
                                          <Grid item lg={3} container direction="column">
                                                <Grid item md={12}>

                                                </Grid>
                                                <Grid item md={12}>

                                                </Grid>
                                          </Grid>
                                    </Grid>

                                    
                                     

                                     
                                     
                                     
                                     <Grid item lg={12} style={{height:"150px"}}>
                                      </Grid>                  
                                     
                                    
                                    
                                    
        

                                
                            </Grid>
                        
                    </Grid>
                    
                       
                </Grid>
            </React.Fragment>
           
        )
    
}