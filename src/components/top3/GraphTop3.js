import React, { useState} from "react";
import stylesTop3View from "../../styles/top3Styles";
import { PieChart } from 'react-minimal-pie-chart';

export default function Map({top3_data, subtitle}){

  const { getCode, getName, getData } = require("country-list");
  const classes = stylesTop3View();
  const defaultLabelStyle = {
    fontSize: '1.05px',
    fontFamily: 'sans-serif'
  };

  //TODO: Centrar titulos
  return (
    <div>
    <h1> Top 3 paises por categoria. </h1>
    <h2>{subtitle}</h2>
    {
      top3_data !== null ? (
        <p><h3> Datos de 1900 al 2014</h3>
        <div className={classes.pieContainer} >
        <PieChart
            data={top3_data}
            label={({ dataEntry }) => dataEntry.title+" Valor: "+dataEntry.value_label+" - "+`${Math.round(dataEntry.percentage)} %`}
            labelStyle={defaultLabelStyle}
            radius={35}
        />
        </div></p>
      ) : (
        <h3 className={classes.errorMessage}>Error cargando los datos de esta categoria!</h3>
      )}
    </div>
  );

}