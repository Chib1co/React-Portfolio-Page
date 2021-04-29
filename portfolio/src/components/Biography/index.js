import React from "react";
import"./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';



const rowStyle = {
    marginLeft:'30px',
    marginRight:'30px'
}

export default function Biography(props) {
    return (

<Row className="first-row" style={rowStyle}>
     <Col lg="6" className="fade" id="photo-fadein">
         <Row id="subrow-image">
             <Col size="col-12" id="subcol-image">
                 <img src="/images/portlait4.jpg" alt="this is me" className="mx-auto img-thumbnail float-left" id="myphoto"></img>
             </Col>
         </Row>
         <Row size="mx-auto ml-lg-0" id="links">
             <Col size="col-12 pl-lg-0" id="subcol-links">
                 <div className="link" id="email"><a className="linkhref" href="mailto:xxxxxxxx@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelopeSquare} link="true" /> xxxxxxx@gmail.com</a></div>
                 <div className="link" id="phone"><a className="linkhref" href="tell:0123456789" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faPhone } link="true" /> 0123456789</a></div>
                 <div className="link" id="github-link"><a className="linkhref" href="https://github.com/Chib1co" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={ faGithubSquare } link="true" /> Git hub page</a></div>
                 <div className="link" id="linkedin-link"><a className="linkhref" href="https://www.linkedin.com/in/tomomi-inoue-730ab71ab/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} link="true" /> Linkedin page</a></div>
                 <div className="link" id="resume"><a className="linkhref" href="/images/Resume.pdf" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFile} link="true" /> Resume (pdf file)</a></div>

             </Col>
         </Row>
     </Col>



 <Col sm="12" md="12" lg="6" className="fade" id="bio-fadein">
     <Row id="who-i-am">
         <Col id="about-me">
             <h4>Who I am</h4>
             <p className="bio-paragragh">Born and raised in Japan. Spent early 20’s as a competition snowboarder. Moved to Canada 2010 for snowboard training and realised the difference in the lifestyle between Japan and Western culture, and decided to travel around the world. 2011-2015, travelled over 10 countries, lived and worked in a few countries including USA, Mexico, Costa Rica as a chef. 2016 moved to Australia, decided to call here home. </p>
         </Col>
         
             <Row id="bio-purpose">
                 <Col id="purpose">
                     <h4>Purpose from this course</h4>
                     <p className="bio-paragragh">I have no background in computer technology. I was working as a chef for the last 10 years. This is a big career changing. Why was I interested in becoming a web developer? Simply, I
                     was interested in how all the data works in this digital world. I tried basic html when I was in school, and always remembered that I quite enjoyed it. Also, I am very interested in how physical health and mental health connect each other. I could have studied those subjects, of course. But I would rather choose to become a programmer and help people to build web sites or/and apps to support mental health, physical health. This is my ultimate goal as a web developer. And the experience working as a chef in a busy, multitasking, demanding industry, also studied my second language from my mid 20’s,  I believe it is my strength to keep challenging hard to a goal.</p>
                 </Col>
             </Row>
         
     </Row>
 </Col>
</Row>


    );
};