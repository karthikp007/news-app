// import { useState } from "react"
// import Navbar from "./Components/Navbar"
// import NewsBoard from "./Components/NewsBoard"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Registrationpage from "./Components/Registrationpage"
import FavPage from "./Components/FavPage"

const App = () => {
  // const[category,setCategory] = useState("general");
  return (

     <BrowserRouter>
        <div>
          <Routes>
           
            <Route path="/" element={<Home />}/>
             {/* <Navbar setCategory={setCategory}/>
             <NewsBoard category={category}/> */}
             <Route path="/signin-signup" element={<Registrationpage />}/>
             <Route path="/favorites" element={<FavPage />} />
          </Routes>
          
        </div>
    </BrowserRouter>

  )
}

export default App
