import './Navbar.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Employee Management System</h1>
      </div>
      <button onClick={onLogout} className="logout-btn">
        Logout
      </button>
    </nav>
  );
};

export default Navbar; 