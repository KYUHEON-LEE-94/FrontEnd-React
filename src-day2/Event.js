import { render } from '@testing-library/react';
import React, {Component} from 'react';

export default class Event extends Component {
  render(){
      return (
      <div>
        <h1>Event</h1>
        <button onClick={function(){alert('Hi')}}></button>
      </div>
    );

  }
}


