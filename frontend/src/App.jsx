import {BrowserRouter , Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import Home from "./pages/Home";
import Ragestation from "./pages/Registation";
import DeshBoard from "./pages/DashBorad";


const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="ragestation" element={<Ragestation/>}/>
    <Route path="deshboard" element={<DeshBoard/>}/>
  
    
    </Route>
   </Routes>
    </BrowserRouter> 
  
    </>
  )
}
export default App;