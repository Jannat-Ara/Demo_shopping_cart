import './Card.scss'
import React, { useEffect, useState } from 'react'
const Card = ({ cart }) => {

    const [total, setTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [tax, setTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        //whenever a product added just adding the price 
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            total = total + Number(product.price)
        }
        setTotal(total);


        //calculating on the shipping cost

        let shipping = 0;

        if (total >= 1000) {
            shipping = 0; // Free shipping for total >= 1000
        } else if (total >= 500) {
            shipping = 4.99; // Medium shipping cost for total >= 500
        } else if (total > 0) {
            shipping = 12.99; // Standard shipping cost for any positive total
        }

        setShipping(shipping);

        // Calculate the tax
        const newTax = (total / 10).toFixed(2);
        setTax(newTax);

        // Calculate the grand total
        const newGrandTotal = (total + shipping + Number(newTax)).toFixed(2);
        setGrandTotal(newGrandTotal);
    }, [cart])

    return (<>
        <div className="summary-box shadow-sm">
            <h4 className="summary-title">Order Summary</h4> <hr />
            <h6>Items Ordered:{cart.length}</h6>
            <h6>Product Price:${total}</h6>
            <h5>
                <small>Shipping Cost:${shipping}</small>
            </h5>
            <h5>
                <small>Tax+Vat:${tax}</small>
            </h5>
            <h5>Total Price:${grandTotal}</h5>
            <button className="checkout-button mt-2">Proceed to Checkout</button>
        </div>
    </>)
}
export default Card