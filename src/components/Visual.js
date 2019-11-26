import React from 'react';
import RunOnceWhenVisible from './RunOnceWhenVisible';
import TrackVisibility from 'react-on-screen';
import Effect from 'react-reveal/Fade';

const CoolVisual = (props) => (
    <div className={props.className}>
        <Effect>
            <TrackVisibility>
                <RunOnceWhenVisible>
                    {props.children}
                </RunOnceWhenVisible>
            </TrackVisibility>
        </Effect>
    </div>
);

export default CoolVisual;