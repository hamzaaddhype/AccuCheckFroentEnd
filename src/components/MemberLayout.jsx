import React from 'react'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import TopHeader from './TopHeader';
const MemberLayout = () => {
  return (
    <>
      <Outlet />
      <div className="root_div">
        <div className="row">
          <div className="">
            <h3 className="brand_name text-center mt-5 mb-5">
              ACCU-CHECK <span>®</span>
            </h3>
          </div>
        </div>
        {/* Member Routes start here */}
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='p-2'>
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2964 2.8407H4.57539C3.06466 2.8407 1.82861 4.07891 1.82861 5.59229V22.1018C1.82861 23.6152 3.06466 24.8534 4.57539 24.8534H14.1891L11.4423 28.9808V30.3566H22.4295V28.9808L19.6827 24.8534H29.2964C30.8072 24.8534 32.0432 23.6152 32.0432 22.1018V5.59229C32.0432 4.07891 30.8072 2.8407 29.2964 2.8407ZM29.2964 19.3503H4.57539V5.59229H29.2964V19.3503Z" fill="black"/>
                  </svg>
                  </span>
                  <a>OverView</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='p-2'>
                  <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32198 0.885254C1.81125 0.885254 0.575195 2.12347 0.575195 3.63685V25.6496C0.575195 27.163 1.81125 28.4012 3.32198 28.4012H22.5494C24.0602 28.4012 25.2962 27.163 25.2962 25.6496V3.63685C25.2962 2.12347 24.0602 0.885254 22.5494 0.885254H3.32198ZM3.32198 3.63684H10.1889V14.6432L6.75545 12.5795L3.32198 14.6432V3.63684Z" fill="white"/>
                  </svg>
                  </span>
                  <a>Cources</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='p-2'>
                  <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32198 0.885254C1.81125 0.885254 0.575195 2.12347 0.575195 3.63685V25.6496C0.575195 27.163 1.81125 28.4012 3.32198 28.4012H22.5494C24.0602 28.4012 25.2962 27.163 25.2962 25.6496V3.63685C25.2962 2.12347 24.0602 0.885254 22.5494 0.885254H3.32198ZM3.32198 3.63684H10.1889V14.6432L6.75545 12.5795L3.32198 14.6432V3.63684Z" fill="white"/>
                  </svg>
                  </span>
                  <a>Complete Cources</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='p-2'>
                  <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32198 0.885254C1.81125 0.885254 0.575195 2.12347 0.575195 3.63685V25.6496C0.575195 27.163 1.81125 28.4012 3.32198 28.4012H22.5494C24.0602 28.4012 25.2962 27.163 25.2962 25.6496V3.63685C25.2962 2.12347 24.0602 0.885254 22.5494 0.885254H3.32198ZM3.32198 3.63684H10.1889V14.6432L6.75545 12.5795L3.32198 14.6432V3.63684Z" fill="white"/>
                  </svg>
                  </span>
                  <a>Support & Comunity</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row for_bac_radious">
          <div className="col-md-6 set_width">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span className='p-2'>
                    <img src='/Shop2.svg' alt='' />
                  </span>
                  <a>Shop</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TopHeader/>


      {/* Member Prodile  */}
      {/* <div className="c" id="admin_user"> */}
            <div className="container " style={{width:"80%",marginLeft:"20%"}}>
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
            </div>
      {/* </div> */}

      {/* Member Cards */}
      {/* <div className="c" id="admin_user"> */}
        <div className='container mt-5 mb-5' style={{width:"80%",marginLeft:"20%"}}>
          <div className='row ms-1s'>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3'>
                <p>Total Ponits</p>
              </div>
              <div className='card_heading text-center'>
                <h1>230</h1>
              </div>
              </div>
            </div>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3'>
                <p>Learning time</p>
              </div>
              <div className='card_heading text-center'>
                <h1>23h</h1>
              </div>
              </div>
            </div>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3'>
                <p>Certificates</p>
              </div>
              <div className='card_heading text-center'>
                <h1>2</h1>
              </div>
              </div>
            </div>
            <div className='col-md-3 mb-2'>
              <div className='member_card'>
              <div className='card_heading p-3'>
                <p>Completed Courses</p>
              </div>
              <div className='card_heading text-center'>
                <h1>25</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}

      {/* Member Acheviments */}
      <div className='container' style={{width:"78%",marginLeft:"20%"}}>
        <div className='row ms-1 text-center'>
          <div className="col-md-6 p-2 for_achivements_background text-align-center">
          {/* First Roe */}
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
          </div>
          {/* Second Half Card Start Here */}
          {/* <div className="col-md-6">
          
            <div className='row'>
              <div className='col-md-6'>
                <h3>Completeed Cources</h3>
              </div>
              <div className='col-md-6'>
                <input type="date"/>
              </div>
            </div>
          
          <div className='row'>
            <div className='col-md-3'>
              <span>
                <img src="/Achievement-1k-icon.svg" alt='' />
              </span>
            </div>
            <div className='col-md-4'>
              <h6>Friendly</h6>
              <p>Invites 3 friends from Google</p>
            </div>
            <div className='col-md-4'>
              <p> <input type='date'  /> 19-92-2023</p>
            </div>
          </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default MemberLayout