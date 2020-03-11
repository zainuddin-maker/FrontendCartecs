import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { COLOR, BOLD, COLUMN_CENNTER1, BUTTON_OVAL, DARK } from '../../../../assets/css/main';
import { Header, Footer } from '../../../components';
import { Link } from "react-router-dom";
import { grey , red } from '@material-ui/core/colors';
import { Carousel } from "react-responsive-carousel"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { MazdaLogo, BmwLogo, VwLogo, SuzukiLogo, AudiLogo, ToyotaLogo , Background , Otomotif ,Career, Sertified , Increase ,Perusahaan,Montir,Member} from '../../../../assets/img';

const overview = [
    {
        path: "/users/registermontir",
        alt: "Bidang Otomotif",
        image: Montir ,
        title: 'Montir',
        short_desc: 'Saya montir dari perusahaan / brand otomotif'
    },
    {
        path: "/users/registermember",
        alt: "Bidang Career",
        image: Member ,
        title: 'Member Montir',
        short_desc: 'Saya tertarik dengan otomotif dan mencari kursus otomotif'
    },
    {
        path: "/users/registerperusahaan",
        alt: "Bidang Sertified",
        image: Perusahaan ,
        title: 'Perusahaan',
        short_desc: 'Saya pemilik dari merk/brand otomotif'
    },
];


export default class UserRegister extends React.Component {
    render() {
        return (
            
            <React.Fragment>
                 <Grid item lg={12}>
                        <Header />
                    </Grid>
                   
                <Grid container justify="center" alignContent="center">
                   
                
                    <Grid item lg={12} style={{ backgroundColor: grey[100] }}>
                        <Grid container justify="center" direction="row" alignItems="flex-start">
                            <Grid item lg={10}>
                                <Grid container justify="center" direction="row" alignItems="flex-start" >
                                    <Grid item md={10} style={{ textAlign: 'center', height: 120, marginTop: 100 }}>
                                        <h2>Anda ingin mendaftar sebagai?</h2>
                                    </Grid>
                                    {
                                        overview.map((value, i) => {
                                            return (<Grid key={i} item md={3} style={{ ...COLUMN_CENNTER1 }}>
                                                <div style={{paddingBottom :"10px",paddingTop :"40px", textAlign: 'center', width: 240,backgroundColor:"#ffffff" , height :280 ,borderRadius:"8px" ,paddingLeft:"20px",paddingRight:"20px" ,border: '1px solid #eaeaea' }}>
                                                    <div >
                                                    <img alt={value.alt} src={value.image} style={{ backgroundColor:"#ffffff", borderRadius: 0 , height: 80, width: 80, marginBottom: 10 ,  }} />
                                                    </div>
                                                    <div>
                                                        <span style={BOLD}>{value.title}</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: COLOR.darkGrey, fontSize: 12 ,lineHeight:"18px"}}>{
                                                            value.short_desc
                                                        }</span>
                                                    </div>
                                                    <div style={{paddingTop :"10px"}}>
                                                    <Link to={value.path}>
                                                      <Button style={{ ...BUTTON_OVAL, ...DARK, width: "90px", paddingLeft: 20, paddingRight: 20 }}>
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
                   
                </Grid>
                
            </React.Fragment>
        )
    }
}