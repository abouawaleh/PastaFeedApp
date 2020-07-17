import React, { Component } from 'react';
import {
  Button, Card, CardTitle, CardText, CardImg, Container, Col, Row, Form, FormGroup, Label, Input, Jumbotron, Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledCollapse
} from 'reactstrap';
import spaghetti from './images/spaghetti.jpg'
import penne from './images/penne.jpg'
import chicken_spaghetti from './images/chicken_spaghetti.jpeg'
import zucchini_spaghetti from './images/zucchini_spaghetti.jpeg'


class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            PastaFeed
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">Home</NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">About</NavLink>
            </NavItem>
            <NavItem className="d-flex align-items-center">
              <NavLink className="font-weight-bold" href="/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Jumbotron>
          <h1>Pastas</h1>
          <p>Here are a list of pastas...</p>
        </Jumbotron>
        <Container>
          <Row xs="2">
            <Col><img src={spaghetti} alt="Spaghetti"></img></Col>
            <Col>
              <p>Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals. Italian spaghetti is typically made from durum wheat semolina. Usually the pasta is white because refined flour is used, but whole wheat flour may be added. Spaghettoni is a thicker form of spaghetti, while capellini is a very thin spaghetti.</p>
              <Button id="toggler" style={{ marginBottom: '1rem' }}>Learn more</Button>
            </Col>
            <Col xs="12" >
              <UncontrolledCollapse toggler="#toggler">
              <Container>
                <h3>Similar recipes</h3>
                <Card body>
                  <CardImg src={chicken_spaghetti}></CardImg>
                  <CardTitle>Chicken Spaghetti</CardTitle>
                  <CardText>Total Time: 1hr 40min</CardText>
                  <Button>Explore</Button>
                </Card>
                <Card body>
                  <CardImg src={zucchini_spaghetti}></CardImg>
                  <CardTitle>Zucchini Spaghetti</CardTitle>
                  <CardText>Total Time: 20min</CardText>
                  <Button>Explore</Button>
                </Card>
              </Container>
              </UncontrolledCollapse>              
            </Col>
            <Col><img src={penne} alt="Penne"></img></Col>
            <Col>
              <p>Pennec is an extruded type of pasta with cylinder-shaped pieces, their ends cut at a bias. Penne is the plural form of the Italian penna (meaning feather but pen as well), deriving from Latin penna (meaning "feather" or "quill"), and is a cognate of the English word pen. When this format was created, it was intended to imitate the then-ubiquitous fountain pen's steel nibs.</p>
              <Button>Learn more</Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <br></br>
          <h3>Order Here</h3>
          <Form>            
            <p><strong>Choose Pasta</strong></p>
            <FormGroup check>
              <Input type="checkbox" name="check" id="exampleCheck"/>
              <Label for="exampleCheck" check>Spaghetti</Label>
            </FormGroup>      
            <FormGroup check>
              <Input type="checkbox" name="check" id="exampleCheck"/>
              <Label for="exampleCheck" check>Penne</Label>
            </FormGroup>
            <br></br>
            <p><strong>Information</strong></p>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFirst">First Name</Label>
              <Input type="first" name="first" id="exampleFirst" placeholder="First Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleLast">Last Name</Label>
              <Input type="last" name="last" id="exampleLast" placeholder="Last Name" />
            </FormGroup>
            <br></br>
            <p><strong>Payment Method</strong></p>
            <FormGroup>
              <Label for="exampleEmail">Card Number</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Card Number" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFirst">Expiry Date</Label>
              <Input type="first" name="first" id="exampleFirst" placeholder="Expiry Date" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleLast">CCV</Label>
              <Input type="last" name="last" id="exampleLast" placeholder="CCV" />
            </FormGroup>
          </Form>
        </Container>        
      </div>
    );
  }  
}

export default App;
