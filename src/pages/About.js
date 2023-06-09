import React, { Component } from 'react';
import "./About.css";
import ProfilePicture from "../assets/ProfilePictureCropped.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img className="profile_image"
             src={ProfilePicture}
             alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jah're Parker</div>
            <div className="brief_description">
              <p>
                Hello! My name is Jah're Parker and I am a Junior currently attending North Carolina A&T
                State University. I was born and raised in North Carolina here in the USA. On the technical
                side, I enjoy learning about backend development, DevOps, and extended reality. My interest
                revolve about mechanical keyboards, longboarding, video games, and the journey of self development!
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}