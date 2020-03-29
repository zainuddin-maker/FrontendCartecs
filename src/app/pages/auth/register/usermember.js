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
import { RequestPost, history, UserSession } from "app/utils";



export default class UserRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           email: "", 
           fullName: "" ,
           password:"" ,
           confirmpassword:"",
           formErrors: {email: '', password: '',fullName:'',confirmpassword:''},
           emailValid: false,
           passwordValid: false,
           fullNameValid:false ,
           confirmpasswordValid:false,
           formValid: false ,
           daftar :false ,
           regis : false  
          };
        this.handleRegister = this.handleRegister.bind(this);
        
      }

      handleRegister(e) {
        e.preventDefault();
        const data = {
          email: this.state.email,
          compID : 1,
          fullName : this.state.fullName,
          roles :["montir"],
          password: this.state.password
        };
        RequestPost("users", data)
          .then(res => {
            UserSession.setData(res.data);
            console.log(res.data)
            this.setState({regis: true });
            this.setState({daftar: false });
            setTimeout(() => {
              history.push("login")
          }, 2000)
            /*history.push("login"); */
            
            
            
            
          })
          .catch(e => {
            console.log(e);
            this.setState({daftar: true });
            this.setState({regis: false });
            
          });
          
          
      }
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
          () => { this.validateField(name, value) });
      }

      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let fullNameValid = this.state.fullNameValid;
        let confirmpasswordValid = this.state.confirmpasswordValid;
        let password = this.state.password;
        
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 8;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          case 'fullName':
            fullNameValid = value.length >= 5;
              fieldValidationErrors.fullName = fullNameValid ? '': ' is too short';
              break;
          case 'confirmpassword':
            confirmpasswordValid = value == password;
              fieldValidationErrors.confirmpassword = confirmpasswordValid ? '': ' is too short';
              break;    
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        fullNameValid :fullNameValid,
                        confirmpasswordValid :confirmpasswordValid
                      }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.fullNameValid && this.state.confirmpasswordValid });
      }
      
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }



    render() {
        const isdaftar = this.state.daftar; 
      const isregis = this.state.regis; 
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
                                        <h2>Daftar sebagai contributor</h2>
                                    </Grid>
                                    <Grid  item md={3} style={{ ... COLUMN_CENNTER2  }}>
                                    <form onSubmit={this.handleRegister}>
                                                <Grid  style={{paddingTop :"0px", width: 400,backgroundColor:"#ffffff" , height :"550px" ,borderRadius:"8px"  ,border: '1px solid #eaeaea' }}>
                                                    
                                                        <Grid container direction="row" style={{ backgroundColor:"#f79256", borderTopLeftRadius:"8px" ,borderTopRightRadius:"8px",paddingTop:"16px" ,paddingBottom:"16px",paddingLeft:"16px",paddingRight:"16px" }}>
                                                          <Grid container justify="center" alignItems="flex-start" style={{ width:"12%" }}>
                                                          <img
                                                            src={Info} 
                                                            alt="Info"
                                                          />
                                                          </Grid>
                                                          <Grid style={{ width:"88%",color:"#ffffff" ,fontSize:"12px" ,fontWeight:"600"}}>
                                                          
                                                            
                                                            <Greeting  isdaftar={isdaftar} isregis={isregis} />
                                                            
                                                          </Grid>

                                                        </Grid>
                                                   

                                                    <div  style={{  paddingLeft:"45px" ,paddingRight:"45px" }} >
                                                        <div className={`wrap-input100 ${this.errorClass(this.state.formErrors.fullName)}`} data-validate="Username is required">
                                                          <span  style={{fontFamily:"sans-serif" ,fontWeight:"bold ",fontSize :"13px",color:"#333333"}}>Nama Lengkap</span>
                                                          <input  
                                                          type="text" 
                                                          name="fullName" 
                                                          placeholder="Masukkan nama lengkap" 
                                                          className="style-kotak"
                                                          value={this.state.fullName}
                                                          onChange={this.handleUserInput} 
                                                            />
                                                          <span className="focus-input100"></span>
                                                         </div>
                                                    </div>
                                                    <div  style={{  paddingLeft:"45px" ,paddingRight:"45px" }} >
                                                        <div className= {`wrap-input100 ${this.errorClass(this.state.formErrors.email)}`} data-validate="Username is required">
                                                          <span  style={{fontFamily:"sans-serif" ,fontWeight:"bold ",fontSize :"13px",color:"#333333"}}>Email</span>
                                                          <input  
                                                          type="text" 
                                                          name="email" 
                                                          placeholder="Masukkan email" 
                                                          className="style-kotak"
                                                          value={this.state.email}
                                                          onChange={this.handleUserInput} 
                                                            />
                                                          
                                                         </div>
                                                    </div>

                                                    


                                                    <div  style={{ paddingLeft:"45px" ,paddingRight:"45px" }} >
                                                        <div className={`wrap-input100 ${this.errorClass(this.state.formErrors.password)}`} >
                                                          <span  style={{fontFamily:"sans-serif" ,fontWeight:"bold ",fontSize :"13px",color:"#333333"}}>Password</span>
                                                          <input  
                                                          type="password" 
                                                          name="password" 
                                                          placeholder="Masukkan password" 
                                                          className="style-kotak"

                                                          value={this.state.password}
                                                          onChange={this.handleUserInput} 
                                                          />
                                                          <span className="focus-input100"></span>
                                                         </div>
                                                    </div>

                                                    <div  style={{  paddingLeft:"45px" ,paddingRight:"45px" }} >
                                                        <div className={`wrap-input100 ${this.errorClass(this.state.formErrors.confirmpassword)}`} data-validate="Username is required">
                                                          <span  style={{fontFamily:"sans-serif" ,fontWeight:"bold ",fontSize :"13px",color:"#333333"}}>Konfirmasi Password</span>
                                                          <input  
                                                          type="password" 
                                                          name="confirmpassword" 
                                                          placeholder="Masukkan password kembali" 
                                                          className="style-kotak"

                                                          value={this.state.confirmpassword}
                                                          onChange={this.handleUserInput} 
                                                           />
                                                          <span className="focus-input100"></span>
                                                         </div>
                                                    </div>

                                                    <div className="container-login100-form-btn" style={{  paddingLeft:"45px" ,paddingRight:"45px",paddingTop:"20px",paddingBottom:"20px" }}  >
                                                       <div className="wrap-login100-form-btn" style={{ margin: 'auto' }}>
                                                           <div className="login100-form-bgbtn" style={{ backgroundColor: "#3B69CE"  }}>
                                    
                                                          </div>
                                                             <button type="submit" className="login100-form-btn1 " disabled={!this.state.formValid} >
                                                              Daftar
							                                              </button>
                                                      </div>
                                                   </div>
                                                   <div style={{ backgroundColor:"#eaeaea" , width:400 , borderBottomLeftRadius:"8px" ,borderBottomRightRadius:"8px" }}>
                                                            <div style={{fontWeight:"600", color:"rgba(51, 51, 51, 0.4)", fontSize: "12px"  ,paddingBottom:"16px",paddingTop:"16px" ,paddingLeft:"24px",paddingRight:"24px",textAlign:"center"}} >
                                                                 Atau daftar menggunakan
                                                            </div>
                                                            <Grid  item md={12} container justify="center" alignItems="center"  style={{paddingBottom:"20px"}}>
                                                                <Grid container direction="row" alignItems="flext-start" justify="space-between"  item md ={9} >
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
                                                                    </Grid>
                                                                                                    
                                                                                                    
                                                                                                    
                                                                        </div>
                                                       

                                                    
                                                    
                                                </Grid>
                                                </form>
                                     </Grid>
                                     <Grid item md={10} style={{  height: "150px" }}>
                                        
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
function Daftar(props) {
    return <div>Maaf, Akun Telah Terdaftar </div>;
  }
  
  function Regist(props) {
    return <div>Selamat, akun telah didaftarkan</div>;
  }
  
  function Greeting(props) {
    const isdaftar = props.isdaftar;
    const isregis = props.isregis;
    
    if (isregis) {
      return <Regist />;
    }
    else
    {
      if (isdaftar) {
        return <Daftar />;
      }
      else
      {
        return <div>Untuk mendaftar sebagai montir, gunakan email perusahaan dimana tempat Anda bekerja</div>;
      }
    }
  }