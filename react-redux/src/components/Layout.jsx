import { Outlet } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Provider } from "react-redux";
import Store from "../Store/Store";



function Layout(){
    return(
        <>
       <Provider store={Store}>
        <Navbar>
            <main>
                <Outlet></Outlet>
            </main>
        </Navbar>
       </Provider>
        </>
    )
}
export default Layout;