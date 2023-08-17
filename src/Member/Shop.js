import React from 'react'

const Shop = () => {
  return (
    <>
     {/* <div className="c" id="admin_user"> */}

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
        <div className='col-md-3  bg-white'>
            <div className="card product_card border-0" >
                <img src="/product1.svg" height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">Product Name</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">300</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
        </div>
        <div className='col-md-3  bg-white'>
            <div className="card product_card border-0" >
                <img src="/product2.svg" height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">Product Name</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">300</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
        </div>
        <div className='col-md-3  bg-white'>
            <div className="card product_card border-0" >
                <img src="/product3.svg" height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">Product Name</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">300</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
        </div>
        <div className='col-md-3  bg-white'>
            <div className="card product_card border-0" >
                <img src="/product4.svg" height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">Product Name</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">300</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
        </div>
      </div>
      <div className="row">
        <div className='col-md-3  bg-white'>
            <div className="card product_card border-0" >
                <img src="/product1.svg" height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">Product Name</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">300</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
        </div>
        <div className='col-md-3  bg-white'>
            <div className="card product_card border-0" >
                <img src="/product2.svg" height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">Product Name</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">300</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
        </div>
        <div className='col-md-3  bg-white'>
            <div className="card product_card border-0" >
                <img src="/product3.svg" height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">Product Name</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">300</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
        </div>
        <div className='col-md-3  bg-white'>
            <div className="card product_card border-0" >
                <img src="/product4.svg" height="277px" width="306px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <div className='product_details font_family_common d-flex justify-content-between align-items-center h-50'>
                  <h5 className="card-title font_family_common">Product Name</h5>
                  <div className="ms-5">
                    <img className='' width="50px" header="50px" src="/FullStar.png" alt='' />
                    
                  </div>
                  <h5 className="card-title font_family_common">300</h5>
                  </div>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button href="#" className="btn radeem font_family_common common_button w-100">Radeem</button>
                </div>
              </div>
        </div>
      </div>
    </div>
</div>
    </>
  )
}

export default Shop