import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Header} from '../../../components';
import { Link } from "react-router-dom";
import { Montir,Member} from '../../../../assets/img';

const overview = [
    {
        path: "/users/registermontir",
        alt: "Bidang Otomotif",
        image: Montir ,
        title: 'Reader',
        short_desc: 'Saya tertarik dengan otomotif dan mencari kursus otomotif'
    },
    {
        path: "/users/registermember",
        alt: "Bidang Career",
        image: Member ,
        title: 'Contributor',
        short_desc: 'Saya tertarik menjadi contributor untuk kursus otomotif'
    },
    
];


export default class UserRegister extends React.Component {
    render() {
        return (
            
            <React.Fragment>
                 
                   
                
                   
                
                    <Grid container justify="center" alignContent="center"  item lg={12} style={{ backgroundColor: "#ffffff" }}>
                        <Grid container justify="center" direction="row" alignItems="flex-start">
                            <Grid item lg={10}>
                                <Grid container justify="center" direction="row" alignItems="flex-start" >
                                    <Grid item md={10} style={{ textAlign: 'center', height: 120, marginTop: 100 }}>
                                        <h2>Anda ingin mendaftar sebagai?</h2>
                                    </Grid>
                                    {
                                        overview.map((value, i) => {
                                            return (<Grid key={i} item md={3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                <div style={{paddingBottom :"10px",paddingTop :"40px", textAlign: 'center', width: 240,backgroundColor:"#ffffff" , height :280 ,borderRadius:"8px" ,paddingLeft:"20px",paddingRight:"20px" ,border: '1px solid #eaeaea' }}>
                                                    <div >
                                                    <img alt={value.alt} src={value.image} style={{ backgroundColor:"#ffffff", borderRadius: 0 , height: 80, width: 80, marginBottom: 10   }} />
                                                    </div>
                                                    <div>
                                                        <span style={{fontWeight:"bold"}}>{value.title}</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: "rgba(51, 51, 51, 0.6)", fontSize: 12 ,lineHeight:"18px"}}>{
                                                            value.short_desc
                                                        }</span>
                                                    </div>
                                                    <div style={{paddingTop :"10px"}}>
                                                    <Link to={value.path}>
                                                      <Button style={{ textAlign:'center', fontSize:"7px",fontWeight:'bold' ,borderRadius: "20px",   height: "25px", border: "0.5px solid", textTransform: 'capitalize',color: "white",backgroundImage:"linear-gradient(to top, #7aa2dc, #3b69ce)", width: "90px", paddingLeft: 20, paddingRight: 20 }}>
                                                       Pilih
                                                       </Button>
                                                       </Link>
                                                    </div>
                                                    
                                                </div>
                                            </Grid>)
                                        })
                                    }
                                    <Grid item md={10} style={{ textAlign: 'center', height: 120, marginTop: 50 , width: 300 }}>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                   
              
                
            </React.Fragment>
        )
    }
}