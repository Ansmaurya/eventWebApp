import React from "react";
import img from './landing.jpg'

function EventDetails() {
  return (
    <div class="card mb-3" style={{margin:20}}>
      <img src={img} class="card-img-top" alt="..." style={{height:350}}/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}

export default EventDetails;
