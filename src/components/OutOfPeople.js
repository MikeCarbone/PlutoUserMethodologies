import React from 'react';

const People = (props) => {
    const blankCount = props.totalCount - props.highlightedCount;
    const peoples = [];

    for (let i = 0; i < props.highlightedCount; i++){
        peoples.push(
            <svg key={i} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="male" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill={props.color} d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"></path></svg>
        )
    }

    for (let i = 0; i < blankCount; i++){
        peoples.push(
            <svg key={i + props.highlightedCount} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="male" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="none" stroke={props.color} strokeWidth={props.strokeWidth} d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"></path></svg>
        )
    }

    return (
        <div className={`persons ${props.className}`}>
            {peoples}
        </div>
    );
};

export default People;
