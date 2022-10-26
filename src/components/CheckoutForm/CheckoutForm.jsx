import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { createBuyOrder } from "../../services/firestore";


export default function CheckoutForm(){

    const context = useContext(cartContext);
    const { cart } = context;
    const { getItemPrice } = useContext(cartContext);

    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        email: ""
    });

    function inputChangeHandler(event){
        let inputName = event.target.name;
        let value = event.target.value;

        //Accedo de forma dinamica a la propiedad del objeto
        const newDataForm = {...dataForm};
        newDataForm[inputName] = value;
        setDataForm(newDataForm);
    }
    
    function handleCheckout(event){
        event.preventDefault();
        //Objeto hardcodeado del comprador
        const orderData = {
          buyer: dataForm,
          items: cart,
          date: new Date(),
          total: getItemPrice()
        }
    
        createBuyOrder(orderData)
        .then(orderid=>{
          navigate(`/checkout/${orderid}`);
        });
      }

    return(
        <div className="form-container">
            <h4>Para finalizar la compra por favor completa tus datos</h4>
            <form onSubmit={handleCheckout}>
                <div className="form-item">
                    <label htmlFor="name">Nombre</label>
                    <input onChange={inputChangeHandler} type="text" name="name" placeholder="Nombre" value={dataForm.name} required/>
                </div>

                <div className="form-item">
                    <label htmlFor="phone">Teléfono</label>
                    <input onChange={inputChangeHandler} type="text" name="phone" placeholder="Teléfono" value={dataForm.phone} required/>
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input onChange={inputChangeHandler} type="text" name="email" placeholder="Email" value={dataForm.email} required/>
                </div>
                <button className="btnConfirmar" type="submit">Confirmar Compra</button>
            </form>

            



        </div>
    )
}