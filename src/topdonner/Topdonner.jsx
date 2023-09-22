import React from 'react'
import './topdonner.css'
import dImg from "./donner.jpg"


export default function Topdonner() {
  return (
    <div className="donner">
      <h1 className="donnertitle">Top Donner</h1>
        <p>There are many variations of azer duskam of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
      <hr/>
      <div className="row">
        <div className="col-md-3">
          <div class="card" >
              <img src={dImg} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h2>this is title</h2>
                  </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" >
              <img src={dImg} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h2>this is title</h2>
                  </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" >
              <img src={dImg} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h2>this is title</h2>
                  </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" >
              <img src={dImg} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h2>this is title</h2>
                  </div>
          </div>
        </div>
      </div>

    </div>
  )
}
