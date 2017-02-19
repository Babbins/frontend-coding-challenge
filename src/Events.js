import React, { Component } from 'react';
import Event from './Event';

export default (props) => {
  return (
    <div>
      {
        props.events.map(event => (
          <Event key={event.id} event={event} />
        ))
      }
    </div>
  );
}
