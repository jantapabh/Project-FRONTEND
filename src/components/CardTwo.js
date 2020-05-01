import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

//Import Chart

import ChartSix from './charts/ChartSix'

//ส่วนแสดงจำนวนผู้สูงอายุในประเทศไทยปัจจุบันแบ่งแยกเป็นชายและหญิงและหากกดในส่วนของ View balance จะแสดงผู้สูงอายุในแต่ละจังหวัดโดยรวม

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const CardTwo= () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>สาเหตุการพลัดตกหกล้มของกลุ่มอายุ 60 ปีขึ้นไป</Title>
      <Typography component="p" variant="h9">
        โดยรวม 60 % จากประชากรทั้งหมดภายในประเทศ
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      ข้อมูลจากระบบเฝ้าระวังการบาดเจ็บแห่งชาติ (IS) สำนักระบาดวิทยา กรมควบคุมโรค
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          <ChartSix />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default CardTwo;