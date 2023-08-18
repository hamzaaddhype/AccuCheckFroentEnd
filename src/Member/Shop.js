import React from 'react'
import { useState,useEffect } from 'react';
import Loader from '../components/Loader';
const Shop = () => {
  const [getProducts, setProducts] = useState([]);
  const [isloading, setLoading] = useState(true)
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let result = await fetch("http://localhost:5000/Admin/getProducts");
    result = await result.json();
    console.log(result);
    if(result<0){
      result.send("<h1>No Data!</h1>")
    }
    console.log("Result from API Members list", result);
    setProducts(result);
    console.log(result._id)
    setLoading(false)
  };
  return (
    <>
     {isloading?(
      <Loader />
    ):( 
      <div className='position-absolute' style={{marginLeft:'20%',width:"80%"}}>
       <div className='container  shop_container for_common_Top_margin' >
         <div className='row'>
            <div className='col-md-6'>
                <div className='row '>
                    <h3>Shop</h3>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='row justify-content-end'>
                   <dic className="col-4 ">
                      <input type='serch' />
                   </dic>
                </div>
            </div>
        </div>
        {/* Filter Buttons Row */}
        <div className='row p-3'>
           <div className='col-2 m-1'>
              <div className='row'>
                <button className='btn common_button font_family_common active'>All</button>
              </div>
           </div>
           <div className='col-2 m-1'>
              <div className='row'>
                <button className='btn common_button font_family_common' >Products</button>
              </div>
           </div>
           <div className='col-2 m-1'>
              <div className='row'>
                <button className='btn common_button font_family_common'>Food</button>
              </div>
           </div>
           <div className='col-2 m-1'>
              <div className='row'>
                <button className='btn common_button font_family_common'>Gifts</button>
              </div>
           </div>
           <div className='col-1 m-1'>
              <div className='row'>
                <button className='btn common_button font_family_common'>Electronics</button>
              </div>
           </div>
           <div className='col-1 ms-1'>
              <div className='row'>
                <button className='btn common_button font_family_common'>Clothing</button>
              </div>
           </div>
           <div className='col-1 ms-1'>
              <div className='row'>
                <button className='btn font_family_common common_button'>Dessert</button>
              </div>
           </div>
        </div>
    </div>
     {/* </div> */}
   

{/* Products Cards */}
{/* <div className="c" id="admin_user"> */}

<div className='container shop_container'>
<div className="row">
{getProducts.map((product) =>{
  return(
    <div className='col-md-3 mb-5 bg-white'>
            <div className="card product_card border-0" >
                <img src={`http://localhost:5000/uploads/${product.image}`} height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">{product.title}</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">{product.points}</h5>
                  </div>
                  <p className="card-text">{product.description}</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
             </div>
  )
})}
      </div>
    </div>
      </div>
      )}
    </>
  )
}

export default Shop