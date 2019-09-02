import React, { Component, Fragment } from "react";
import EventListitem from "./EventListitem";

class EventList extends Component {
  render() {
    const { events, selectedEvent, deleteEvent } = this.props;
    return (
      <Fragment>
        {events.map(event => (
          <EventListitem
            key={event.id}
            event={event}
            selectedEvent={selectedEvent}
            deleteEvent ={deleteEvent}
          />
        ))}
      </Fragment>
    );
  }
}

export default EventList;
