import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { COLOR, BOLD, COLUMN_CENNTER1,COLUMN_CENNTER2, BUTTON_OVAL, DARK } from '../../../../assets/css/main';
import { Header, Footer } from '../../../components';
import { Link } from "react-router-dom";
import { grey , red } from '@material-ui/core/colors';
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Montir ,Info} from '../../../../assets/img';
import '../../../../assets/css/login/util.css';
import '../../../../assets/css/login/main.css';



export default class UserRegister extends React.Component {
    render() {
        return (
            
            <React.Fragment>
                 <Grid item lg={12}>
                        <Header />
                </Grid>
                   
                <Grid container justify="center" alignContent="center" >
                    <Grid item lg={12} style={{ backgroundColor: "#fbfbfb" }}>
                        <Grid container justify="center" direction="row" alignItems="flex-start">
                            <Grid item lg={10}>
                                <Grid container justify="center" direction="row" alignItems="flex-start" >
                                    <Grid item md={10} style={{ textAlign: 'center', height: "60px", marginTop: 80 ,paddingTop:"5px"}}>
                                        <h2>Daftar sebagai member montir</h2>
                                    </Grid>
                                    <Grid  item md={3} style={{ ... COLUMN_CENNTER2 ,backgroundColor: "#bf8282" }}>
                                                <Grid  style={{paddingBottom :"0px",paddingTop :"0px", width: 400,backgroundColor:"#ffffff" , height :410 ,borderRadius:"8px"  ,border: '1px solid #eaeaea' }}>
                                                    
                                                    <div  style={{  paddingLeft:"45px" ,paddingRight:"45px" }} >
                                                        <div className="wrap-input100 validate-input" data-validate="Username is required">
                                                          <span  style={{fontFamily:"sans-serif" ,fontWeight:"bold ",fontSize :"13px",color:"#333333"}}>Email</span>
                                                          <input  type="text" name="username" placeholder="Masukkan email Anda" style={{ border: '2px solid #dbdbdb', paddingLeft:"20px",width :"100%" ,height :"40px",backgroundColor:"#f5f5f5" ,borderRadius: "4px" }} />
                                                          <span className="focus-input100"></span>
                                                         </div>
                                                    </div>
                                                    <div  style={{ paddingLeft:"45px" ,paddingRight:"45px" }} >
                                                        <div className="wrap-input100 validate-input" data-validate="Username is required">
                                                          <span  style={{fontFamily:"sans-serif" ,fontWeight:"bold ",fontSize :"13px",color:"#333333"}}>Password</span>
                                                          <input  type="password" name="username" placeholder="Masukkan password" style={{ border: '2px solid #dbdbdb', paddingLeft:"20px",width :"100%" ,height :"40px",backgroundColor:"#f5f5f5" ,borderRadius: "4px" }} />
                                                          <span className="focus-input100"></span>
                                                         </div>
                                                    </div>
                                                    <div  style={{  paddingLeft:"45px" ,paddingRight:"45px" }} >
                                                        <div className="wrap-input100 validate-input" data-validate="Username is required">
                                                          <span  style={{fontFamily:"sans-serif" ,fontWeight:"bold ",fontSize :"13px",color:"#333333"}}>Konfirmasi Password</span>
                                                          <input  type="password" name="username" placeholder="Masukkan password kembali" style={{ border: '2px solid #dbdbdb', paddingLeft:"20px",width :"100%" ,height :"40px",backgroundColor:"#f5f5f5" ,borderRadius: "4px" }} />
                                                          <span className="focus-input100"></span>
                                                         </div>
                                                    </div>
                                                    <div className="container-login100-form-btn" style={{  paddingLeft:"45px" ,paddingRight:"45px" ,paddingTop:"30px"}}  >
                                                       <div className="wrap-login100-form-btn" style={{ margin: 'auto' }}>
                                                           <div className="login100-form-bgbtn" style={{ backgroundColor: "#3B69CE"  }}>
                                    
                                                          </div>
                                                             <button className="login100-form-btn1"  >
                                                              Daftar
							                                </button>
                                                      </div>
                                                   </div>
                                                   <div style={{ paddingTop:"20px"}} >
                                                        <div style={{ backgroundColor:"#eaeaea" ,borderBottomLeftRadius:"8px" ,borderBottomRightRadius:"8px"}}>
                                                            <div style={{fontWeight:"bold", color:"#333333", fontSize: "13px"  ,paddingBottom:"16px",paddingTop:"16px" ,paddingLeft:"24px",paddingRight:"24px",textAlign:"center"}} >
                                                                 Atau daftar menggunakan
                                                            </div>
                                                            <Grid item md={9} container direction="row" justify="space-evenly" alignItems="center" style={{paddingBottom:"20px" ,marginLeft:"45px"}}>
                                                                    <div className="container-login100-form-btn1"  >
                                                                            <div className="wrap-login100-form-btn" style={{ margin: 'auto' }}>
                                                                            <div className="login100-form-bgbtn" style={{ backgroundColor: "#e84f4a" }}>
                                                                            
                                                                            </div>
                                                                            <button className="login100-form-btn4">
                                                                                    Gmail
                                                                            </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="container-login100-form-btn1 ">
                                                                            <div className="wrap-login100-form-btn" style={{ margin: 'auto' }}>
                                                                            <div className="login100-form-bgbtn" style={{ backgroundColor: "#007bb5"  }}>
                                                                                
                                                                            </div>
                                                                            <button className="login100-form-btn4">
                                                                                    Linkedin
                                                                            </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="container-login100-form-btn1" >
                                                                            <div className="wrap-login100-form-btn" style={{ margin: 'auto' }}>
                                                                            <div className="login100-form-bgbtn" style={{ backgroundColor: "#3a559f"  }}>
                                                                                
                                                                            </div>
                                                                            <button className="login100-form-btn4">
                                                                                    Facebook
                                                                            </button>
                                                                            </div>
                                                                        </div>
                                                                    </Grid>
                                                                                                    
                                                                                                    
                                                                                                    
                                                                        </div>
                                                        </div>

                                                    
                                                    
                                                </Grid>
                                     </Grid>
                                     <Grid item md={12} style={{  height: 90 }}>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                   
                </Grid>
                
            </React.Fragment>
        )
    }
}