import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//import ChartFour
import ChartFour from './charts/ChartFour'


const Chart = () => {

  const useStyles = makeStyles({
    depositContext: {
      flex: 1,
    },
  });

  const classes = useStyles();

  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>
        <h6>ข้อมูลอัตราการเสียชีวิตจากการพลัดตกหกล้มของกลุ่มอายุ 60 ปีขึ้นไป ปี พ.ศ. 2552 - 2561</h6></Title>
        <Typography color="textSecondary" className={classes.depositContext}>
        ข้อมูลจากกองยุทธศาสตร์สาธารณสุขและสิ่งแวดล้อม
      </Typography>
      <ResponsiveContainer>
        <ChartFour />
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default Chart;