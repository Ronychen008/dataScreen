import React from 'react'
import { Chart, LineAdvance } from "bizcharts";
const data = [
  {
    month: "1月",
    temperature: 0.69
  },
  {
    month: "2月",
    temperature: 0.16
  },
  {
    month: "3月",
    temperature: 0.29
  },
  {
    month: "4月",
    temperature: 0.41
  },
  {
    month: "5月",
    temperature: 0.63
  },

  {
    month: "6月",
    temperature: 1.21
  },
  {
    month: "7月",
    temperature: 0.78
  },
  {
    month: "8月",
    temperature: 0.86
  },
  {
    month: "9月",
    temperature: 0.62
  },
  {
    month: "10月",
    temperature: 0.32
  },
  {
    month: "11月",
    temperature: 0.51
  },
  {
    month: "12月",
    temperature: 0.48
  },
];


function Demo() {
  return (
    <Chart padding={[10, 20, 50, 40]} autoFit height={260} data={data}>
      <LineAdvance
        shape="smooth"
        point
        area
        position="month*temperature"
        color="temperature"
      />
    </Chart>
  )
}
export default Demo;