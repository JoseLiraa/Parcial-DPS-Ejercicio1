import React from 'react';
import NumericInput from 'react-numeric-input';

const Listado = ({productolista, modifyQuantity}) => {

    const itemsPrice = productolista.reduce((a, c) => a + c.cantidad * c.precio, 0);
    return (
        <div className="container">
        {productolista.length === 0 && <h2>La lista esta vacia</h2>}

        {
            productolista.map(({nombre, cantidad, precio},index)=>(
                <table key={index} className="table">
                <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>{nombre}</td>
                <td>${precio}</td>
                <td>{cantidad}</td>
                <NumericInput mobile min={0} max={100} value={cantidad}
                    onChange={(value)=>modifyQuantity(index, value)}
                    />
                </tr>
                </tbody>
                </table>
            ))
        }

        <div className="d-grid gap-2 col-6 mx-auto">
            <div class="alert alert-info" role="alert">
                <h1 className="display-3">
                    TOTAL: <strong>${itemsPrice.toFixed(2)}</strong>
                </h1>
            </div>
        </div>



        </div>
    );
}

export default Listado;