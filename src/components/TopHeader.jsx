import React from 'react'

const TopHeader = () => {
  return (
    <>
    {/* <div className="c" id="admin_user"> */}
    <div className='container top_header p-4' style={{width:"80%",marginLeft:"20%"}}>
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <div className='row'>
                        <h6 className='member_welcome font_family_common'>Good Morning, Ahmed</h6>
                        <p className='date_time    font_family_common'>Today Aug 22, 2023 | 7:23 PM</p>
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-end'>
                    <div className='row'>
                        <div className='right_container d-flex align-items-baseline'>
                        <div className='serch'><input type='serch'  /></div>
                    <div className='notification'>
                        <img src='/notification-icon.svg' alt=''/>
                    </div>        
                    <div className='doctor'>
                        <img src='/doctor-bigImage.png' width="50px" alt=''/>
                    </div>  
                    <div className='doc_name'>
                        <p>Ahmed</p>
                    </div>
                   <div className='line p-1'>
                        <img src='/Line.svg' alt=''></img> 
                   </div>
                    <div className='rting_points'>
                        <img src='/star-3.svg' width="30px" alt=''/>
                    </div>
                    <div className='total_ponits'>
                        <span> <p>230</p></span>
                    </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    {/* </div> */}
       
    </>
  )
}

export default TopHeader