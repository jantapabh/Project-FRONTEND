import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

//Import Chart

import ChartThree from './charts/ChartThree'

//ส่วนแสดงจำนวนผู้สูงอายุในประเทศไทยปัจจุบันแบ่งแยกเป็นชายและหญิงและหากกดในส่วนของ View balance จะแสดงผู้สูงอายุในแต่ละจังหวัดโดยรวม

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Deposits = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>จำนวนผู้สูงอายุในประเทศไทย</Title>
      <Typography component="p" variant="h9">
       คิดเป็นร้อยละ 18.63 จากประชากรทั้งหมดภายในประเทศ
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        ข้อมูลจากกองยุทธศาสตร์สาธารณสุขและสิ่งแวดล้อม
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          <ChartThree />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Deposits;