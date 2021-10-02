import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        {user &&
        (<ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/forest">
              FOREST
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/wild-life">
              WILD LIFE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              BLOG
            </Link>
          </li>
        </ul>)}
      </div>
      <div className="topRight">
        <ul className="topList">
        {user ? (
          <li className="topListItem" onClick={handleLogout}>
            LOGOUT
          </li>
        ) : (
          <>
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </>
        )}
        </ul>
      </div>
    </div>
  );
}
