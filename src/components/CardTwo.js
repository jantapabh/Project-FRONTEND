import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { Row, Col } from 'react-bootstrap';
import one from '../static/images/one.png'

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

const CardTwo = () => {

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>สาเหตุการพลัดตกหกล้มของกลุ่มอายุ 60 ปีขึ้นไป</Title>
      <Typography component="p" variant="h9">
        การตกหรือล้มจากบันไดหรือที่สูง
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        ข้อมูลจากระบบเฝ้าระวังการบาดเจ็บแห่งชาติ (IS) สำนักระบาดวิทยา กรมควบคุมโรค
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          <Row>
            <Col><img src={one} style={{ width: 170, height: 90, margin: 10, padding: 10}} /></Col>
            <Col> <ChartSix /></Col>
          </Row>
        </Link>
      </div>
    </React.Fragment>
  );
}
export default CardTwo;