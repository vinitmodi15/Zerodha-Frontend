import React from "react";

function OpenAccount() {
  return (
    <div className=" container p-5 mb-5 text-center">
      <h1 className="mt-3">Open a Zerodha account</h1>
      <p className="text-muted mt-4">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button
        className="p-3 btn btn-primary fs-5 mt-3"
        style={{ width: "20%", margin: "0 auto" }}
      >
        Sign up now{" "}
      </button>
    </div>
  );
}

export default OpenAccount;
