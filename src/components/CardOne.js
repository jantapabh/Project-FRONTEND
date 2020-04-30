import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

//Import Chart

import ChartFive from './charts/ChartFive'

//ส่วนแสดงจำนวนผู้สูงอายุในประเทศไทยปัจจุบันแบ่งแยกเป็นชายและหญิงและหากกดในส่วนของ View balance จะแสดงผู้สูงอายุในแต่ละจังหวัดโดยรวม

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const CardOne = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>จำนวนผู้สูงอายุในประเทศไทย</Title>
      <Typography component="p" variant="h8">
        โดยรวม 60 % จากประชากรทั้งหมดภายในประเทศ
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          <ChartFive />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default CardOne;