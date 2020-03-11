import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';

import { Grid, Button } from '@material-ui/core';
import { COLOR, BOLD, COLUMN_CENNTER, BUTTON_OVAL, DARK } from '../../../assets/css/main';
import { Link } from "react-router-dom";
import { grey } from '@material-ui/core/colors';
import "react-multi-carousel/lib/styles.css"; 
import {Gearbox,Mengecat,Bahanbakar,Radiatormobil,MazdaLogo, BmwLogo, VwLogo, SuzukiLogo, AudiLogo, ToyotaLogo , Background ,Backgrounddua ,Backgroundtiga, Otomotif ,Career, Sertified , Increase } from '../../../assets/img';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Header,Headerafter, Footer } from '../../components/index.js';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "203px",
      backgroundColor:"#ffffff"
    },
    selectEmpty: {
      marginTop: theme.spacing(1)
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
                    
                    <Grid item lg={12} container justify="center" direction="row" alignItems="flex-start"  style={{ backgroundColor: "#fbfbfb" }}>
                        
                            <Grid item lg={11} container  direction="row" alignItems="flex-start"  >
                                    <Grid item lg={12} style={{backgroundColor:"#000000", height:"40px"}}>

                                    </Grid>
                                    <Grid item lg={6} style={{ textAlign: 'left', height:"40px", marginTop: "50px" ,color :"#333333" }} >
                                        <h1>Selamat datang kembali, Yudha!</h1>
                                    </Grid>

                                    <Grid item lg={12} style={{ textAlign: 'left', height: "64px" }} >
                                        <p style={{fontSize:"16px" ,color :"#333333" ,lineHeight:"1.5"}}>Siap untuk pelajari materi baru hari ini? </p>
                                    </Grid>
                                    

                                    <Grid item md={12} style={{ textAlign: 'left', height: "76px"  } } >
                                    <div>
                                        <FormControl  variant="outlined" className={classes.formControl}>
                                        <Select  style={{ color:"#3b69ce" ,fontWeight: "bold"}} native value={state.level} onChange={handleChange("level")}>
                                        <option value={10}>Level 1</option>
                                        <option value={20}>Level 2</option>
                                        <option value={30}>Level 3</option>
                                        </Select>
                                        </FormControl>
                                    </div>
                                    </Grid>

                                    <Grid  item lg={12} style={{paddingTop :"0px", backgroundColor:"#ffffff" , height :"350px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea' }} >
                                            <Grid container direction="row"> 
                                                <Grid item md={6} style={{ height:"70px"}}  >
                                                  <Grid style={{ height:"50px"}}>
                                                  <p style={{fontSize:"15px" ,color :"#333333"  , fontWeight:"bold" ,paddingLeft:"20px" ,paddingTop:"10px"}}>Level 1 Pemula</p>
                                                  </Grid>
                                                
                                                              
                                                              <Grid container direction ="row" justify="flex-start" alignItems="center"  > 
                                                               <Grid item md={2} style={{ height:"28px"}}  >
                                                               <p style={{fontSize:"12px" ,color :"#333333"  , fontWeight:"bold" ,paddingLeft:"20px" }}>Status :</p>
                                                               </Grid>

                                                               <Grid item md={6}  style={{ height:"28px"}} >
                                                               <p style={{fontSize:"12px" ,color :"#ffffff" , width:"110px",backgroundColor:"#e05a44",borderRadius:"4px", fontWeight:"bold" ,paddingLeft:"20px"  }}>Belum Lulus</p>
                                                               </Grid>
                                                               </Grid> 
                                                 </Grid>

                                                <Grid  container direction="row" justify="flex-end" alignItems="center" item md={6}   style={{ height:"70px"}} >
                                                          <Grid container direction="column" justify="center" alignItems="flex-start" item sm={2} style={{height:"70px" }}>
                                                                  <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Nilai Tes :</p>
                                                                  <p style={{fontSize:"10px" ,color :"#000000"   }}>28 Jan 2020</p>
                                                          </Grid>

                                                          <Grid container direction="column" justify="center" alignItems="flex-start" item sm={2} style={{height:"70px"  }}>
                                                                <p style={{fontSize:"25px" ,color :"#000000"  , fontWeight:"bold" ,borderRadius:"2px" ,width:"80px" , textAlign:"center" ,backgroundColor:"#7aa2dc" ,color:"#0a54bf"}}>40</p>
                                                          </Grid>
                                                          <Grid container direction="column" justify="center" alignItems="flex-start"  style={{width:"30px" }} >
                                                                  <div style={{border: '1px solid #eaeaea',height:"40px"}}>

                                                                  </div>
                                                          </Grid>
                                                          <Grid container direction="column" justify="center" alignItems="flex-start" item sm={3} style={{height:"70px" }}>
                                                                <Button style={{ fontSize:"14px" ,color:"#ffffff",textAlign:"center", textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px" ,backgroundColor:"#3b69ce" ,width:"110px" ,height:"35px"}}>Ambil Test</Button>
                                                          </Grid>

                                                          
                                                </Grid>  
                                           </Grid> 
                                           <Grid item lg ={12} style={{height :"10px" ,paddingLeft:"20px" ,paddingRight:"20px"}}>
                                                <hr ></hr>
                                            
                                            </Grid> 
                                            <Grid item lg={12} style={{height:"50px"}}>
                                                 <InfiniteCarousel
                                                      breakpoints={[
                                                        {
                                                          breakpoint: 500,
                                                          settings: {
                                                            slidesToShow: 2,
                                                            slidesToScroll: 2,
                                                          },
                                                        },
                                                        {
                                                          breakpoint: 768,
                                                          settings: {
                                                            slidesToShow: 3,
                                                            slidesToScroll: 3,
                                                          },
                                                        },
                                                      ]}
                                                      
                                                      showSides={true}
                                                      sidesOpacity={.5}
                                                      sideSize={.1}
                                                      slidesToScroll={4}
                                                      slidesToShow={4}
                                                      scrollOnDevice={true}
                                                      >
                                             <div style={{  height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <Grid item lg={12} style={{}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    </Grid>
                                                    

                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" ,paddingLeft:"10px"}}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000" ,paddingLeft:"10px"  }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000" ,paddingLeft:"10px"  }}>15 Video</p>
                                              </div>
                                              <div style={{ height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Mengecat} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" ,paddingLeft:"10px"}}>Teknik Mengecat</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px" }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px"}}>15 Video</p>
                                              </div>
                                              <div style={{  height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Bahanbakar} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold",paddingLeft:"10px" }}>Membersihkan Filter Bahan Bakar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px" }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px" }}>15 Video</p>
                                              </div>
                                              <div style={{ height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Radiatormobil} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold",paddingLeft:"10px" }}>Cara Melepas Radiator Mobil</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000" ,paddingLeft:"10px"  }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px" }}>15 Video</p>
                                              </div>
                                              <div style={{  height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
    
    
                                         </InfiniteCarousel>
                                     </Grid>

                                     </Grid>
                                     <Grid item lg={12} style={{height:"50px"}}>
                                      </Grid>

                                     
                                     
                                     <Grid  item lg={12} style={{paddingTop :"0px", backgroundColor:"#ffffff" , height :"350px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea' }} >
                                           
                                           <Grid item lg ={12} style={{height :"50px" }}>
                                           <p style={{fontSize:"15px" ,color :"#333333"  , fontWeight:"bold" ,paddingLeft:"20px" ,paddingTop:"17px"}}>Rekomendasi Pelatihan dan Sertifikasi </p>
                                            
                                            </Grid>  
                                            <Grid item lg={12} style={{height:"50px"}}>
                                                 <InfiniteCarousel
                                                      breakpoints={[
                                                        {
                                                          breakpoint: 500,
                                                          settings: {
                                                            slidesToShow: 2,
                                                            slidesToScroll: 2,
                                                          },
                                                        },
                                                        {
                                                          breakpoint: 768,
                                                          settings: {
                                                            slidesToShow: 3,
                                                            slidesToScroll: 3,
                                                          },
                                                        },
                                                      ]}
                                                      
                                                      showSides={true}
                                                      sidesOpacity={.5}
                                                      sideSize={.1}
                                                      slidesToScroll={4}
                                                      slidesToShow={4}
                                                      scrollOnDevice={true}
                                                      >
                                             <div style={{  height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" ,paddingLeft:"10px"}}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000" ,paddingLeft:"10px"  }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000" ,paddingLeft:"10px"  }}>15 Video</p>
                                              </div>
                                              <div style={{ height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Mengecat} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" ,paddingLeft:"10px"}}>Teknik Mengecat</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px" }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px"}}>15 Video</p>
                                              </div>
                                              <div style={{  height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Bahanbakar} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold",paddingLeft:"10px" }}>Membersihkan Filter Bahan Bakar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px" }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px" }}>15 Video</p>
                                              </div>
                                              <div style={{ height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Radiatormobil} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold",paddingLeft:"10px" }}>Cara Melepas Radiator Mobil</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000" ,paddingLeft:"10px"  }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"  ,paddingLeft:"10px" }}>15 Video</p>
                                              </div>
                                              <div style={{  height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
                                              <div style={{ backgroundColor:"#4bb84d" , height :"240px",width:"212px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea'}}>
                                                    <div >
                                                    <img alt="okeee" src={Gearbox} style={{ backgroundColor:"#ffffff" ,width:"210px" , height :"150px",borderTopRightRadius:"8px" ,borderTopLeftRadius:"8px"}} />
                                                    </div>
                                                    <p style={{fontSize:"12px" ,color :"#000000"  , fontWeight:"bold" }}>Bagaimana Otomatisasi gearbox bekerja</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>Dasar</p>
                                                    <p style={{fontSize:"10px" ,color :"#000000"   }}>15 Video</p>
                                              </div>
    
    
                                         </InfiniteCarousel>
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