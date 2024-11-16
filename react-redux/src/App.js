import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './components/Prodcut';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './components/DashBoard';
import Cart from './components/Cart';
import Layout from './components/Layout';
import NavPannel from './components/NavPannel';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<NavPannel />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/navpannel" element={<Dashboard />}></Route>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
