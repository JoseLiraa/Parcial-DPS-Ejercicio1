import React from 'react';
import Listado from './Listado'

const Form = ({Data, setProductoLista, agregarProducto, setProductoId, productoid}) => {
    return (
          <div className="row">
            <div className="col-6">
              <select
              className="btn btn-secondary btn-lg dropdown-toggle"
              onChange={(e)=>setProductoId(e.target.value)}>
              <option value={0}>
                Seleccione una opcion...
              </option>
              {
                Data.map((producto)=>(
                  <option key={producto.id} value={producto.id}>
                    {`${producto.nombre}: $${producto.precio.toFixed(2)} `}
                  </option>
                ))
              }
              </select>
          </div>
          <div className="col-6">
            <button className="btn btn-secondary btn-lg" onClick={()=>{agregarProducto(productoid)}}>Agregar Producto</button>
          </div>
        </div>


);
}

export default Form;

