import React, { Component } from "react";

class MyForm extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-three-quarters box">
              <form onChange={() => {}}>
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input" id="name" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input class="input" type="email" />
                  </div>
                </div>
                <div class="control">
                  <input
                    class="button is-danger"
                    type="submit"
                    value="Submit"
                    disabled
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MyForm;
