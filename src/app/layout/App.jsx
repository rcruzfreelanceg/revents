import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import Navbar from "../../features/NavBar/Navbar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
