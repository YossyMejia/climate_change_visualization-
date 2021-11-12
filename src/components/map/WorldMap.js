
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
    { country: "jp", value: 8.677 }, // Japón
    { country: "de", value:  8.677},  // Alemania
    { country: "gb", value: 8.677 },  // Reino Unido
    { country: "in", value: 8.677 }, // india
    { country: "fr", value: 8.677 },  // francia
    { country: "it", value: 8.677 },  // italia
    { country: "ca", value: 8.677 },  // canada
    { country: "kr", value:  8.677},  // corea del sur
  ];

  return (
    <div className="Map">
      <ReactWorldCountriesMap color="#900C3F" 
      tooltipBgColor="#900C3F" tooltipTextColor="white"
      title="Informacion de precipitacion mensual por pais" value-suffix="" value-prefix="Precipitacion: " size="responsive" data={data} />
    </div>
  );

}
