import React from 'react'
const MemberHome = () => {
  return (
    <>
       {/* Member Prodile  */}
        {/* <div className="c" id="admin_user"> */}
        <div className='user_profile_root_crad position-absolute' style={{width:"80%",marginLeft:"20%"}}>
        <div className="container for_common_Top_margin" >
                <div className='row ms-1 doctor_profile' >
                    <div className='doctor_image doc_parent_div d-flex'>
                        <img src='/doctor-bigImage.png' width="100px" height="100px" alt=''/>
                        <div className='doc_child ms-5'>
                          <div className='d-flex ms-1'>
                          <h6 className='doc_name'>Ahmed Ali </h6>
                          <h6>Level 1</h6>
                          </div>
                          
                          <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar w-75"></div>
                        </div>
                        <div>
                           <p className='ms-1'>Xp 1280</p>
                        </div>
                        </div>
                        <div className='edit_button'>
                         <button className='btn'> Edit Profile</button>
                       </div>
                    </div>
                    
                </div>
            {/* </div> */}
      </div>

      {/* Member Cards */}
      {/* <div className="c" id="admin_user"> */}
        <div className='container mt-5 mb-5'>
          <div className='row ms-1s'>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3 text-dark'>
                <p>Total Ponits</p>
              </div>
              <div className='card_heading text-center text-dark'>
                <h1>230h</h1>
              </div>
              </div>
            </div>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3 text-dark'>
                <p>Learning time</p>
              </div>
              <div className='card_heading text-center text-dark'>
                <h1>23h</h1>
              </div>
              </div>
            </div>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3 text-dark'>
                <p>Certificates</p>
              </div>
              <div className='card_heading text-center text-dark'>
                <h1>2</h1>
              </div>
              </div>
            </div>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3 text-dark'>
                <p>Completed Courses</p>
              </div>
              <div className='card_heading text-center text-dark'>
                <h1>25</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}

      {/* Member Acheviments */}
      <div className='container'>
        <div className='row ms-1 text-center'>
          <div className="col-md-6 p-2 for_achivements_background text-align-center">
          {/* First Row */}
            <div className='row'>
              <div className='col-md-6 p-2'>
                <h3>Achivements</h3>
              </div>
              <div className='col-md-6 text-end'>
                <input type="date"/>
              </div>
            </div>
          {/*First Row  */}
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/Profile-like.png" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/profile-reward.png" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/Profile-3star.png" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/Achievement-1k-icon.svg" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/Profile-star.png" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row'>
            <p className='text-center'>Discover more assets </p>
          </div>
          </div>
          {/* Second Half Card Start Here */}
          <div className="col-md-6">
          <div className='row'>
              <div className='col-md-6 p-2'>
                <h3>Completed Cources</h3>
              </div>
              <div className='col-md-6 text-end'>
                <input type="date"/>
              </div>
            </div>
          {/*First Row  */}
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/Profile-like.png" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/profile-reward.png" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/Profile-3star.png" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/Achievement-1k-icon.svg" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row '>
            <div className='col-md-4'>
              <span>
                <img src="/Profile-star.png" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4 text-end'>
              <p> <input type='date'  /> </p>
            </div>
          </div>
          <div className='row'>
            <p className='text-center'>Lern mor </p>
          </div>
          </div>        
          </div>
        </div>
        </div> 
    </>
  )
}

export default MemberHome