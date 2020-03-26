import React from 'react';
import { Link } from "react-router-dom";

import Get from "../coba/getrequest";

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid,  InputBase,  Button } from '@material-ui/core';
import { Search as SearchIcon, Apps as SortIcon, More as MoreIcon } from '@material-ui/icons';
import { grey, blue } from '@material-ui/core/colors';
import cartech from "../../../assets/img/cartech-logo.svg";


import { BUTTON_Header_masuk,BUTTON_Header_daftar } from '../../../assets/css/main';
import Sparator from '../general/Sparator';

import './header.css';


const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        fontSize: 12,
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: grey[100],
        '&:hover': {
            backgroundColor: grey[200],
        },
        border: "0.5px solid",
        borderColor: grey[200],
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 4, 1, 4),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 300,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimaryAppBar() {
    const classes = useStyles();
    

    return (
        <div >
            <AppBar position="absolute" color="default" style={{ backgroundColor: "white", top: 0, bottom: 'auto', position: 'fixed' }} >
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Link to="/" >
                                    <img alt="Cartech Logo" src={cartech}  style={{ height:"40px" , width:"40px" }} />
                                </Link>
                        <Grid item lg={1}></Grid>
                        
                        <Grid item lg={2} className={classes.title}>
                            
                            <Grid container justify="center">
                               
                                <Sparator type="vertical-spacing" width={10} />
                             
                                <Get/>
                                 
                            </Grid>
                        </Grid>
                        
                        <Grid item lg={4}>
                            <Grid className={useStyles().search} container alignItems="center">
                                <InputBase
                                    placeholder="Apa yang ingin kamu pelajari…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <SearchIcon style={{color :blue[200] , position: 'absolute', right: 10 }} />
                            </Grid>
                        </Grid>
                        <Grid item lg={4}>
                            <Grid container justify="flex-end" alignItems="center">
                                <div className={classes.grow} />
                                <div className={classes.sectionDesktop}>
                                    <Link to="/users/register">
                                        <Button className=" tomboldaftarheader" style={BUTTON_Header_daftar }>
                                            Daftar
                                    </Button>
                                    </Link>
                                    <Sparator type="vertical" width={10} />
                                    <Link to="/users/login">
                                        <Button className="tombolmasukheader" style={{ ...BUTTON_Header_masuk }}>
                                            Masuk
                                    </Button>
                                    </Link>
                                </div>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            
        </div >
    );
}
