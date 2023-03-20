import { Chart, Interval, Tooltip, getTheme, Coordinate } from 'bizcharts';
import React from 'react'

const data = [
  { year: '2017年', sales: 2.57 },
  { year: '2018年', sales: 4.12 },
  { year: '2019年', sales: 3.15 },
  { year: '2020年', sales: 1.05 },
  { year: '2021年', sales: 0.7 },
  { year: '2022年', sales: 0.81 },
];


function Zhu2() {
  return <Chart height={260} autoFit data={data} padding={[10, 20, 20, 60]} >
    <Coordinate transpose />
    <Interval position="year*sales" style={{ lineWidth: 4, stroke: getTheme().colors10[0] }} />
    <Tooltip shared />
  </Chart>
}

export default Zhu2;