import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';
import { useCart } from './CartContext.jsx';

export default function Shop() {
  const { handleAddItemToCart } = useCart();

  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={() => handleAddItemToCart(product.id)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
