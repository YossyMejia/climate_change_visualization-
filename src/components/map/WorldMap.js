
import React from "react";
import stylesMapView from "../../styles/mapStyles";
import { ReactWorldCountriesMap } from "react-world-countries-map"
import { VectorMap } from "react-jvectormap"
import '../../styles/map.css';

export default function Map(){

  const { getCode, getName, getData } = require("country-list");

  const classes = stylesMapView();

  const data =
  [
    { country: "us", value: 8.677 },  // Estados Unidos
    { country: "cn", value: 8.677 }, // China
    { country: "jp", value: 5378136 }, // Japón
    { country: "de", value:  4319286},  // Alemania
    { country: "gb", value: 3124650 },  // Reino Unido
    { country: "in", value: 3049704 }, // india
    { country: "fr", value: 2938271 },  // francia
    { country: "it", value: 2106287 },  // italia
    { country: "ca", value: 1883487 },  // canada
    { country: "kr", value:  1806707},  // corea del sur
  ];

  return (
    <div className="Map">
      <ReactWorldCountriesMap color="blue" 
      tooltipBgColor="blue" tooltipTextColor="white"
      title="Top 10 Países con mayor PIB según el FMI" value-suffix="MDD" value-prefix="$" size="responsive" data={data} />
    </div>
  );

}
