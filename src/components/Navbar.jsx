const Navbar = ({ setCategory, theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar navbar-expand-lg">
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
          <div className="nav-item nav-link" onClick={() => setCategory("technology")}>Technology</div>
          <div className="nav-item nav-link" onClick={() => setCategory("business")}>Business</div>
          <div className="nav-item nav-link" onClick={() => setCategory("health")}>Health</div>
          <div className="nav-item nav-link" onClick={() => setCategory("sports")}>Sports</div>
          <div className="nav-item nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
        </div>
        <button className="btn btn-outline-primary ml-auto" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
