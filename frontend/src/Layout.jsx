import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import TopNavbar from "./component/Topnavbar";


const Layout=()=>{
    return(
        <>
       <Header/> 
       <TopNavbar/>
       <Outlet/>
       
        </>
    )
}
export default Layout;