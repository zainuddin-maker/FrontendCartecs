import React from "react";
import { Link } from "react-router-dom";
import "../../../../assets/css/login/util.css";
import "../../../../assets/css/login/main.css";
import "assets/css/font.css";
import { Grid, Button } from "@material-ui/core";
import { Login } from "../../../../assets/img";
import { Header} from "../../../components";

import { RequestPost, history, UserSession } from "app/utils";

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
        history.push("/Home/trainer");
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <Header />

        <div className="container-login100">
          <div className="login100-more">
            <img
              src={Login}
              alt="login"
              style={{ position: "relative", height: 648, weight: 500 }}
            />
          </div>

          <div className="wrap-login100 p-l-50 p-r-50 p-t-120">
            <form onSubmit={this.handleLogin}>
              <Grid
                item
                lg={12}
                style={{ backgroundColor: "" }}>
                <Grid item md={12} style={{ height: "50px" }}>
                  <span className="login100-form-title">
                    Selamat datang kembali di CARtecs E-learning
                  </span>
                </Grid>
                <div style={{ paddingTop: "30px" }}>
                  <span className="label-input100">Email</span>
                </div>
                <div>
                  <input
                    className="input100"
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
                  <span className="label-input100">Password</span>
                </div>

                <div tyle={{ paddingTop: "5px" }}>
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Masukkan password"
                    value={this.state.password}
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                  />
                </div>

                <div
                  className="container-login100-form-btn"
                  style={{ paddingTop: "40px" }}>
                  <div
                    className="wrap-login100-form-btn"
                    style={{ margin: "auto" }}>
                    {/* <Link to="/Home/student"> */}
                    <button type="submit" className="login100-form-btn">
                      Masuk
                    </button>
                    {/* </Link> */}
                  </div>
                </div>
                <div className="Lupapassword">
                  <Link to="/Home/trainer" style={{ fontSize: "12px" }}>
                    <span>
                      <u>Lupa Password?</u>
                    </span>
                  </Link>
                </div>
                <div className="Masukmenggunakan">
                  <h4> Atau masuk menggunakan </h4>
                </div>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center">
                  <div className="container-login100-form-btn1">
                    <div
                      className="wrap-login100-form-btn"
                      style={{ margin: "auto" }}>
                      <div
                        className="login100-form-bgbtn"
                        style={{ backgroundColor: "#e84f4a" }}></div>
                      <button className="login100-form-btn3">Gmail</button>
                    </div>
                  </div>
                  <div className="container-login100-form-btn1 ">
                    <div
                      className="wrap-login100-form-btn"
                      style={{ margin: "auto" }}>
                      <div
                        className="login100-form-bgbtn"
                        style={{ backgroundColor: "#007bb5" }}></div>
                      <button className="login100-form-btn3">Linkedin</button>
                    </div>
                  </div>
                  <div className="container-login100-form-btn1">
                    <div
                      className="wrap-login100-form-btn"
                      style={{ margin: "auto" }}>
                      <div
                        className="login100-form-bgbtn"
                        style={{ backgroundColor: "#3a559f" }}></div>
                      <button className="login100-form-btn3">Facebook</button>
                    </div>
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
