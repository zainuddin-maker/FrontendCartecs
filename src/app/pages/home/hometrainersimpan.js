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
import './hometrainersimpan.css';

import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'; 
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import AddIcon from '@material-ui/icons/Add';

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

                                    <Grid  item lg={12} style={{paddingTop :"0px", backgroundColor:"#ffffff" , height :"350px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea' }} >
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
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
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
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%" }}>
                                                            <div className="katatable">
                                                            Action
                                                            </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"5%"}}>
                                                            
                                                </Grid>
                                           
                                            </Grid> 
                                            <Grid container direction="row" item md={12} style={{height:"44px" ,backgroundColor:"#ffffff" ,borderBottom:"1px solid #eaeaea" ,borderLeft:"1px solid #eaeaea" ,borderRight:"1px solid #eaeaea"}}>
                                                <Grid container justify="center" alignItems="center" style={{height:"100%" ,width:"5%" }}>
                                                                <div className="katatableNo">
                                                                   1
                                                                </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center"  style={{height:"100%" ,width:"35%" }}>
                                                            <div className="katatable">
                                                            Cara kerja transmisi otomatis
                                                            </div>
                                                
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                        <div className="katatable">
                                                        Dasar
                                                            </div>
                                                 </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"15%"}}>
                                                            <div className="katatable" > 
                                                            11
                                                            </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                <Button variant="text" startIcon={<AddIcon />} style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"lowercase",fontWeight:"bold",borderRadius:"4px",border:"solid 1px #3b69ce" ,backgroundColor:"#ffffff",width:"80%" ,height:"80%"}}>tambah</Button>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                <Button variant="text"  style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"lowercase",fontWeight:"bold",borderRadius:"4px",border:"solid 1px #3b69ce" ,backgroundColor:"#ffffff",width:"80%" ,height:"80%"}}>masuk</Button>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                <IconButton   >
                                                                                                          <MoreHorizIcon />
                                                                                                        </IconButton>
                                                </Grid>
                                                <Grid container direction="column" justify="flex-start" alignItems="center" style={{height:"100%" ,width:"5%"}}>
                                                <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}>
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowUpIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>

                                                                                                        <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}> 
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowDownIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>   
                                                </Grid>
                                           
                                            </Grid> 
                                            <Grid container direction="row" item md={12} style={{height:"44px" ,backgroundColor:"#ffffff" ,borderBottom:"1px solid #eaeaea" ,borderLeft:"1px solid #eaeaea" ,borderRight:"1px solid #eaeaea"}}>
                                                <Grid container justify="center" alignItems="center" style={{height:"100%" ,width:"5%" }}>
                                                                <div className="katatableNo">
                                                                   2
                                                                </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center"  style={{height:"100%" ,width:"35%" }}>
                                                            <div className="katatable">
                                                            Bag 2. Bagaimana Otomatisasi gearbox bekerja
                                                            </div>
                                                
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                        <div className="katatable">
                                                         Bodi Mobil
                                                            </div>
                                                 </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"15%"}}>
                                                            <div className="katatable" > 
                                                            12
                                                            </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                <Button variant="text" startIcon={<AddIcon />} style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"lowercase",fontWeight:"bold",borderRadius:"4px",border:"solid 1px #3b69ce" ,backgroundColor:"#ffffff",width:"80%" ,height:"80%"}}>tambah</Button>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                <Button variant="text"  style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"lowercase",fontWeight:"bold",borderRadius:"4px",border:"solid 1px #3b69ce" ,backgroundColor:"#ffffff",width:"80%" ,height:"80%"}}>masuk</Button>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                <IconButton   >
                                                                                                          <MoreHorizIcon />
                                                                                                        </IconButton>
                                                </Grid>
                                                <Grid container direction="column" justify="flex-start" alignItems="center" style={{height:"100%" ,width:"5%"}}>
                                                <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}>
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowUpIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>

                                                                                                        <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}> 
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowDownIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>   
                                                </Grid>
                                           
                                            </Grid> 

                                            <Grid container direction="row" item md={12} style={{height:"44px" ,backgroundColor:"#ffffff" ,borderBottom:"1px solid #eaeaea" ,borderLeft:"1px solid #eaeaea" ,borderRight:"1px solid #eaeaea"}}>
                                                <Grid container justify="center" alignItems="center" style={{height:"100%" ,width:"5%" }}>
                                                                <div className="katatableNo">
                                                                   3
                                                                </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center"  style={{height:"100%" ,width:"35%" }}>
                                                            <div className="katatable">
                                                            Bag 3. Bagaimana Otomatisasi gearbox bekerja
                                                            </div>
                                                
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                        <div className="katatable">
                                                        Pengapian
                                                            </div>
                                                 </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"15%"}}>
                                                            <div className="katatable" > 
                                                            10
                                                            </div>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                <Button variant="text" startIcon={<AddIcon />} style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"lowercase",fontWeight:"bold",borderRadius:"4px",border:"solid 1px #3b69ce" ,backgroundColor:"#ffffff",width:"80%" ,height:"80%"}}>tambah</Button>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                <Button variant="text"  style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"lowercase",fontWeight:"bold",borderRadius:"4px",border:"solid 1px #3b69ce" ,backgroundColor:"#ffffff",width:"80%" ,height:"80%"}}>masuk</Button>
                                                </Grid>
                                                <Grid container justify="flex-start" alignItems="center" style={{height:"100%" ,width:"10%"}}>
                                                <IconButton   >
                                                                                                          <MoreHorizIcon />
                                                                                                        </IconButton>
                                                </Grid>
                                                <Grid container direction="column" justify="flex-start" alignItems="center" style={{height:"100%" ,width:"5%"}}>
                                                <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}>
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowUpIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>

                                                                                                        <Grid container justify="center" alignItems="center" style={{width:"100%" ,height:"50%"}}> 
                                                                                                        <IconButton size="small" >
                                                                                                                   <KeyboardArrowDownIcon fontSize="small"  />
                                                                                                        </IconButton>
                                                                                                        </Grid>   
                                                </Grid>
                                           
                                            </Grid> 
                                            <Grid container direction="row" style={{height:"15%",width:"100%"}}>
                                                                                                    <Grid container justify="center" alignItems="center" style={{height:"100%" ,width:"16%" }}>
                                                                                                          <div className="materiperhalaman">
                                                                                                            Materi perhalaman 
                                                                                                          </div>
                                                                                                    </Grid>
                                                                                                    <Grid container justify="center" alignItems="center"  style={{height:"100%" ,width:"5%" }}>
                                                                                                          
                                                                                                         <div className="buttonallblue">
                                                                                                           10
                                                                                                         </div>
                                                                                                    </Grid>
                                                                                                    <Grid container justify="center" alignItems="center"  style={{height:"100%" ,width:"5%" }}>
                                                                                                          
                                                                                                          <div className="buttonallwhite">
                                                                                                            15
                                                                                                          </div>
                                                                                                     </Grid>
                                                                                                     <Grid container justify="center" alignItems="center"  style={{height:"100%" ,width:"5%" }}>
                                                                                                          
                                                                                                          <div className="buttonallwhite">
                                                                                                            20
                                                                                                          </div>
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