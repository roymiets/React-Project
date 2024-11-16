import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { remove } from "../Store/CartSlice";
import { useDispatch } from "react-redux";


function Cart(){
    const productCart=useSelector(state=>state.cart)
    const dispatch=useDispatch();
    const removeToCart=(id)=>{
        dispatch(remove(id));
     }
    
    const card = productCart.map(productCart => { // Changed 'products' to 'product'
        return (
            <div className="col-md-3" key={productCart.id}> {/* Added unique key */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productCart.image} style={{width:'100px',height:'130px'}} />
                    <Card.Body>
                        <Card.Title>{productCart.title}</Card.Title> 
                        <Card.Text>INR:{productCart.price}</Card.Text>
                        <Button variant="primary" onClick={removeToCart(productCart.id)} >remove To Cart</Button>
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
export default Cart;