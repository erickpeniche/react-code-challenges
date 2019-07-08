import React from "react";

const Instructions = () => (
  <div className="section">
    <div className="container">
      <div class="notification is-warning">
        Demonstrate your React knowledge and skills by solving the next React
        challenge
        <br />
        <br />
        <strong>Instructions:</strong>
        <br />
        The <code>&lt;MyForm&gt;</code> component below, contains 2{" "}
        <code>&lt;input&gt;</code> fields and 1 submit button. The goal of this
        challenge is to{" "}
        <strong>
          make the submit button enabled by satisfying BOTH of the following
          conditions:
        </strong>
        <br />
        <br />
        <div className="content">
          <ol type="1">
            <li>
              The name input field must contain{" "}
              <strong>at least 3 characters</strong>.
            </li>
            <li>
              The email must contain a valid email address. There is a helper
              function named <code>validateEmail()</code> inside the file{" "}
              <code>validators.js</code> that you can use to validate the email
              string. This function expects a string as the only parameter and
              will return <code>true</code> or <code>false</code> as the
              validation result.
            </li>
          </ol>
        </div>
        <br />
        Only when both of the above conditions are met, the submit button should
        be enabled. For any other case or scenario, the button should remain
        DISABLED.
      </div>
    </div>
  </div>
);

export default Instructions;
