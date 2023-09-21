import React from "react";
import img from "./img_1.jpg";
import "./eventPost.css";

function EventPost() {
  return (
    <div
      style={{ marginTop: "100vh", marginLeft: 20, marginRight: 20 }}
      className=" row"
    >
      <div className="col-4">
        <div class="card">
          <div class="card-body">
            <p class="card-text" style={{ margin: 10, fontSize: 20 }}>
              Search
            </p>
            <hr />
            <div class="input-group input-group-sm mb-3">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
              <span class="input-group-text" id="inputGroup-sizing-sm">
                <i class="fa fa-search" aria-hidden="false"></i>
              </span>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <p class="card-text" style={{ margin: 10, fontSize: 20, textTransform:'uppercase' }}>
            Resent Event
          </p>
          <hr />
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={img}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 200 }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={img}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 200 }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={img}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 200 }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 15 }}>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={img}
                  class="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 200 }}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-8">
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img}
                  className="card-img-top img-hover-effect"
                  alt="..."
                  style={{ height: 315 }}
                />
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{ alignSelf: "end" }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img}
                  className="card-img-top img-hover-effect "
                  alt="..."
                  style={{ height: 315 }}
                />
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{ alignSelf: "end" }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img}
                  className="card-img-top img-hover-effect"
                  alt="..."
                  style={{ height: 315 }}
                />
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{ alignSelf: "end" }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" style={{ marginTop: 12 }}>
              <div class="card-body">
                <img
                  src={img}
                  className="card-img-top img-hover-effect"
                  alt="..."
                  style={{ height: 315 }}
                />
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.text below as a natural lead-in to additional
                </p>
                <a
                  href="#"
                  class="btn btn-primary"
                  style={{ alignSelf: "end", flex: 1 }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPost;
