import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/carousel";
import Products from "../product/Products";
function HomePage(){
    return(
        <div>
            <Banner/>
            <Carousel/>
            <Products/>
        </div>
    )
}
export default HomePage;