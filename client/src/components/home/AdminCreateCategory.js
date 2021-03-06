import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../misc/ErrorMessage";
function AdminCreateCategory() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [catgName, setCatgName] = useState("");

  let navigate = useNavigate();

  async function logout() {
    await Axios.get("http://localhost:5000/auth/logOut");
    navigate("/");
  }

  async function saveProduct(e) {
    e.preventDefault();

    const categoryData = {
      catgname: catgName,

      // merchant: merchant,
    };

    try {
      await Axios.post("http://localhost:5000/category/", categoryData);
      alert("Saved Successfully");
    } catch (err) {
      console.log(err);
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
      }

      return;
    }
    alert("created successfully");
    // logout();
    navigate("/adminDashboard");

    console.log(document.cookie);
    // await getMerchant();
  }

  return (
    <div>
      <div>
        <div className="sub_page">
          <div className="hero_area">
            {/* header section starts */}
            <header className="header_section">
              <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <a className="navbar-brand" href="index.html">
                    <img width={250} src="../../images/logo.png" alt="" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  ></button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/adminDashboard">
                          HOME
                          {/* <span className="sr-only">(current)</span> */}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="" className="nav-link">
                          Shop
                          {/* <span className="sr-only">(current)</span> */}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/createAdminContact">
                          CONTACT
                        </Link>
                        {/* <span className="sr-only">(current)</span> */}
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Admin
                          {/* <span className="sr-only">(current)</span> */}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" onClick={logout}>
                          Logout
                          {/* <span className="sr-only">(current)</span> */}
                        </a>
                      </li>

                      {/* <span className="sr-only">(current)</span> */}
                      {/* </a> */}
                      {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <li>
                          <a href="testimonial.html">CONTACT</a>
                        </li>
                        <span className="nav-label">
                          SHOP <span className="caret" />
                        </span> */}
                      {/* </a> */}

                      {/* <ul className="dropdown-menu">
                        <li>
                          <a href="testimonial.html">CONTACT</a>
                        </li>
                      </ul> */}

                      <form className="form-inline">
                        <button
                          className="btn  my-2 my-sm-0 nav_search-btn"
                          type="submit"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </button>
                      </form>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
            {/* end header section */}
          </div>
          {/* inner page section */}
          <section className="inner_page_head">
            <div className="container_fuild">
              <div className="row">
                <div className="col-md-8">
                  <div className="full">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="/admincreateCategory">
                            Create Category{" "}
                            <span className="sr-only">(current)</span>
                          </Link>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="">
                            <span className="sr-only">(current)</span>
                          </Link>
                        </li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="">
                            <span className="sr-only">(current)</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end inner page section */}
          {/* why section */}
          <section className="why_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="full">
                    {errorMessage && (
                      <ErrorMessage
                        message={errorMessage}
                        clear={() => setErrorMessage(null)}
                      />
                    )}
                    <form
                      className="form"
                      id="form"
                      onSubmit={saveProduct}
                      encType="multipart/form-data"
                    >
                      {/* <fieldset> */}
                      <label htmlFor="form-catg">Category Name</label>

                      <input
                        value={catgName}
                        id="form-catg"
                        type="text"
                        placeholder="Enter Category"
                        onChange={(e) => setCatgName(e.target.value)}
                      />
                      {/* <select>
                        <option value="Fresh Produce">Grapefruit</option>
                        <option value="Meat">Lime</option>
                        <option selected value="coconut">
                          Coconut
                        </option>
                        <option value="mango">Mango</option>
                      </select> */}

                      <button className="btn btn-info" type="submit">
                        Save Product
                      </button>

                      {/* <Link
                          className="btn-edit"
                          type="button"
                          to="/updateMerchant"
                          onClick={() => saveGrocery}
                        >
                          Save Grocery
                        </Link> */}
                      {/* <input type="submit" value="Update" /> */}
                      {/* </fieldset> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end why section */}
          {/* arrival section */}

          {/* footer section */}
          <footer className="footer_section">
            <div className="container">
              <div className="footer-info">
                <div className="col-lg-7 mx-auto px-0">
                  <p>
                    ?? <span id="displayYear" /> All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                    <br />
                    Distributed By{" "}
                    <a href="https://themewagon.com/" target="_blank">
                      ThemeWagon
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateCategory;
