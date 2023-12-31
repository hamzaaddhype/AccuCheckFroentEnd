import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
const GetMembers = () => {
  const [getMember, setMember] = useState([]);

  useEffect(() => {
   getData();
    
  }, []);

  const getData = async () => {
    let result = await fetch("http://localhost:5000/User/getMembers");
    result = await result.json();
    console.log("Result from API Members list", result);
    setMember(result);
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your Prodcut has been deleted.',
          'success'
        ) 
      }

    })
    await fetch(`http://localhost:5000/User/dellMember/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Resource deleted successfully");
          // toast.error("Deleted successfully");
        } else {
          console.error("Error deleting resource");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // getData();
  };
  return (
    <>
      <div className="c mt-3" id="admin_user">
        <div className="row">
          {getMember.map((member) => {
            return (
              <div className="col-md-3">
                <div className="card ms-2 text-center mb-5">
                  <h6>{member.name}</h6>
                  <p>{member.email}</p>
                  <h6>{member.country}</h6>
                  <h6>{member.langguage}</h6>
                  <div
                    className="btn-group mb-4"
                    role="group"
                    aria-label="Basic example"
                  >
                    <NavLink to={`/UpdateMember/${member._id}`}>
                    <button type="button" className="btn btn-warning">
                    <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    </NavLink>
                    <button 
                    onClick={() => {
                      handleDelete(member._id);
                      // toast.error("Data Delete successfully");
                      console.log(member._id);
                    }}
                    type="button" className="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="col-md-3">
            <div className="card ms-2 text-center">
              <h4>Ali Raza</h4>
              <p>hamzazia5550099@gmail.com</p>
              <h4>USA</h4>
              <h4>SPANISH</h4>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-warning">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default GetMembers;
