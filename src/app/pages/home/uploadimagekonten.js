import React from 'react'
import { Grid, Button } from '@material-ui/core'; 
import {Thumbnil,Thumbnilkonten,Gambarinput,Gearbox,Mengecat,Bahanbakar,Radiatormobil,MazdaLogo, BmwLogo, VwLogo, SuzukiLogo, AudiLogo, ToyotaLogo , Background ,Backgrounddua ,Backgroundtiga, Otomotif ,Career, Sertified , Increase,Frame } from '../../../assets/img';

class Uploadkonten extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: Thumbnilkonten
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  upload() {
    document.getElementById("selectImage").click()
  }

  render() {
    return (
      <div>
          <Grid container direction="row" item lg={12} style={{height:"150px" }}>
          <Grid item lg={3} style={{height:"100%"}}>
                                                                          <div className="tabelawal">
                                                                          Upload File
                                                                          </div>
                                                                    </Grid>
                                                                    <Grid item lg={3} style={{height:"100%"}}>
                                                                                <Grid style={{ height:"90%",width:"90%",border:"dashed 1px #e0e0e0",borderRadius:"4px" ,backgroundColor:"#fbfbfb"}}>
                                                                                <img src={this.state.file} style={{height:"100%" ,width:"100%"}}/>

                                                                                      
                                                                                </Grid>
                                                                    </Grid>
                                                                    <Grid item lg={6} style={{height:"100%"}}>
                                                                    <button id='plus' onClick={this.upload} style={{ fontSize:"12px" ,color:"#4e7ad2",textAlign:"center",textTransform:"capitalize",fontWeight:"bold",borderRadius:"40px" ,backgroundColor:"#ffffff",width:"35%" ,height:"22%",border:"solid 1px #4774d1",boxShadow:"0 8px 20px 0 rgba(0, 0, 0, 0.1)"}} >Pilih File</button>
                                                                    <input id='selectImage' hidden type="file" onChange={this.handleChange} accept="application/pdf ,video/*" />
                                                                   
                                                                    </Grid>

          </Grid>
          
      </div>
    );
  }
}
export default Uploadkonten