
import React from "react";
import stylesMapView from "../../styles/mapStyles";
import { ReactWorldCountriesMap } from "react-world-countries-map"
import '../../styles/map.css';

export default function Map({map_data}){

  const classes = stylesMapView();

  return (
    <div>
      <div className="Map">
          <ReactWorldCountriesMap color="#168aad" 
          tooltipBgColor="#184e77" tooltipTextColor="white"
          title="Informacion por mundial por paises" value-suffix="" value-prefix="Valor de la categoria: " size="responsive" data={map_data} />
      </div>
    </div>
  );
}
