import { useState } from "react";
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"

const Home = () => {
    const[category,setCategory] = useState("general");
  return (
    <div>
             <Navbar setCategory={setCategory}/>
             <NewsBoard category={category}/>
    </div>
  )
}

export default Home
