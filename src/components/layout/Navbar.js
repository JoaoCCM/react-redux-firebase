import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLinks";
import SignOutLink from "./SignOutLinks";

import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignInLink profile ={profile}/> : <SignOutLink />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/dashboard" className="brand-logo">
          Plan App
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
