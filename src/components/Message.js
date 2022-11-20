import React from 'react';
import PlanetSVG from '../assets/planet.svg';
import classes from './Message.module.css';

const Message = props => {
  return (
    <div className={classes.message}>
      <img
        draggable='false'
        onContextMenu={e => e.preventDefault()}
        className={classes.message__image}
        src={PlanetSVG}
        alt='planet'
      />
      <p className={classes.message__text}>{props.messageText}</p>
    </div>
  );
};

export default Message;
