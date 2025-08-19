import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#f8f9fa",
        padding: "30px 0",
        boxShadow: "-2px 1px 17px 0px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container">
        <img
          src="/assets/LOGO.png"
          alt="Capital Dekho Logo"
          width="200"
          height="34"
        />
      </div>
    </header>
  );
};

export default Header;
