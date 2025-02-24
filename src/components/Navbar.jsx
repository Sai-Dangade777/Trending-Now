import "./Navbar.css"; // Import CSS file for styling

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <span className="badge bg-light text-dark fs-5">Trending Now</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <div className="nav-item nav-link nav-hover" onClick={() => setCategory("technology")}>Technology</div>
          <div className="nav-item nav-link nav-hover" onClick={() => setCategory("business")}>Business</div>
          <div className="nav-item nav-link nav-hover" onClick={() => setCategory("health")}>Health</div>
          <div className="nav-item nav-link nav-hover" onClick={() => setCategory("sports")}>Sports</div>
          <div className="nav-item nav-link nav-hover" onClick={() => setCategory("entertainment")}>Entertainment</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
