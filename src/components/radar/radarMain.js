import React from "react"
//import "./styles.css";
import Radar from "react-d3-radar";

export default function RadarView() {
  return (
    <Radar
      width={500}
      height={500}
      padding={70}
      domainMax={10}
      highlighted={null}
      onHover={(point) => {
        if (point) {
          console.log("hovered over a data point");
        } else {
          console.log("not over anything");
        }
      }}
      data={{
        variables: [
          { key: "tempeture", label: "Temperatura" },
          { key: "ghg", label: "GHG" },
          { key: "co2", label: "CO2" },
        ],
        sets: [
          {
            key: "China",
            label: "China",
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
      }}
    />
  );
}
