import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { COLOR, BOLD, COLUMN_CENNTER, BUTTON_OVAL, DARK ,BUTTON_HOME } from '../../../assets/css/main';
import { Link } from "react-router-dom";
import { grey } from '@material-ui/core/colors';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { MazdaLogo, BmwLogo, VwLogo, SuzukiLogo, AudiLogo, ToyotaLogo , Background ,Backgrounddua ,Backgroundtiga, Otomotif ,Career, Sertified , Increase } from '../../../assets/img';
import '../../../assets/css/font.css';
import '../../../assets/css/login/main.css';
const overview = [
    {
        alt: "Bidang Otomotif",
        image: Otomotif ,
        title: 'Pelajari Keterampilan Otomotif Terbaru',
        short_desc: 'Basic konsep otomotif, Penggunaan alat ukur, Fungsi umum komponen dalam kendaraan, dll.'
    },
    {
        alt: "Bidang Career",
        image: Career ,
        title: 'Bersiaplah untuk Kariermu di masa depan',
        short_desc: 'Tersedia materi-materi untuk kamu yang masih baru dan pemula maupun ingin berkarir di bidang automotif.'
    },
    {
        alt: "Bidang Sertified",
        image: Sertified ,
        title: 'Sertifikasi untuk Teknisi Ahli',
        short_desc: 'Dapatkan sertifikat dari lembaga terpercaya untuk kamu yang sudah mahir di bidang automotif.'
    },
    {
        alt: "Bidang Increase",
        image: Increase ,
        title: 'Tingkatkan skill tim Kamu',
        short_desc: 'Tersedia training dan program pengembangan yang disesuaikan dengan tim Kamu.'
    }
];

const companies = [
    {
        alt: "BMW Companies",
        image: BmwLogo
    },
    {
        alt: "VW Groups",
        image: VwLogo
    },
    {
        alt: "Toyota Indonesia",
        image: ToyotaLogo
    },
    {
        alt: "Suzuki Mobil Indonesia",
        image: SuzukiLogo
    },
    {
        alt: "Audi Motors",
        image: AudiLogo
    },
    {
        alt: "Mazda Logo",
        image: MazdaLogo
    }
]
export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid container justify="center" alignContent="center">
                    <Grid item lg={12}>
                    
                    <Carousel>
                      <Carousel.Item>
    <img
     
      src={Background} 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     
      src={Backgrounddua} 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      
      src={Backgroundtiga} 
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                   
                    </Grid>
                    <Grid item lg={12} style={{ backgroundColor: grey[100] }}>
                        <Grid container justify="center" direction="row" alignItems="flex-start">
                            <Grid item lg={10}>
                                <Grid container justify="center" direction="row" alignItems="flex-start" >
                                    <Grid item md={10} style={{ textAlign: 'center', height: 120, marginTop: 50 }}>
                                        <h1 style={{ color:"#333333" ,fontFamily:"Muli"}}>Capai tujuanmu bersama CARtecs</h1>
                                    </Grid>
                                    {
                                        overview.map((value, i) => {
                                            return (<Grid key={i} item md={3} style={{ ...COLUMN_CENNTER }}>
                                                <div style={{ ...COLUMN_CENNTER, textAlign: 'center', width: 200   }}>
                                                    <div >
                                                    <img alt={value.alt} src={value.image} style={{ backgroundColor:grey[100], borderRadius: 50 , height: 80, width: 80, marginBottom: 10 }} />
                                                    </div>
                                                    <div>
                                                        <span style={BOLD}>{value.title}</span>
                                                    </div>
                                                    <div>
                                                        <span style={{ color: COLOR.darkGrey, fontSize: 12 ,fontFamily:"Muli",fontWeight:500 }}>{
                                                            value.short_desc
                                                        }</span>
                                                    </div>
                                                </div>
                                            </Grid>)
                                        })
                                    }
                                    <Grid item md={10} style={{ textAlign: 'center', height: 120, marginTop: 50 , width: 300 }}>
                                        <Link to="/users/login">
                                            <Button className="kotakmenu" style={{ ...BUTTON_HOME,  paddingLeft: 20, paddingRight: 20 }}>
                                                Mulai Sekarang
                                        </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} style={{ backgroundColor: 'white' }}>
                        <Grid container direction="row" justify="center" alignItems="flex-start">
                            <Grid item md={3} style={{ textAlign: 'center', marginTop: 50 ,paddingBottom:"80px"}}>
                                <p style={{ color:"#333333" ,fontSize:"24px" , fontWeight:"bold" ,fontFamily:"Muli"}} >Telah dipercaya oleh Perusahaan Otomotif Ternama </p>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" >
                            {
                                companies.map((company, i) => {
                                    return (
                                        <Grid key={i} sm={1} >
                                            <img alt={company.alt} src={company.image} style={{ height: 80, width: 80, marginBottom: 10 }}/>
                                        </Grid>
                                    )
                                })
                            }
                            <Grid item md={12} style={{ height: 50 }}></Grid>
                            <Grid item md={4}>
                                <div style={{ color :grey[700], textAlign: 'center', fontWeight: 700, fontSize: 14  ,fontFamily:"Muli"}}>
                                    Perusahaan otomotif ternama memberikan training kepada jutaan siswa tentang otomotif. Kami menyediakan platform untuk mengajarkan produk otomotif dari Brand Anda
                                </div>
                            </Grid>
                            <Grid item md={10} style={{ textAlign: 'center', height: 120, marginTop: 50 }}>
                                <Link to="/companies/register">
                                    <Button className="kotakmenu" style={{ ...BUTTON_HOME, paddingLeft: 20, paddingRight: 20 }}>
                                        Bergabung Sekarang
                                        </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}