import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Pic from '../static/images/Pic.png'



const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      backgroundColor: 'white'
    },
  },
  appBar: {

    borderBottom: `1px solid ${theme.palette.divider}`,
  
  },
  toolbar: {

    flexWrap: 'wrap',
   
  },
  toolbarTitle: {
    flexGrow: 1,
  
  },
  link: {
    margin: theme.spacing(1, 1.5),
    backgroundColor: 'white'
  }

}));


export default function Pricing() {

  const classes = useStyles();

  return (
    <React.Fragment >
      <Container maxWidth="sm" color="white" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h4" maxWidth="lg" align="center" color="textPrimary" gutterBottom>
        <img src={Pic} style={{ width: 500}} />
        </Typography>
      </Container>
    </React.Fragment>
  );
}