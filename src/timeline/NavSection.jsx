import React from 'react'
import './output.css'

export default function NavSection(props) {

    // href={`#section${props.year}`
    // onClick={() => document.getElementById("section" + props.year).scrollIntoView()}

    return (
        <li role="presentation" >
        <a className="anchor" onClick={() => document.getElementById("section" + props.year).scrollIntoView()}>
          <span className="nav__counter">{props.year}</span>
          <h3 className="nav__title">Intro</h3>
          <p className="nav__body">
            <strong>Timeline-style navigation</strong>. Scroll down to see
            what happens, or click on a number in the nav.
          </p>
        </a>
      </li>
    )
}
