import React from "react";
import {
  Checkbox,
  Segment,
  Input,
  Button,
  Header,
  GridRow,
  GridColumn,
  Grid,
} from "semantic-ui-react";
import AccordionExampleStyled from "./Accordian";

function Home() {
  return (
    <div>
      <Header>
        <div className="jumbotron ">
          <h1 className="display-5">
            Millions of cheap flights. One simple search.
          </h1>
          <button className="lead btn btn-primary">Flights</button>
          <div className="">
            <Segment inverted>
              <Input placeholder="From" />
              <Input placeholder="To" />
              <Input placeholder="Depart" type="date" />
              <Input placeholder="Return" type="date" />
              <Input placeholder="Travellers" />
              <Button>search</Button>
            </Segment>
          </div>
          <p className="lead">
            <Checkbox></Checkbox>
            Direct Flight
          </p>
        </div>
        <br />
      </Header>
      <div>
        <Grid columns="equal" className="container">
          <GridRow>
            <GridColumn>
              <Segment inverted>Explore EveryWhere</Segment>
            </GridColumn>
            <GridColumn>
              <Segment inverted>Let us Inspire by your next trip</Segment>
            </GridColumn>
            <GridColumn>
              <Segment inverted>Hotels</Segment>
            </GridColumn>
            <GridColumn>
              <Segment inverted>Car Hire</Segment>
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
      <br /> <br />
      <div className="jumbotron container">
        <h1 className="display-4">See where your imagination takes you</h1>
        <p className="lead">
          Need inspiration? Our new search tool will surprise you with
          destinations and hidden gems.
        </p>

        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
      <section className="container">
        <h4>The most popular flights right now</h4>
        <div>
          <p>
            Other travellers are loving these destinations. Search and compare
            flights, hotels, and car hire and join them on the adventure.
          </p>
          <br />
        </div>
      </section>
      <div className="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container" style={{ display: "flex" }}>
        <AccordionExampleStyled />
        <AccordionExampleStyled />
      </div>
      <br />
      <br />
      <div className="footer">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Fluid jumbotron</h1>
            <p class="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
