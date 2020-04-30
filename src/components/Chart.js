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
      <Title>แสดงข้อมูลผู้สูงอายุที่อาศัยอยู่บ้านเพียงลำพัง</Title>
      <ResponsiveContainer>
        <ChartFour />
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default Chart;