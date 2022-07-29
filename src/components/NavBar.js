import React from "react";  
import { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img className="tl-logo" src="data:image/png;base64,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"/>
            <a className="navbar-brand" href="#">TL News</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Technology<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/science">Science<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/national">National<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                        
            </div>
        </nav>
    </div>
    )
  }
}

export default NavBar;