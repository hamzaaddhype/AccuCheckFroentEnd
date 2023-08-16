  import React, { useState } from "react";
  import Swal from "sweetalert2";
  import Joi from "joi-browser";
  const AddProduct = () => {
    const [product, setProduct] = useState({
      title: "",
      id: "",
      description: "",
      points: "",
    });
    const [errors, setErrors] = useState({});
  
    const schema = {
      title: Joi.string().min(3).max(50).required(),
      id: Joi.number().min(0).max(9999).required(),
      description: Joi.string().min(5).max(500).required(),
      points: Joi.number().min(0).max(9999).required(),
    };
  
    const validateProperty = (name, value) => {
      const obj = { [name]: value };
      const subSchema = { [name]: schema[name] };
      const result = Joi.validate(obj, subSchema);
      const { error } = result;
      return error ? error.details[0].message : null;
    };
  
    const handleBlur = (event) => {
      const { name, value } = event.target;
      const error = validateProperty(name, value);
  
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    };
  
    const savebtnhandler = async (e) => {
      e.preventDefault();
      const { title, id, description, points } = product;
  
      if (!title || !id || !description || !points) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please enter all required fields",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      } else {
        Swal.fire("Good job!", "Product added successfully!", "success");
        try {
          const result = await fetch("http://localhost:5000/Admin/addProduct", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const response = await result.json();
          console.log("Product added successfully", response);
        } catch (error) {
          console.error("Error adding product", error);
        }
      }
    };
  
    return (
      <div className="c" id="admin_user">
        <div className="row">
          <div className="col-md-6" id="div_center">
            <div className="row left_padding">
              <div className="row text-center mt-3">
                <h3 className="d-flex fw-bold mb-2 justify-content-center">
                  Add Product
                </h3>
              </div>
              <div className="row">
                <div className="form_body">
                  <form onSubmit={savebtnhandler}>
                    <div className="mb-3">
                      <label htmlFor="name" className="d-flex ms-3 mb-1">
                        Title
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        name="title"
                        type="text"
                        className="form-control inputs_background"
                        id="user_name"
                        value={product.title}
                      />
                      {errors.title && (
                        <div className="alert alert-danger  ">{errors.title}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="d-flex ms-3 mb-1">
                        SKU Number
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={(e) => setProduct({ ...product, id: e.target.value })}
                        name="id"
                        type="number"
                        className="form-control inputs_background"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={product.id}
                      />
                      {errors.sku_number && (
                        <div className="alert alert-danger">{errors.sku_number}</div>
                      )}
                    </div>
                    <br />
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="d-flex ms-3 form-label">
                        Description
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        name="description"
                        type="text"
                        className="form-control inputs_background"
                        id="exampleInputPassword1"
                      />
                      {errors.description && (
                        <div className="alert alert-danger">{errors.description}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="d-flex ms-3 form-label">
                        Points
                      </label>
                      <input
                        onBlur={handleBlur}
                        onChange={(e) => setProduct({ ...product, points: e.target.value })}
                        name="points"
                        type="number"
                        className="form-control inputs_background"
                        id="points"
                      />
                      {errors.points && (
                        <div className="alert alert-danger">{errors.points}</div>
                      )}
                    </div>
                    <br />
                    <div className="">
                      <button
                        className="btn sign-btn_1 sign_btn "
                        type="submit"
                        value="Submit"
                      >
                        Save Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddProduct;
  