import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ResponsiveContainer, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, LineChart, Line, BarChart, Bar, PieChart,
    Pie, Cell,
} from 'recharts';

//Chart
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    appBarSpacer: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 2,
    },
});



class CardHome extends Component{

    render(){

    const { classes } = this.props;
    return (
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Simple Thailand COVID-19 Dashboard
            </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.appBarSpacer} />
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography align="right">
                                Last updated: 
                            </Typography>
                            <Typography variant="subtitle2" align="right">
                              Test 
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>
                                <Typography>Confirmed</Typography>
                                <Typography variant="h3">TEst</Typography>
                                <Typography variant="h5">sdfsdfsdf</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            {/* <Paper className={classes.paper}>
                                <Typography>Hospitalized</Typography>
                                <Typography variant="h3">v</Typography>
                                <Typography variant="h5">vv</Typography>
                            </Paper> */}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>
                                <Typography>Deaths</Typography>
                                <Typography variant="h3">s</Typography>
                                <Typography variant="h5">ss</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper className={classes.paper}>
                                <Typography>Recovered</Typography>
                                <Typography variant="h3">dd</Typography>
                                <Typography variant="h5">ddd</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={dataTimeline15}
                                        margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="Date" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="NewConfirmed" fill="#8884d8" />
                                        <Bar dataKey="NewDeaths" fill="#FF9AA2" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart width={400} height={400}>
                                        <Legend />
                                        <Pie dataKey="value" isAnimationActive={false} data={data_pie} outerRadius={100} label>
                                            <Cell fill="#8884d8" />
                                            <Cell fill="#FF9AA2" />
                                            <Cell fill="#8FC1A9" />
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <ResponsiveContainer width="100%" height={500}>
                                    <LineChart
                                        data={dataTimeline}
                                        margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="Date" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="Confirmed" stroke="blue" dot={false} />
                                        <Line type="monotone" dataKey="Hospitalized" stroke="orange" dot={false} />
                                        <Line type="monotone" dataKey="Deaths" stroke="red" dot={false} />
                                        <Line type="monotone" dataKey="Recovered" stroke="green" dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
                <footer className={classes.footer}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6">
                            React App with Material UI for simple Thailand Covid-19 Dashboard
            </Typography>
                        <Typography component="p">
                            Source code by KarnYong @ <a href="https://github.com/KarnYong/react-material-ui-dashboard-covid-19">https://github.com/KarnYong/react-material-ui-dashboard-covid-19</a>
                        </Typography>
                    </Paper>
                </footer>
            </div>
        </div>
    )
}
}

export default CardHome