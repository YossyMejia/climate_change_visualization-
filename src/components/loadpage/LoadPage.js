import React, { useState } from "react";
import * as XLSX from "xlsx";

export default function LoadPage() {

    const handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        let hojas = []
        if (name === 'file') {
            let reader = new FileReader()
            reader.readAsArrayBuffer(target.files[0])
            reader.onloadend = (e) => {
                var data = new Uint8Array(e.target.result);
                var workbook = XLSX.read(data, {type: 'array'});

                workbook.SheetNames.forEach(function(sheetName) {
                    // Here is your object
                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    hojas.push({
                        data: XL_row_object,
                        sheetName
                    })
                })
                console.log(hojas[0].data)
            }
        }
    }

    return (
        <input 
            required 
            type="file" 
            name="file" 
            id="file" 
            onChange={handleInputChange} 
            placeholder="Archivo de excel" 
        />
    );
  }