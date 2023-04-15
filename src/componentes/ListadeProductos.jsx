import React, { useState } from "react";
import Row from "./Row";

export default function Pruebas({discount}) {
  const [rows, setRows] = useState([producto]);
  const [amount, setAmount] = useState(0);
 

  const handleOnChange = (index, name, value) => {
    const copyRows = [...rows];
    copyRows[index] = {
      ...copyRows[index],
      [name]: value
    };
    setRows(copyRows);
  };
  

  const handleOnAdd = () => {
    let total = 0;
    rows.map(function (num) {
      total = total + parseInt(num.precio);
    });
    setAmount(total);
    setRows(rows.concat(producto));
  };

  const handleOnRemove = (index) => {
    setAmount(amount - parseInt(rows[index].numero));
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);
  };

 
  return (
    <div>
      {rows.map((row, index) => (
        <Row
          {...row}
          onChange={(name, value) => handleOnChange(index, name, value)}
          onRemove={() => handleOnRemove(index)}
          key={index}
        />
      ))}

      <div className="upSide"> 
      <button onClick={handleOnAdd}>Agregar</button>
      <div>
      <label>Total <input type="number" placeholder="suma total" value={amount} className="input"/>
      </label>
      <div>
      <input
        type="number"
        value={discount}
        placeholder="Descuento a aplicar"
       
      />
      <label> Total con descuento <input type="number" placeholder="" value={amount - discount}  />
      </label>
      </div>
      </div>
      </div>
    </div>
  );
}


const producto = {
  id:"1",
  codigo: "",
  descripcion: "",
  precio: ""
  
};


