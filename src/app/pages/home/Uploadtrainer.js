import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';

import { Grid, Button } from '@material-ui/core';
import { COLOR, BOLD, COLUMN_CENNTER, BUTTON_OVAL, DARK } from '../../../assets/css/main';
import { Link } from "react-router-dom";
import { grey } from '@material-ui/core/colors';
import "react-multi-carousel/lib/styles.css"; 
import {Thumbnil,Gambarinput,Gearbox,Mengecat,Bahanbakar,Radiatormobil,MazdaLogo, BmwLogo, VwLogo, SuzukiLogo, AudiLogo, ToyotaLogo , Background ,Backgrounddua ,Backgroundtiga, Otomotif ,Career, Sertified , Increase,Frame } from '../../../assets/img';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Header,Headerafter, Footer } from '../../components/index.js';
import './Uploadtrainer.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import InfoIcon from '@material-ui/icons/Info';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';

import Upload from "./uploadimage";
//My first changex




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
                    
                
                    <Grid item lg={12} container justify="center"   style={{ backgroundColor:"#fbfbfb"  }}>
                            <Grid item lg={12}  style={{height:"1000px" }}  >
                                    <Grid container direction="row" item lg={12} style={{height:"75px"}}>
                                              <Grid container direction="row" item lg={12}  style={{ height:"60px" ,backgroundColor:"#656c9a" }}>
                                                  <Grid container alignItems="center" justify="center" item md={3}  style={{height:"100%" }}>
                                                      <Button variant="text" startIcon={<ArrowBackIosIcon />} style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px",border:"solid 1px #4774d1" ,backgroundColor:"#ffffff",width:"40%" ,height:"60%"}}>Kembali</Button>
                                                  </Grid>
                                                  <Grid container alignItems="center" justify="flex-start" item md={9} style={{height:"100%"}}>
                                                      <div className="materibaru">
                                                        Buat Materi Baru
                                                      </div>
                                                  </Grid>

                                              </Grid>
                                             
                                    </Grid>
                                    <Grid item lg={12} container direction="row" style={{backgroundColor:"#ffffff", height:"120px"}}  >
                                          <Grid item lg={3} c style={{height:"120px" ,backgroundColor:"#ffffff"}}>
                                                <Grid container direction="row" item md={12} style={{height:"60px",backgroundColor:"#ffffff"}}>
                                                  <Grid item lg={3} >

                                                  </Grid>
                                                  <Grid container alignItems="center" justify="flex-start"  item lg={9} >
                                                     <Button  startIcon={<InfoIcon style={{color:"#4e7ad2"}} />} style={{ fontSize:"16px" ,color:"#333333",textTransform:"capitalize",fontWeight:"bold",backgroundColor:"#ffffff",width:"80%" ,height:"60px"}}>Informasi Materi</Button>
                                                  </Grid>
                                                </Grid>
                                                <Grid container direction="row" item md={12} style={{height:"60px",backgroundColor:"#ffffff"}}>
                                                     <Grid item lg={3} >
                                                       </Grid>
                                                       
                                                       <Grid container alignItems="center" justify="flex-start" item lg={9} >
                                                       <Button  startIcon={<CollectionsBookmarkIcon style={{color:"#4e7ad2"}} />} style={{ fontSize:"16px" ,color:"#333333",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",backgroundColor:"#ffffff",width:"50%" ,height:"60px"}}>Konten</Button>
                                                         </Grid> 
                                                      
                                                      
                                                      
                                                </Grid>
                                          </Grid>
                                          <Grid container  justify="center" item lg={9}  style={{height:"800px" ,backgroundColor:"#fbfbfb"}}>
                                               <Grid item lg={11}  style={{height:"800px" }}>
                                                      <Grid container alignItems="center" justify="flex-start" item lg={12}  style={{height:"60px" ,backgroundColor:"#fbfbfb"}}>
                                                        <div className="informasimateri">
                                                          Informasi Materi
                                                        </div>
                                                    
                                                     </Grid>
                                                     <Grid container justify="center"  item lg={12}  style={{height:"750px" ,backgroundColor:"#ffffff",borderRadius:"4px",border:"solid 1px #eaeaea"}}>
                                                          <Grid item lg={11} style={{marginTop:"30px",marginBottom:"30px"}}>
                                                          <Upload />
                                                            <Grid container direction="row" item lg={12} style={{ height:"50px"}}>
                                                                    <Grid item lg={3} style={{height:"100%"}}>
                                                                    <div className="tabelawal">
                                                                          Judul Materi
                                                                          </div>
                                                                      </Grid>
                                                                      <Grid item lg={9} style={{height:"100%"}}>
                                                                          <textarea maxLength="10"  className="input2" placeholder="Tuliskan Judul Materi">

                                                                          </textarea>
                                                                          
                                                                    </Grid>
                                                            </Grid>
                                                            <Grid container direction="row" item lg={12} style={{ height:"50px"}}>
                                                                     <Grid item lg={3} style={{height:"100%"}}>
                                                                     <div className="tabelawal">
                                                                          Kategori
                                                                          </div>
                                                                    </Grid>
                                                                    <Grid item lg={9} style={{height:"100%"}}>
                                                                    <div >
                                                                              <input className="input2"  type="text" name="username" placeholder="Pilih kategori" style={{paddingLeft:"20px"}} />
                                                                        </div>
                                                                    </Grid>
                                                            </Grid>
                                                            <Grid container direction="row"  item lg={12} style={{height:"150px"}}>
                                                                   <Grid item lg={3} style={{height:"100%"}}>
                                                                   <div className="tabelawal">
                                                                          Syarat Mengikuti Materi
                                                                          </div>
                                                                    </Grid>
                                                                    <Grid item lg={9} style={{height:"80%"}}>
                                                                              <textarea className="input4" placeholder=" Contoh : 
- Lorem ipsum dolor sit amet lorem
- Lorem ipsum dolor sit amet lorem
- Lorem ipsum dolor sit amet lorem
- Lorem ipsum dolor sit amet lorem
"/>

                                                                    </Grid>
                                                            </Grid>
                                                            <Grid container direction="row"  item lg={12} style={{ height:"150px"}}>
                                                                    <Grid item lg={3} style={{height:"100%"}}>
                                                                    <div className="tabelawal">
                                                                    Apa yang Pelajar Dapatkan dari Materi Ini
                                                                          </div>
                                                                  </Grid>
                                                                  <Grid item lg={9} style={{height:"80%"}}>
                                                                              <textarea className="input4" placeholder="Contoh : 
- Lorem ipsum dolor sit amet lorem
- Lorem ipsum dolor sit amet lorem
- Lorem ipsum dolor sit amet lorem
- Lorem ipsum dolor sit amet lorem
"/>

                                                                    </Grid>
                                                            </Grid>
                                                            <Grid container direction="row"  item lg={12} style={{ height:"120px"}}>
                                                                   <Grid item lg={3} style={{height:"100%"}}>
                                                                   <div className="tabelawal">
                                                                           Deskripsi Materi
                                                                          </div>
                                                                    </Grid>
                                                                    <Grid item lg={9} style={{height:"80%"}}>
                                                                              <textarea className="input4" placeholder="Contoh : 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "/>

                                                                    </Grid>
                                                            </Grid>

                                                          </Grid>
                                                     </Grid>
                                                     <Grid container justify="center" alignItems="center" item lg={12}  style={{height:"90px" }}>
                                                       <Link to="/Home/kontentrainer" style={{width:"25%" ,height:"40%"}}>
                                                      
                                                        <Button style={{ fontSize:"12px" ,color:"#ffffff",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px" ,backgroundImage:"linear-gradient(to left, #7aa2dc, #3b69ce)",width:"100%" ,height:"100%"}}>Lanjutkan</Button>
                                                        </Link>
                                                    </Grid>
                                                
                                                
                                                </Grid>
                                                
                                          </Grid>

                                    </Grid>

                                    
                                     

                                     
                                     
                                     
                                                       
                                     
                                    
                                    
                                    
        

                                
                            </Grid>
                        
                    </Grid>
                    
                       
                </Grid>
            </React.Fragment>
           
        )
    
}