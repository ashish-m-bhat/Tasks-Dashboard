import React from 'react';
import cssClasses from './Card.module.css';

const Card = ({className, children}) => {
  return (
    <div className={`${cssClasses.Card} ${className}`}>
        {children}
    </div>
  )
}

export default Card;