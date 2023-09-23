function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            GoT
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container py-5">
          <h1 className="display-5 fw-bold">React Game of Thrones</h1>
          <p className="col-md-8 fs-4">Learning React Components</p>
        </div>
      </div>
    </div>
  );
}

export default Header; // module.exports = Header
