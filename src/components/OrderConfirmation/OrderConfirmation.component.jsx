import React from "react";
import "./OrderConfirmation.styles.scss";


const OrderConfirmation = ({ cart, orderId }) => {

    return (

        <div className="orderConfirmation_container">

            <div className="orderConfirmation_content">

            </div>

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
                    return(
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

            <div className="orderConfirmation_price_details">

            </div>
        </div>
    )
}


export default OrderConfirmation;