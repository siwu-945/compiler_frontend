// src/components/CodeOutput.js
import React from 'react';

function CodeOutput({ translatedCode }) {
    return (
        <div>
            <h3>Intermediate Representation</h3>
            <textarea
                value={translatedCode}
                placeholder="Generated IR code will be displayed here."
                rows={10}
                cols={50}
            />
        </div>
    );
}

export default CodeOutput;
