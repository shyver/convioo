import React from 'react'
import Widgets from './Widgets';
import Carousel from './Carousel';
const SwitchCard = (props) => {
  switch (props.active) {
    case 'Widgets':
        return <Widgets/>
    case 'Carousel':
        return <Carousel/>
    default:
        break;
  }
}

export default SwitchCard