import { Chart, Interval, Tooltip, getTheme } from 'bizcharts';
import React from 'react'

const data = [
  { year: '工业', sales: 0.73 },
  { year: '安全', sales: 0.14 },
  { year: '集成', sales: 0.09 },
  { year: '烟气', sales: 0.34 },
  { year: '大气', sales: 0.38 },
  { year: '水质', sales: 0.80 },
  { year: '智慧水务', sales: 0.81 },
  { year: '生命科学', sales: 0.57 },
];


function Zhu() {
  return <Chart height={260} autoFit data={data} padding={[10, 20, 50, 40]}>
    <Interval position="year*sales" style={{ lineWidth: 4, stroke: getTheme().colors10[0] }} />
    <Tooltip shared />
  </Chart>
}

export default Zhu;