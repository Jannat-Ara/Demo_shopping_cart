import Card from '../Card/Card';
import './Product.scss'
const Product = ({ id,name, image, price, categories, addProductToCart }) => {
    //console.log('addProductToCart:', addProductToCart);
    return (
        <div className="container">
            <div className="product-card shadow-sm">
                <img className="product-img" src={image} alt="" />
                <h5 className="categories">{categories}</h5>
                <h5 className="product-title">{name}</h5>
                <h5>Price: ${price}</h5>
                <button onClick={() => addProductToCart({ id, image, price, name})} className="custom-btn custom-btn-success"
                >
                    <span className="icon">+</span> Add to Cart
                </button>
            </div>

        </div>
    );
};
export default Product