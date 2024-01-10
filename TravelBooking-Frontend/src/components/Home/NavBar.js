import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">
          Travel Booking
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signUp">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Modal
                trigger={<Button>Login</Button>}
                header="Reminder!"
                content="Call Ben jamin regarding the reports."
                actions={[
                  "Snooze",
                  { key: "done", content: "Done", positive: true },
                ]}
              />
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
