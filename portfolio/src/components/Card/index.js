import React from 'react'
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Card(props) {
    return (
        <div className="card shadow">
          <div className="content-hover">
            <img className="card-img-top img-redirect" src={props.img} alt={props.img_alt}/>

          </div>
          <div className="text-block">
            <h4 className="repo-title">{props.title}</h4>
            <p>{props.desc}</p>
          <div className="link-btns">
          <a type="button" id="githubLink" className="btn btn-link" href={props.github} target="blank">Github page<FontAwesomeIcon icon={faChevronRight}/></a>
          <a type="button" id="app-link"className="btn btn-link" href={props.app_link} target="blank">Deployed page<FontAwesomeIcon icon={faChevronRight}/></a>
        </div>
        </div>
      </div>
    )
}
