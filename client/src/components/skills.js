import { Grid, Paper, Typography } from '@mui/material';
import React, { forwardRef, memo } from 'react';

//Icons
import { GitHub, Javascript } from '@mui/icons-material'; //, Css
import GitLabIcon from '../assets/customIcons/gitlabIcon.js';
import ReactIcon from '../assets/customIcons/reactIcon';
import MuiIcon from '../assets/customIcons/muiIcon.js';
import TailwindIcon from '../assets/customIcons/tailwindIcon.js';
import NodeIcon from '../assets/customIcons/nodeIcon.js';
import PythonIcon from '../assets/customIcons/pythonIcon.js';
import GraphqlIcon from '../assets/customIcons/graphQLIcon.js';
import MySQLIcon from '../assets/customIcons/mysqlIcon.js';
import MSSQLIcon from '../assets/customIcons/msSQLIcon.js';
import MongoDBIcon from '../assets/customIcons/mongoDBIcon.js';
import RailwayIcon from '../assets/customIcons/railwayIcon.js';
import HerokuIcon from '../assets/customIcons/herokuIcon.js';
import GitIcon from '../assets/customIcons/gitIcon.js';
import BashIcon from '../assets/customIcons/bashIcon.js';
import NpmIcon from '../assets/customIcons/npmIcon.js';

const gridStyles = {
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
};

const paperStyle = {
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: '33%',
    minHeight: '20vh'
};

const headStyle = {
    borderBottom: 1,
    borderColor: 'divider',
    paddingTop: 2,
    paddingBottom: 2,
    maxHeight: '33%',
    fontWeight: '700'
};

const bodyStyle = {
    width: '100%',
    minHeight: '66%'
}

const iconStyle = {
    width: '100%',
}

const Resume = forwardRef((props, ref) => {
    const { style } = props;

    return (
        <Grid container spacing={4} alignContent={'center'}
            ref={ref} style={style}
            sx={gridStyles}>
            <Grid item xs={4} >
                <Paper elevation={4} sx={paperStyle}>
                    <Grid container>
                        <Grid item xs={12} sx={headStyle}>
                            <Typography align='center'>
                                Front End
                            </Typography >
                        </Grid>
                        <Grid container item alignContent={'center'} justifyContent={'space-evenly'} sx={bodyStyle}>
                            <Grid item>
                                <ReactIcon fontSize='large' sx={iconStyle} />
                                <Typography>React</Typography>
                            </Grid>
                            <Grid item>
                                <Javascript fontSize='large' sx={iconStyle} />
                                <Typography>JavaScript</Typography>
                            </Grid>
                            {/* <Grid item>
                                <Css fontSize='large' sx={iconStyle} />
                                <Typography>CSS3</Typography>
                            </Grid> */}
                            <Grid item>
                                <MuiIcon fontSize='large' sx={iconStyle} />
                                <Typography>MUI</Typography>
                            </Grid>
                            <Grid item>
                                <TailwindIcon fontSize='large' sx={iconStyle} />
                                <Typography>Tailwind</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={4} >
                <Paper elevation={4} sx={paperStyle}>
                    <Grid container>
                        <Grid item xs={12} sx={headStyle}>
                            <Typography align='center'>
                                Back End
                            </Typography >
                        </Grid>
                        <Grid container item alignContent={'center'} justifyContent={'space-evenly'} sx={bodyStyle}>
                            <Grid item>
                                <NodeIcon fontSize='large' sx={iconStyle} />
                                <Typography>NodeJS</Typography>
                            </Grid>
                            <Grid item>
                                <PythonIcon fontSize='large' sx={iconStyle} />
                                <Typography>Python</Typography>
                            </Grid>
                            <Grid item>
                                <GraphqlIcon fontSize='large' sx={iconStyle} />
                                <Typography>GraphQL</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={4} >
                <Paper elevation={4} sx={paperStyle}>
                    <Grid container>
                        <Grid item xs={12} sx={headStyle}>
                            <Typography align='center'>
                                Database
                            </Typography >
                        </Grid>
                        <Grid container item alignContent={'center'} justifyContent={'space-evenly'} sx={bodyStyle}>
                            <Grid item>
                                <MySQLIcon fontSize='large' sx={iconStyle} />
                                <Typography>MySQL</Typography>
                            </Grid>
                            <Grid item>
                                <MSSQLIcon fontSize='large' sx={iconStyle} />
                                <Typography>MSSQL Server</Typography>
                            </Grid>
                            <Grid item>
                                <MongoDBIcon fontSize='large' sx={iconStyle} />
                                <Typography>MongoDB</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper elevation={4} sx={paperStyle}>
                    <Grid container>
                        <Grid item xs={12} sx={headStyle}>
                            <Typography align='center'>
                                Version Control
                            </Typography >
                        </Grid>
                        <Grid container item alignContent={'center'} justifyContent={'space-evenly'} sx={bodyStyle}>
                            <Grid item>
                                <GitHub fontSize='large' sx={iconStyle} />
                                <Typography>GitHub</Typography>
                            </Grid>
                            <Grid item>
                                <GitLabIcon fontSize='large' sx={iconStyle} />
                                <Typography>GitLab</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={4} >
                <Paper elevation={4} sx={paperStyle}>
                    <Grid container>
                        <Grid item xs={12} sx={headStyle}>
                            <Typography align='center'>
                                Command Line
                            </Typography >
                        </Grid>
                        <Grid container item alignContent={'center'} justifyContent={'space-evenly'} sx={bodyStyle}>
                            <Grid item>
                                <GitIcon fontSize='large' sx={iconStyle} />
                                <Typography>Git</Typography>
                            </Grid>
                            <Grid item>
                                <BashIcon fontSize='large' sx={iconStyle} />
                                <Typography>Bash</Typography>
                            </Grid>
                            <Grid item>
                                <NpmIcon fontSize='large' sx={iconStyle} />
                                <Typography>npm</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={4} >
                <Paper elevation={4} sx={paperStyle}>
                    <Grid container>
                        <Grid item xs={12} sx={headStyle}>
                            <Typography align='center'>
                                Deployment
                            </Typography >
                        </Grid>
                        <Grid container item alignContent={'center'} justifyContent={'space-evenly'} sx={bodyStyle}>
                            <Grid item>
                                <RailwayIcon fontSize='large' sx={iconStyle} />
                                <Typography>Railway</Typography>
                            </Grid>
                            <Grid item>
                                <HerokuIcon fontSize='large' sx={iconStyle} />
                                <Typography>Heroku</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
})

export default memo(Resume);