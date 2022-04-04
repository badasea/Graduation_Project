import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import axios from "axios";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/shop/count2/1")
      .then((res) => {
        // console.log(res.data);
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "업종별 분포",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}개",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label}",
          dataPoints: this.state.persons,
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default PieChart;
