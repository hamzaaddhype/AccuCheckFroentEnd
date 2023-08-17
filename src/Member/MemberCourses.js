import React from 'react';


const MemberCourses = () => {
  return (
    <>
    <div className='position-absolute' style={{marginLeft:'20%',width:"80%",marginTop:"10pc"}}>
         {/* <div className="c" id="admin_user" style={{}}> */}
            
            {/* First Container */}
            <div className="container  p-2 border  rounded bg-light" style={{width:"95%"}}>
                <div className='row ms-1'>
                    <div className='col justify-content-start mt-3'>
                        <h3>Completed Courses</h3>
                    </div>
                    <div className='col-sm-3 justify-content-end'>
                        <input className='justify-content-end mt-4 ms-5' type='Date' placeholder='Date'></input>
                    </div>
                </div>


                <div className='row mt-4 ms-2'>
                    <div className='col-6 text-primary' >
                        <p>Medical(4)</p>
                    </div>
                    <div className='col-6 font-weight-normal'>
                        <p>Products(2)</p>
                    </div>
                </div>
                <hr/>


                <div className='row ms-0'>
                    <div className='col-sm-2'>
                        <img src='/medical-doctor.png' className='rounded'/>
                    </div>
                    <div className='col mt-2'>
                        <div className='row fw-normal'>
                        <p>Course Name goes here with details</p>
                        </div>
                        <div className='row fw-light fs-6'>
                        <p>A complete design education for product designers: Research 
                        the user experience,the...</p>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-sm-3'><i class="fa-regular fa-clock">  &nbsp; 10 min</i></div>
                            <div className='col p-0 ' style={{display:"flex",justifyContent:"right",height:"09%" }}> <img src='/Award-star.png'></img></div>
                            <div className='col-sm-3 p-0 mt-1 me-5'><p>300</p></div>
                        </div>   
                    </div>
                    <div className='col-sm-3 mt-5'>
                        <button className=' btn btn-dark  ms-5 text-warning'>Completed</button>
                    </div>
                </div>
                <br></br>

                <div className='row ms-0'>
                    <div className='col-sm-2'>
                        <img src='/course-img-2.png' className='rounded'></img>
                    </div>
                    <div className='col mt-4'>
                        <div className='row fw-normal'>
                        <p>Course Name goes here with details</p>
                        </div>
                        <div className='row fw-light fs-6'>
                        <p>A complete design education for product designers: Research 
                        the user experience,the...</p>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-sm-3'><i class="fa-regular fa-clock">   &nbsp; 5 min</i></div>
                            <div className='col p-0 ' style={{display:"flex",justifyContent:"right",height:"09%" }}> <img src='/Award-star.png'></img></div>
                            <div className='col-sm-3 p-0 mt-1 me-5'><p>300</p></div>
                        </div>   
                    </div>
                    <div className='col-sm-3 mt-5'>
                        <button className=' btn btn-dark  ms-5 text-warning'>Completed</button>
                    </div>
                </div>
                <br></br>

                <div className='row ms-0'>
                    <div className='col-sm-2'>
                        <img src='/course-img-3.png' className='rounded'></img>
                    </div>
                    <div className='col mt-4'>
                        <div className='row fw-normal'>
                        <p>Course Name goes here with details</p>
                        </div>
                        <div className='row fw-light fs-6'>
                        <p>A complete design education for product designers: Research 
                        the user experience,the...</p>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-sm-3'><i class="fa-regular fa-clock">   &nbsp; 5 min</i></div>
                            <div className='col p-0 ' style={{display:"flex",justifyContent:"right",height:"09%" }}> <img src='/Award-star.png'></img></div>
                            <div className='col-sm-3 p-0 mt-1 me-5'><p>300</p></div>
                        </div>   
                    </div>
                    <div className='col-sm-3 mt-5'>
                        <button className=' btn btn-dark  ms-5 text-warning'>Completed</button>
                    </div>
                </div>
            </div>
            <br/>

            
            {/* Second Container */}
            <div className='container border  p-2 mt-5 rounded bg-light' style={{width:"95%"}}>
                <div className='row ms-1'>
                    <div className='col justify-content-start mt-3'>
                        <h3>Recommended Courses</h3>
                    </div>
                    <div className='col-sm-3 mt-3'>
                        <a href='' className=' ms-5 text-dark'>See all <i className='fa fa-greater-than'></i> </a>
                    </div>
                </div>
                <br/>

                <div className='row '>
                    <div  className='col-md-3 col-sm-2 border bg-white rounded p-0'>
                        <div className='row'>
                            <img height="80%" src='/Recommended-Course-1.png' className='rounded' width="100%"></img>
                        </div>
                        <div className='row'>
                            <p className='fs-6 mt-2 ms-1 fw-normal'> Course Name goes here with details</p>
                        </div>
                        <div className='row'>   
                            <i className='fa-regular fa-clock ms-3'> &nbsp; 30 min</i>
                        </div>
                        <div className='row mt-2'> 
                            <div className='col-md-2 m-0 p-0 me-2' style={{display:"flex",justifyContent:"right", height:"03%",width:"20%"}}>
                                <img  src='/Award-star.png' style={{height:"03%",width:"60%"}}></img>
                            </div>
                            <div className='col-md-2 m-0 p-0' style={{height:"03%",width:"20%"}}>
                                <span>300</span>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div class="col-md-12" style={{display:"flex",justifyContent:"right"}}>
                                <button width="60%" type="button" class="btn me-2 mb-2" style={{width:"60%",backgroundColor:"#8EB927"}}>Start</button>
                            </div>
                        </div>
                    </div>
                    <div  className='col-md-3 col-sm-2 border bg-white rounded p-0'>
                        <div className='row'>
                            <img height="80%" src='/Recommended-Course-1.png' className='rounded' width="100%"></img>
                        </div>
                        <div className='row'>
                            <p className='fs-6 mt-2 ms-1 fw-normal'> Course Name goes here with details</p>
                        </div>
                        <div className='row'>   
                            <i className='fa-regular fa-clock ms-3'> &nbsp; 30 min</i>
                        </div>
                        <div className='row mt-2'> 
                            <div className='col-md-2 m-0 p-0 me-2' style={{display:"flex",justifyContent:"right", height:"03%",width:"20%"}}>
                                <img  src='/Award-star.png' style={{height:"03%",width:"60%"}}></img>
                            </div>
                            <div className='col-md-2 m-0 p-0' style={{height:"03%",width:"20%"}}>
                                <span>300</span>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div class="col-md-12" style={{display:"flex",justifyContent:"right"}}>
                                <button width="60%" type="button" class="btn me-2 mb-2" style={{width:"60%",backgroundColor:"#8EB927"}}>Start</button>
                            </div>
                        </div>
                    </div>
                    <div  className='col-md-3 col-sm-2 border bg-white rounded p-0'>
                        <div className='row'>
                            <img height="80%" src='/Recommended-Course-1.png' className='rounded' width="100%"></img>
                        </div>
                        <div className='row'>
                            <p className='fs-6 mt-2 ms-1 fw-normal'> Course Name goes here with details</p>
                        </div>
                        <div className='row'>   
                            <i className='fa-regular fa-clock ms-3'> &nbsp; 30 min</i>
                        </div>
                        <div className='row mt-2'> 
                            <div className='col-md-2 m-0 p-0 me-2' style={{display:"flex",justifyContent:"right", height:"03%",width:"20%"}}>
                                <img  src='/Award-star.png' style={{height:"03%",width:"60%"}}></img>
                            </div>
                            <div className='col-md-2 m-0 p-0' style={{height:"03%",width:"20%"}}>
                                <span>300</span>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div class="col-md-12" style={{display:"flex",justifyContent:"right"}}>
                                <button width="60%" type="button" class="btn me-2 mb-2" style={{width:"60%",backgroundColor:"#8EB927"}}>Start</button>
                            </div>
                        </div>
                    </div>
                    <div  className='col-md-3 col-sm-2 border bg-white rounded p-0'>
                        <div className='row'>
                            <img height="80%" src='/Recommended-Course-1.png' className='rounded' width="100%"></img>
                        </div>
                        <div className='row'>
                            <p className='fs-6 mt-2 ms-1 fw-normal'> Course Name goes here with details</p>
                        </div>
                        <div className='row'>   
                            <i className='fa-regular fa-clock ms-3'> &nbsp; 30 min</i>
                        </div>
                        <div className='row mt-2'> 
                            <div className='col-md-2 m-0 p-0 me-2' style={{display:"flex",justifyContent:"right", height:"03%",width:"20%"}}>
                                <img  src='/Award-star.png' style={{height:"03%",width:"60%"}}></img>
                            </div>
                            <div className='col-md-2 m-0 p-0' style={{height:"03%",width:"20%"}}>
                                <span>300</span>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div class="col-md-12" style={{display:"flex",justifyContent:"right"}}>
                                <button width="60%" type="button" class="btn me-2 mb-2" style={{width:"60%",backgroundColor:"#8EB927"}}>Start</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </div>    
    </>
  )
}

export default MemberCourses;