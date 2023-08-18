import React, { useRef } from 'react';
import  { useState, useEffect } from 'react'
import Loader from '../components/Loader';
import ReactPlayer from 'react-player'
import Swal from 'sweetalert2';
const MemberCourses = () => {
const [getProducts, setProducts] = useState([]);
const [isloading, setLoading] = useState(true);
const [startTime, setStartTime] = useState(null);
const [isVideoPaused, setVideoPaused] = useState(true);
const [endTIme, setEndTIme] = useState(null);
const [timeWatched, setTimeWatched] = useState(0);
const [videoCompleted, setVideoCompleted] = useState(false);
const playerRef = useRef(null);
 

    const playVideo=()=>{
        playerRef.current.seekTo(startTime); 
        setVideoCompleted(false);
        playerRef.current.getInternalPlayer().play();
    };

    const handleTime=({playedSeconds})=>{
        if(!startTime) {
            setStartTime(playedSeconds);
        }
        if(!videoCompleted){
            setEndTIme(playedSeconds);
            setTimeWatched(playedSeconds- startTime);
        }  
    };

    const handleVideoEnded = () =>{
        setVideoCompleted(true);
        setStartTime(null);
        setEndTIme(null);
        alert('Video ended');
    }

    const getData = async () => {
        let result = await fetch("http://localhost:5000/Admin/getCources");
        result = await result.json();
        if(result<0){
          result.send("<h1>No Data!</h1>")
        }
        console.log("Result from API Members list", result);
        setProducts(result);
        console.log(result._id);
        setLoading(false)
      };
      useEffect(() => {
        getData();
      }, []);
      
  return (
    <>
         {/* <div className="c" id="admin_user"> */}
         <div className='position-absolute' style={{marginLeft:'20%',width:"80%", marginTop:"07%"}}>
            {/* First Container */}
            <div className="container border mt-5 rounded bg-light">
                <div className='row ms-1'>
                    <div className='col justify-content-start mt-3'>
                        <h3>Courses</h3>
                    </div>
                    <div className='col-sm-3 justify-content-end'>
                        <input className='justify-content-end mt-4 ms-5' type='Date' placeholder='Date'></input>
                    </div>
                </div>


                <div className='row mt-4 ms-2'>
                    <div className='col-2 text-primary' >
                        <p>Medical(4)</p>
                    </div>
                    <div className='col font-weight-normal'>
                        <p>Products(2)</p>
                    </div>
                    <div className='row'><hr></hr></div>
                </div>
                                {
                                    getProducts.map((product) =>{
                                        return(
                                            <div className='row ms-0 '>
                                            <div className='col-md-3 vedio_ThumNail' style={{height:"10%"}}>
                    {/* <img src='/medical-doctor.png' className='rounded'/> */}
                    <ReactPlayer ref={playerRef} url={`http://localhost:5000/uploads/${product.image}`} controls={true} 
                                                onProgress={handleTime} onEnded={handleVideoEnded} />
                    {/* <button onClick={playVideo}> Play</button> */}
                    <p>Time Watched: {timeWatched.toFixed(2)} seconds</p>
                    </div>
                    <div className='col mt-2'>
                        <div className='row fw-normal'>
                        <p>{product.name}</p>
                        </div>
                        <div className='row fw-light fs-6'>
                        <p>{product.discription}</p>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-sm-3'><i class="fa-regular fa-clock">  &nbsp; {product.duration}</i></div>
                            <div className='col p-0 ' style={{display:"flex",justifyContent:"right",height:"09%" }}> <img src='/Award-star.png'/></div>
                            <div className='col-sm-3 p-0 mt-1 me-5'><p>{product.points}</p></div>
                        </div>   
                    </div>
                    <div className='col-md-3 mt-3'>
                        <button className='btn btn-primary ms-5 text-light'>Continue</button>
                        <p className='ms-5'>Progress</p>
                    </div>
                   </div>             
                    )
                                    })
                                }
                   


                  <br></br>
            </div>
            <br/>

            
            {/* Second Container */}
            <div className='container border mt-5 rounded bg-light'>
                <div className='row ms-1'>
                    <div className='col justify-content-start mt-3'>
                        <h3>Recommended Courses</h3>
                    </div>
                    <div className='col-sm-3 mt-3'>
                        <a href='' className=' ms-5 text-dark'>See all <i className='fa fa-greater-than'></i> </a>
                    </div>
                </div>
                <br/>

                <div className='row ms-0'>
                    <div  className='col-md-2 col-sm-2 border bg-white rounded p-0' style={{ width:"23%"}}>
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

                    <div  className='col-md-2  col-sm-2 ms-2 border bg-white rounded p-0' style={{width:"23%"}}>
                        <div className='row'>
                            <img height="80%" src='/Recommended-Course-2.png' className='rounded' width="100%"></img>
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
                        <br></br>
                        <div className='row'>
                            <div class="col-md-12"  style={{display:"flex",justifyContent:"right"}}>
                                <button type="button" class="btn me-2 mb-2" style={{width:"60%",backgroundColor:"#8EB927"}}>Start</button>
                            </div>
                        </div>
                    </div>

                    <div  className='col-md-2 col-sm-2 ms-2 border bg-white rounded p-0' style={{width:"23%"}}>
                        <div className='row'>
                            <img height="80%" src='/Recommended-Course-3.png' className='rounded' width="100%"></img>
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
                        <br></br>
                        <div className='row'>
                            <div class="col-md-12"  style={{display:"flex",justifyContent:"right"}}>
                                <button type="button" class="btn me-2 mb-2" style={{width:"60%",backgroundColor:"#8EB927"}}>Start</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-2 col-sm-2 ms-2   border bg-white rounded p-0' style={{width:"23%"}}>
                        <div className='row'>
                            <img height="80%" src='/Recommended-Course-4.png' className='rounded' width="100%"></img>
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
                        <br></br>
                        <div className='row'>
                            <div class="col-md-12"  style={{display:"flex",justifyContent:"right"}}>
                                <button type="button" class="btn me-2 mb-2" style={{width:"60%",backgroundColor:"#8EB927"}}>Start</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MemberCourses;