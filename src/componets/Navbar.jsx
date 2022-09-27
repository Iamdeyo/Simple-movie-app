import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav
        className="navbar navbar-dark"
        style={{ backgroundColor: '#010050' }}
      >
        <div className="container">
          <div className="container-fluid">
            <Link to={'/'} className="navbar-brand mb-0 h1">
              DT Movie App
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
