import React from "react";


function Banner() {
    return (
        <div className="p-2 mb-2 bg-dark banner">
                <div className="container-fluid py-5 text-white d-flex 
                justify-content-center align-items-center" >
                    <div>
                        <h3 className="display-5 fw-bold">
                             Reading is order to live <br/> 
                        </h3>
                        <p className="">Mary Pope Osborne</p>
                        <button className="btn btn-primary btn-lg text-white float-end">Xem thêm</button>                        
                    </div>
                </div>
        </div>
    );
}
export default Banner;