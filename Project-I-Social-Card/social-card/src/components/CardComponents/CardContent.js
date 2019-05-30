import React from "react";
import "./Card.css";

export default function CardContent() {
  return (
    <div className="card--content">
      <h4 className="card--title">Get started with React</h4>
      <p className="card--paragraph">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application.
      </p>
      <a className="card--link" href="reactjs.org" target="_blank">
        reactjs.org
      </a>
    </div>
  );
}
