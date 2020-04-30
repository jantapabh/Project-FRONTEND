import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

//import ChartFour
import ChartFour from './charts/ChartFour'

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

//กราฟแกน x,y

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];
//สร้างกราฟเรียกฟงัก์ชั่น create Data

const Chart = () => {

  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>แสดงข้อมูลผู้สูงอายุที่อาศัยอยู่บ้านเพียงลำพัง</Title>
      <ResponsiveContainer>
        <ChartFour />
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default Chart;