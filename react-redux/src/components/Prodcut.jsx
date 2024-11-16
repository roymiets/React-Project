import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { add } from "../Store/CartSlice";
import { useDispatch } from "react-redux";

function Product() {
    const dispatch=useDispatch();
    const [products, getProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => getProducts(result));
    }, []); // Added empty dependency array
    const addToCart=(product)=>{
       dispatch(add(product))
    }

    const card = products.map(product => { // Changed 'products' to 'product'
        return (
            <div className="col-md-3" key={product.id}> {/* Added unique key */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title> 
                        <Card.Text>INR:{product.price}</Card.Text>
                        <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    });

    return (
        <>
            <p>Product Dashboard</p>
            <div className="row">
                {card}
            </div>
        </>
    );
}

export default Product;
