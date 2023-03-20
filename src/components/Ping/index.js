import React from 'react';
import {
  Chart,
  Interval,
  Tooltip,
  Axis,
  Coordinate,
  Interaction,
  getTheme,
  Legend
} from 'bizcharts';

function Labelline() {
  const data = [
    { item: '紧固件题', count: 62, percent: 0.23 },
    { item: '理货问题', count: 57, percent: 0.21 },
    { item: '铭牌问题', count: 35, percent: 0.13 },
    { item: '记录单问题', count: 30, percent: 0.11 },
    { item: '测试问题', count: 24, percent: 0.09 },
    { item: '线缆问题', count: 18, percent: 0.071 },
    { item: '物料问题', count: 14, percent: 0.05 },
    { item: '外观问题', count: 9, percent: 0.03 },
    { item: '工艺问题', count: 8, percent: 0.03 },
    { item: '管路问题', count: 4, percent: 0.01 },
  ];

  const cols = {
    percent: {
      formatter: val => {
        val = val * 100 + '%';
        return val;
      },
    },
  };

  return (

    <Chart height={260} data={data} scale={cols} autoFit padding={10}
      onIntervalClick={e => {
        const states = e.target.cfg.element.getStates();// 如果是选中，值为['selected'];取消选中，值为[]
      }}
      onGetG2Instance={(c) => {
        console.log(c.getXY(data[0]))
      }}
    >
      <Coordinate type="theta" radius={0.75} />
      <Tooltip showTitle={false} />
      <Axis visible={false} />
      <Interval
        position="percent"
        adjust="stack"
        color="item"
        style={{
          lineWidth: 1,
          stroke: '#fff',
        }}
        label={['count', {
          layout: { type: 'limit-in-plot', cfg: { action: 'ellipsis' } },
          content: (data) => {
            return `${data.item}: ${data.percent * 100}%`;
          },
          style: {
            fill: '#fff',
            fontSize: 12,
            fontWeight: '200',
          }
        }]}
        state={{
          selected: {
            style: (t) => {
              const res = getTheme().geometries.interval.rect.selected.style(t);
              return { ...res, fill: 'red' }
            }
          }
        }}
      />
      <Legend
        position="right"
        itemName={{
          spacing: 10, // 文本同滑轨的距离
          style: {
            fill: "#fff",
          },
          formatter: (text, item, index) => {
            console.log("text", text, item);
            return text === "Berlin" ? "Berlin【重点关注】" : text;
          },
        }}
      />
      <Interaction type='element-single-selected' />
    </Chart>)
}
export default Labelline;