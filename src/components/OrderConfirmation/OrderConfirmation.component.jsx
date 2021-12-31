import React from "react";
import "./OrderConfirmation.styles.scss";


const OrderConfirmation = ({ cart, orderId, address, city, creditCard, postalCode }) => {

    const subtotal = cart.cartInfo.totalPrice;
    const tax = (cart.cartInfo.totalPrice *.13).toFixed(2);
    const total = (+subtotal + +tax).toFixed(2);


    return (

        <div className="orderConfirmation_container">

            <div className="orderConfirmation_content">



                <div className="orderConfirmation_products">
                    <table>

                        <tb>
                            <th>
                                Name

                            </th>
                            <th>
                                Quantity

                            </th>
                            <th>
                                Price

                            </th>
                            {cart.cartProducts.map(product => {
                                return (
                                    <tr>
                                        <td>
                                            {product.title}

                                        </td>
                                        <td>
                                            {product.quantity}
                                        </td>
                                        <td>
                                            $ {product.price}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tb>
                    </table>
                </div>

                <div className="orderConfirmation_user_details">
                <h2>Name: {orderId}</h2>
                <h2>Shipping Address : {address}</h2>
                <h2>City : {city}</h2>


                </div>
                <br/>
                



                <div className="orderConfirmation_price_details">
                    <h2>Order Number : {orderId}</h2>
                    <h2>Subtotal : {subtotal}</h2>
                    <h2>Tax: {tax}</h2>
                    <h2>Total: {total}</h2>

                </div>
            </div>
        </div>
    )
}


export default OrderConfirmation;