import { Outlet} from "react-router-dom";
import Navbar from "./ui/Navbar/Navbar";


function LayoutApp({ children }) {
    return (
        <>
       <Navbar/>
       <Outlet />
        </>
    )
}

export default LayoutApp