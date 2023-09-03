import { NavLink } from 'react-router-dom';
import logo from '../utilities/logo.png';

function Navbar() {
  return (
    <div className="navbar navbar-light bg-light" id="fixed-nav">
      <div className="container">
        <div className="d-flex gap-4 align-items-center">
          <img style={{ width: '50px' }} src={logo} alt="" />
          <h4>Space Traveler Hub</h4>
        </div>
        <div className="d-flex gap-4 links-container">
          <NavLink to="/rockets">
            Rockets
          </NavLink>
          <NavLink to="/missions">
            Missions
          </NavLink>
          <span>| </span>
          <NavLink to="myprofile">
            My profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
