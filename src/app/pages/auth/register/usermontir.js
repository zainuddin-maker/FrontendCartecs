import React from 'react';
import { Grid } from '@material-ui/core';
import { Header} from '../../../components';
import InfoIcon from '@material-ui/icons/Info';
import { RequestPost, history, UserSession } from "app/utils";
import './usermontir.css';

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
                   
                <Grid item lg={12} style={{ backgroundColor: "#fbfbfb" }} container justify="center" alignContent="center" >
                    <Grid item lg={10} container justify="center" direction="row" alignItems="flex-start"  >
                                    <Grid container alignItems="center" justify="center" item md={12} style={{ textAlign: 'center', height: 120, marginTop: 70  }}>
                                        <div className="daftarreader">Daftar sebagai reader</div>
                                    </Grid>
                                    <Grid container alignItems="center"  item lg={12} style={{ display: 'flex', flexDirection: 'column' }}>
                                      <form onSubmit={this.handleRegister}>
                                                <Grid container direction="column" alignItems="center" style={{paddingTop :"0px", width: 400,backgroundColor:"#ffffff"  ,borderRadius:"8px"  ,border: '1px solid #eaeaea' ,marginBottom:"20px"}}>
                                                    
                                                     <Grid container direction="row" style={{ backgroundColor:"#f79256", borderTopLeftRadius:"8px" ,borderTopRightRadius:"8px",paddingTop:"16px" ,paddingBottom:"16px",paddingLeft:"16px",paddingRight:"16px" }}>
                                                          <Grid container justify="center" alignItems="flex-start" style={{ width:"12%" }}>
                                                                  <InfoIcon style={{color:"#ffffff"}}/>
                                                          </Grid>
                                                          <Grid style={{ width:"88%",color:"#ffffff" ,fontSize:"12px" ,fontWeight:"600"}}>
                                                                <Greeting  isdaftar={isdaftar} isregis={isregis} />
                                                          </Grid>

                                                        </Grid>
                                                   
                                                     <Grid  style={{width:350}}>
                                                    
                                                        <div className={`wrapinput ${this.errorClass(this.state.formErrors.fullName)}`} >
                                                          <span  className="textlengkap">Nama Lengkap</span>
                                                          <input  
                                                          type="text" 
                                                          name="fullName" 
                                                          placeholder="Masukkan nama lengkap" 
                                                          className="style-kotak"
                                                          value={this.state.fullName}
                                                          onChange={this.handleUserInput} 
                                                            />
                                                          
                                                         </div>
                                                   
                                                  
                                                        <div className= {`wrapinput ${this.errorClass(this.state.formErrors.email)}`} data-validate="Username is required">
                                                          <span  className="textlengkap">Email</span>
                                                          <input  
                                                          type="text" 
                                                          name="email" 
                                                          placeholder="Masukkan email" 
                                                          className="style-kotak"
                                                          value={this.state.email}
                                                          onChange={this.handleUserInput} 
                                                            />
                                                          
                                                         </div>
                       
                                                        <div className={`wrapinput ${this.errorClass(this.state.formErrors.password)}`} >
                                                          <span  className="textlengkap">Password</span>
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
                                                     <div className={`wrapinput ${this.errorClass(this.state.formErrors.confirmpassword)}`} data-validate="Username is required">
                                                          <span  className="textlengkap">Konfirmasi Password</span>
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
                                                   

                                                    <div className="containerbuttondaftar">
                                                           <button type="submit" className="buttondaftar"  disabled={!this.state.formValid} >
                                                              Daftar
							                                              </button>
                                                   </div>
                                                   </Grid>
                                                   <Grid container justify="center" style={{ backgroundColor:"#eaeaea" , width:400 , borderBottomLeftRadius:"8px" ,borderBottomRightRadius:"8px" }}>
                                                            <div  className="ataudaftar" >
                                                                 Atau daftar menggunakan
                                                            </div>
                                                            <Grid   container direction="row" alignItems="flext-start" justify="space-between"  style={{paddingBottom:"20px" ,width:350 }}>
                                                                
                                                                        <div className="containerbuttonmedia"  >
                                                                           <button className="buttonmedia" >
                                                                                    Gmail
                                                                            </button>
                                                                       </div>
                                                                        <div className="containerbuttonmedia">
                                                                            <button className="buttonmedia" style={{backgroundColor:"#007bb5"}}>
                                                                                    Linkedin
                                                                            </button>
                                                                       </div>
                                                                        <div className="containerbuttonmedia" >
                                                                             <button className="buttonmedia" style={{backgroundColor:"#3a559f"}}>
                                                                                    Facebook
                                                                            </button>
                                                                        </div>
                                                                     </Grid>
                                                                   </Grid>
                                                  </Grid>
                                                </form>
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
