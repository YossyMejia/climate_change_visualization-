import React, {useState, Component} from "react"
//import "./styles.css";
import Radar from "react-d3-radar";


const chartData = {
  variables: [
    { key: "tempeture", label: "Temperatura" },
    { key: "ghg", label: "GHG" },
    { key: "co2", label: "CO2" },
  ],
  sets: [
    {
      key: "China",
      label: "China",								
      color: "steelblue", 
      values: {
        tempeture: 4,
        ghg: 6,
        co2: 7,           
      }
    },
    {
      key: "Costa Rica",
      label: "Costa Rica",
      values: {
        tempeture: 10,
        ghg: 8,
        co2: 6,
      }
    },
    {
      key: "Mexico",
      label: "Mexico",
      values: {
        tempeture: 5,
        ghg: 10,
        co2: 3,
      }
    }
  ]
};

class RadarView extends React.Component {
  state = {
    highlighted: null
  };

  onHover = hovered => {
    const { highlighted } = this.state;
    if (hovered === null && highlighted === null) {
      return;
    }
    if (highlighted && hovered && hovered.key === highlighted.key) {
      return;
    }
    this.setState({ highlighted: hovered });
  };

  render() {
    return (
      <Radar
        width={500}
        height={500}
        padding={70}
        domainMax={10}
        highlighted={this.state.highlighted}
        onHover={this.onHover}
        data={chartData}
      />
    );
  }
}

export default RadarView;