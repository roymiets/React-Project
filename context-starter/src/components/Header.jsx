import { useRef } from 'react';
import ThemeToggleButton from '../ThemeToggleButton.jsx';
import CartModal from './CartModal.jsx';
import { useCart } from './CartContext.jsx';

export default function Header() {
  const modal = useRef();
  const { shoppingCart, handleUpdateCartItemQuantity } = useCart();

  const cartQuantity = shoppingCart.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        cartItems={shoppingCart.items}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
          <ThemeToggleButton />
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
