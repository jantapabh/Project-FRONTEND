import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

//import ChartFour
import ChartFour from './charts/ChartFour'


const Chart = () => {

  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>ข้อมูลอัตราการเสียชีวิตจากการพลัดตกหกล้มของกลุ่มอายุ 60 ปีขึ้นไป ปี พ.ศ. 2551 - 2558</Title>
      <ResponsiveContainer>
        <ChartFour />
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default Chart;