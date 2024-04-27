// src/components/CodeOutput.js
import React from 'react';

function CodeOutput({ translatedCode }) {
    return (
        <div>
            <h3>Processed Output</h3>
            <pre>{translatedCode}</pre>
        </div>
    );
}

export default CodeOutput;
