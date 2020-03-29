import React from "react";
import { Grid} from "@material-ui/core";
import { Login } from "../../../../assets/img";
import { Header} from "../../../components";

import { RequestPost, history, UserSession } from "app/utils";
import './login.css';

export default class UserRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(e) {
    e.preventDefault();
    const data = {
      email: this.state.username,
      password: this.state.password
    };
    RequestPost("users/login", data)
      .then(res => {
        UserSession.setData(res.data);
        console.log(res.data.userInfo.roles[0])
        
        if (res.data.userInfo.roles[0] == "montir")
        { 
          history.push("/Home/Student");
        }
        else{
          history.push("/Home/trainer");
        }

        
      })
      .catch(e => {
        console.log(e);
      });

      
  }




  

  render() {

    return (
      <div>
        <Header />

        <div className="containerlogin">
       
          <Grid className="loginimage" style={{backgroundColor:"#000000"}}>
            <img
              src={Login}
              alt="login"
              style={{ position: "relative", height: 648, width: "100%" }}
            />
         
          </Grid>
          
          <div className="wraplogin" style={{paddingLeft:"50px",paddingRight:"50px",paddingTop:"120px"}} >
            <form onSubmit={this.handleLogin}>
              <Grid
                item
                lg={12}
                style={{ backgroundColor: "" }}>
                <Grid item md={12} style={{ height: "50px" }}>
                  <span className="loginselamatdatang">
                    Selamat datang kembali di CARtecs E-learning
                  </span>
                </Grid>
                <div style={{ paddingTop: "30px" }}>
                  <span className="labelinput">Email</span>
                </div>
                <div>
                  <input
                    className="inputlogintext"
                    type="text"
                    name="username"
                    placeholder="Masukkan email Anda"
                    value={this.state.username}
                    onChange={e => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                </div>

                <div style={{ paddingTop: "30px" }}>
                  <span className="labelinput" >Password</span>
                </div>

                <div tyle={{ paddingTop: "5px" }}>
                  <input
                    className="inputlogintext"
                    type="password"
                    name="pass"
                    placeholder="Masukkan password"
                    
                    value={this.state.password}
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </div>

                <div className="containerloginformmasuk" >
                   {/* <Link to="/Home/student"> */}
                    <button type="submit" className="loginformbtnmasuk">
                      Masuk
                    </button>
                    {/* </Link> */}
                  
                 </div>
                <div className="Lupapassword">
                   <span>
                      <u>Lupa Password?</u>
                    </span>
                 </div>
                
                  <h4 className="Masukmenggunakan"> Atau masuk menggunakan </h4>
                
                <Grid container direction="row" justify="space-between" alignItems="center">
                  <div className="containerlogin100formbtnmedia">
                    <button className="loginformbtnmedia">Gmail</button>
                  </div>


                  <div className="containerlogin100formbtnmedia">
                     <button className="loginformbtnmedia" style={{backgroundColor:"#007bb5"}}>Linkedin</button>
                  </div>

                  <div className="containerlogin100formbtnmedia">
                   <button className="loginformbtnmedia" style={{backgroundColor:"#3a559f"}}>Facebook</button>
                 </div>


                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
