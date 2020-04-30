import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  {
    name: 'เขตสุขภาพที่ 1', uv: 4000, female: 20.1, male: 2400,
  },
  {
    name: 'เขตสุขภาพที่ 2', uv: 3000, female: 17.5, male: 2210,
  },
  {
    name: 'เขตสุขภาพที่ 3', uv: 2000, female: 11.9, male: 2290,
  },
  {
    name: 'เขตสุขภาพที่ 4', uv: 2780, female: 8.8, male: 2000,
  },
  {
    name: 'เขตสุขภาพที่ 5', uv: 1890, female: 13.1, male: 2181,
  },
  {
    name: 'เขตสุขภาพที่ 6', uv: 2390, female: 10.9, male: 2500,
  },
  {
    name: 'เขตสุขภาพที่ 7', uv: 3000, female: 8.5, male: 2100,
  },
  {
    name: 'เขตสุขภาพที่ 8', uv: 3490, female: 9.2, male: 2100,
  },
  {
    name: 'เขตสุขภาพที่ 9', uv: 3490, female: 11.4, male: 2100,
  },
  {
    name: 'เขตสุขภาพที่ 10', uv: 3490, female: 11.6, male: 2100,
  },
  {
    name: 'เขตสุขภาพที่ 11', uv: 3490, female: 14.4, male: 2100,
  },
  {
    name: 'เขตสุขภาพที่ 12', uv: 3490, female: 13.4, male: 2100,
  },
  {
    name: 'เขตสุขภาพที่ กทม', uv: 3490, female: 3.6, male: 2181,
  },
  {
    name: 'รวมทั้งประเทศ', uv: 3490, female: 11.7, male: 2100,
  },
];

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default class ChartTwo extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';

  render() {
    return (
      <BarChart
        width={1200}
        height={450}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))
          }
        </Bar>
      </BarChart>
    );
  }
}
