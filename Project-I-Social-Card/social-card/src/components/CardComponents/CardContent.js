import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContent = () => {
    return (
        <div>
            <CardBanner />
            <p>
                React makes it painless to create interactive UIs, Design simple views for
                each state in your application.
            </p>
        </div>
    );
  };

export default CardContent;