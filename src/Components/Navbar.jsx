import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark px-4 px-lg-5 py-4 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3" />
              Tourist
            </h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/services" className="nav-item nav-link">
                Services
              </Link>
              <Link to="/packages" className="nav-item nav-link">
                Packages
              </Link>
              <div className="nav-item dropdown">
                <Link to="/destination" className="nav-item nav-link">
                  Destination
                </Link>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <Link
              to="/register"
              className="btn btn-primary rounded-pill py-2 px-4"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
};
