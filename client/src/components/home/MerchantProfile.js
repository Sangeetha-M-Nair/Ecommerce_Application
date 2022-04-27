import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import MerchantContext from "../../context/MerchantContext";

function MerchantProfile() {
  const [merchant, setMerchant] = useState("");

  async function getMerchant() {
    const merchantRes = await Axios.get(
      "http://localhost:5000/authMerchant/merchantProfile"
    );
    setMerchant(merchantRes.data);
  }

  useEffect(() => {
    // if (!merchant) {
    // setMerchant([]);
    // } else {
    getMerchant();
    console.log("merchantprofile merchant   " + merchant.firstname);

    // editUser();
    // }
  }, []);

  let navigate = useNavigate();
  async function logout() {
    await Axios.get("http://localhost:5000/auth/logOut");
    navigate("/");
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
                  <div className="navbar-brand">
                    <img width={250} src="../../images/logo.png" alt="image" />
                  </div>
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
                        <Link className="nav-link" to="/merchantDashboard">
                          HOME
                        </Link>
                        {/* <span className="sr-only">(current)</span> */}
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/merchantContact">
                          CONTACT
                        </Link>
                        {/* <span className="sr-only">(current)</span> */}
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/merchantProfile">
                          Merchant
                        </Link>
                        {/* <span className="sr-only">(current)</span> */}
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
                      {/* </li> */}
                      {/* <li className="nav-item">
                      <a className="nav-link" href="product.html">
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog_list.html">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li> */}
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
          <section className="inner_page_head">
            <div className="container_fuild">
              <div className="row">
                <div className="col-md-8">
                  <div className="full">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                      <ul className="navbar-nav">
                        <li className="nav-item"></li>
                      </ul>
                      <h1 className="navbar-nav">
                        <li className="nav-item">Merchant Profile</li>
                      </h1>
                      <ul className="navbar-nav">
                        <li className="nav-item"></li>
                      </ul>
                      <ul className="navbar-nav">
                        <li className="nav-item"></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* inner page section */}

          <section className="why_section layout_padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="full">
                    <br />
                    <form
                      className="form"
                      id="form"
                      encType="multipart/form-data"
                    >
                      {/* <fieldset> */}
                      <input
                        defaultValue={merchant.shopid}
                        type="text"
                        readOnly={true}
                      />
                      <input
                        defaultValue={merchant.shopname}
                        type="text"
                        readOnly={true}
                      />
                      <input
                        defaultValue={merchant.firstname}
                        type="text"
                        readOnly={true}
                      />
                      <input
                        defaultValue={merchant.lastname}
                        type="text"
                        readOnly={true}
                      />
                      <input
                        defaultValue={merchant.email}
                        type="email"
                        readOnly={true}
                      />

                      <input
                        defaultValue={merchant.mobno}
                        type="text"
                        readOnly={true}
                      />
                      <input
                        defaultValue={merchant.address}
                        type="text"
                        readOnly={true}
                      />
                      <input
                        defaultValue={merchant.street}
                        type="text"
                        readOnly={true}
                      />
                      <input
                        defaultValue={merchant.city}
                        type="text"
                        readOnly={true}
                      />
                      <input
                        defaultValue={merchant.state}
                        type="text"
                        readOnly={true}
                      />
                      <input
                        defaultValue={merchant.zipcode}
                        type="text"
                        readOnly={true}
                      />
                      <Link
                        className="btn btn-primary"
                        type="button"
                        to="/updateMerchant"
                        // onClick={() => }
                      >
                        Update
                      </Link>
                      <br />
                      <Link style={{ color :'red' }} to="/merchangepassword">
                        Change password
                      </Link>

                      {/* <input type="submit" defaultValue="Update" /> */}
                      {/* </fieldset> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* footer section */}
          <footer className="footer_section">
            <div className="container">
              <div className="footer-info">
                <div className="col-lg-7 mx-auto px-0">
                  <p>
                    © <span id="displayYear" /> All Rights Reserved By
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

export default MerchantProfile;
