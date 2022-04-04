import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import axios from "axios";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const session = JSON.parse(window.sessionStorage.getItem("data"));

class SplineChart extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(
        process.env.REACT_APP_API_URL +
          "/api/order/chart2/" +
          session.data.user_id
      )
      .then((res) => {
        // console.log(res.data);
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "월간 매출 그래프",
      },
      axisX: {
        valueFormatString: "MMM",
      },
      axisY: {
        prefix: "",
        includeZero: false,
      },
      data: [
        {
          yValueFormatString: "#,###",
          xValueFormatString: "MMMM",
          type: "spline",
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

export default SplineChart;
