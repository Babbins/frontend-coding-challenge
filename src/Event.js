import React from 'react';
import moment from 'moment';
import {Panel} from 'react-bootstrap';
export default (props) => {
  const { event } = props;
  console.log(event);
  return (
    <Panel>
      <h1>{event.title}</h1>
      <p>{moment(event.startTime).format('MMMM Do YYYY')}</p>
      <h4>{event.description}</h4>
    </Panel>
  );
}
