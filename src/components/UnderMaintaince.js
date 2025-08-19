import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const App = () => {
  return (
    <section
      aria-label="Under Maintenance"
      style={{ textAlign: "center", padding: "30px 0" }}
    >
      <div className="container">
        <div style={{ maxWidth: "70rem", margin: "0 auto" }}>
          <DotLottieReact
            src="https://lottie.host/f4b78d97-2c00-4aa9-8c69-e9aabe851e19/mFV5uGc6FJ.lottie"
            loop
            autoplay
          />
        </div>
        <h1>We are currently under maintenance.</h1>
      </div>
    </section>
  );
};

export default App;
