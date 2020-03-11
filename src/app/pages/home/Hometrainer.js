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
import './Hometrainer.css';

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
  

export default function Homestudent()  {
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
                   <div>
                  <Headerafter />
                  </div>
                <Grid container justify="center" alignContent="center" >
                    
                    <Grid item lg={12} container justify="center"   style={{ backgroundColor: "#fbfbfb" }}>
                        
                            <Grid item lg={11}  style={{height:"900px" }}  >
                                    <Grid container direction="row" item lg={12} style={{height:"30%"}}>
                                              <Grid  style={{ height:"40%" ,width:"100%"}}>

                                              </Grid>
                                              <Grid  style={{ textAlign: 'left', height:"15%",width:"100%" ,color :"#333333" }} >
                                                  <h1>Hai Kurt !</h1>
                                              </Grid>

                                              <Grid  style={{ textAlign: 'left', height: "45%",width:"100%" }} >
                                                  <p style={{fontSize:"16px" ,color :"#333333" ,lineHeight:"1.5"}}>Ayo Lengkapi Materimu atau Tambahkan Materi Baru! </p>
                                              </Grid>
                                    </Grid>
                                    <Grid container direction="row" item lg={12} style={{height:"5%" }}>
                                        <Grid container direction="row" style={{height:"100%",width:"50%" }}>
                                                <Grid container justify="flex-start" alignItems="center"    style={{ textAlign: 'left', fontSize:"2vmin", height: "100%" ,width:"15%",color:"#333333" } }  >
                                                Urutkan
                                                </Grid>
                                                
                                                <Grid container justify="flex-start" alignItems="center"  style={{ textAlign: 'left', height: "100%" ,width:"85%"  } }  >
                                                <div>
                                                    <FormControl  variant="outlined" className={classes.formControl} >
                                                    <Select  style={{ fontSize:"2vmin",color:"#333333",fontWeight: "bold",height:"30px" }} native value={state.level} onChange={handleChange("level")}>
                                                    <option value={10}>Utama</option>
                                                    <option value={20}>Itama</option>
                                                    <option value={30}>Atama</option>
                                                    </Select>
                                                    </FormControl>
                                                </div>
                                                </Grid>
                                        </Grid>
                                        <Grid container justify="flex-end" alignItems="center" style={{height:"100%",width:"50%"}} >
                                          
                                        <Button style={{ fontSize:"0.8vmax" ,color:"#ffffff",textAlign:"center",border:"auto", textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px" ,backgroundImage:"linear-gradient(to left, #7aa2dc, #3b69ce)",width:"25%" ,height:"60%"}}>Tambah Materi</Button>
                                        </Grid>

                                                
                                    </Grid>

                                    <Grid container direction="row"  item lg={12} style={{paddingTop :"0px", backgroundColor:"#ffffff" , height :"350px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea' }} >
                                            <Grid container direction="row" item md={12} style={{height:"44px" ,backgroundColor:"#e4ecf8"}}>
                                                <Grid container justify="center" alignItems="center" style={{height:"100%" ,width:"5%" }}>
                                                                <div className="katatableNo">
                                                                    No.
                                                                </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center"  style={{height:"100%" ,width:"35%" }}>
                                                            <div className="katatable">
                                                                Judul Materi
                                                            </div>
                                                
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"15%"}}>
                                                        <div className="katatable">
                                                        Kategori
                                                            </div>
                                                 </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"15%"}}>
                                                            <div className="katatable" > 
                                                            Jumlah Konten
                                                            </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                            <div className="katatable" >
                                                            Kuis
                                                            </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                            <div className="katatable">
                                                            Diskusi
                                                            </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                            <div className="katatable">
                                                            Action
                                                            </div>
                                                </Grid>
                                                
                                            
                                            
                                            </Grid> 
                                            <Grid container  alignItems="center" justify="center" item lg={12} style={{height:"300px"}} >
                                                    <Grid container  alignItems="center" direction="column"  item lg={4} style={{height:"100%"}} >
                                                            <Grid container justify="center"  style={{height:"60%",width:"50%"}}>
                                                            <img alt="Frame" src={Frame} style={{ }} />
                                                            </Grid>
                                                            <Grid container justify="center"  style={{height:"20%" ,width:"90%"}}>
                                                                    <div className="texttengah">
                                                                    Belum ada materi pada e learning Anda, silahkan klik Tambah Materi untuk membuat materi baru
                                                                    </div>
                                                            </Grid>
                                                            <Grid container justify="center" alignItems="center" style={{height:"20%"}}>
                                                               <Link to= "/Home/trainerupload"  style={{height:"60%" ,widht:"50%"}}>
                                                            <Button style={{ fontSize:"12px" ,color:"#ffffff",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px" ,backgroundImage:"linear-gradient(to left, #7aa2dc, #3b69ce)",width:"100%" ,height:"100%"}}>Tambah Materi</Button>
                                                              </Link>
                                                            </Grid>






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