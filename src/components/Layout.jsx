import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Layout = () => {
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
          <div className="col-md-6">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span>
                    <i className="fa-solid fa-user li_and_a_common_class for_navbar_links "></i>
                  </span>
                  <a
                    className="dropdown-toggle for_navbar_links"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    User
                  </a>
                  <ul class="dropdown-menu">
                    <NavLink to="/Admin/AddUser">
                      <li>
                        <a className="dropdown-item" href="#">
                          Add Member
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/Admin/GetMembers">
                      <li>
                        <a className="dropdown-item" href="#">
                          Get All Member
                        </a>
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Memver Routes end here */}

        {/* Shop Routes start here */}
        <div className="row for_bac_radious">
          <div className="col-md-6">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span>
                    <i class="fa-solid fa-shop li_and_a_common_class  "></i>
                  </span>
                  <a
                    className="dropdown-toggle for_navbar_links"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <NavLink to="/Admin/AddProduct">
                      <li>
                        <a className="dropdown-item" href="#">
                          Add Product
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/Admin/GetProducrs">
                      <li>
                        <a className="dropdown-item" href="#">
                          Get All Products
                        </a>
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Shop Routes end here */}

        {/* Cource Routes start here */}
        <div className="row for_bac_radious">
          <div className="col-md-6">
            <ul>
              <li className="side_list">
                <div className="dropdown">
                  <span>
                    <i class="fa-solid fa-book for_navbar_links p-2"></i>
                  </span>
                  <a
                    className="dropdown-toggle for_navbar_links"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cource
                  </a>
                  <ul class="dropdown-menu">
                    <NavLink to="/Admin/AddCource">
                      <li>
                        <a className="dropdown-item" href="#">
                          Add Cource
                        </a>
                      </li>
                    </NavLink>
                    <NavLink to="/Admin/GetCources">
                      <li>
                        <a className="dropdown-item" href="#">
                          Get All Cources
                        </a>
                      </li>
                    </NavLink>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Cource Routes end here */}
        <div className="row mt-5">
          <div className="col-12 mt-5">
            <button className="btn btn-info w-100 fw-bold">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
