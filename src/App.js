import Line from "./components/line";
import Zhu from "./components/zhu";
import Zhu2 from "./components/zhu2";
import Ping from './components/Ping';
import "./App.css"



function App() {

  return (
    <div className="App">
      <div className="header">
        下表质量水平分析
      </div>
      <div className="content">
        <div className="firstRow">
          <div className="left1">
            <div className="title">2022年1-12月FQC故障率趋势图</div>
            <Line />
          </div>
          <div className="right1">
            <div className="title">2022年1-12月FQC故障率分布图-生产线</div>
            <Zhu />
          </div>
        </div>
        <div className="secondRow">
          <div className="left2">
            <div className="title">水质线近6年FQC故障率趋势图</div>
            <Zhu2 />
          </div>
          <div className="right2">
            <div className="title">2022年1-12月FQC故障率问题分布图</div>
            <Ping />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
