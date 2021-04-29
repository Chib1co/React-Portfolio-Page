import React from "react";
import Container from "react-bootstrap/Container";
import Row from "../components/Row";
// import Col from "../components/Col";
import HeaderHero from "../components/HeaderHero";
import Biography from "../components/Biography";
import Bubble from "../components/Animation"


class Aboutme extends React.Component {
    render() {
    return (
    
           
         
<Container fluid className="ml-10">
<Bubble>
            <Row className="header-img">
                <HeaderHero backgroundImage= {'/images/surf-me.jpg'}/>
                
            </Row>

            

             <Biography />
        
             </Bubble>
</Container>       

   

    )}
};

export default Aboutme;