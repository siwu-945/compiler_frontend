// src/components/CodeOutput.js
import React from 'react';
import AceEditor from "react-ace";

function CodeOutput({ translatedCode }) {
    return (
        <div>
            <h3>Intermediate Representation</h3>
            <AceEditor className={"editor-container"}
               width={"100%"}
               placeholder={"Generated IR code will be displayed here."}
               mode="java"
               theme="github"
               name="UNIQUE_ID_OF_DIV"
               editorProps={{ $blockScrolling: true }}
               value={translatedCode}
               setOptions={{
                   showLineNumbers: true,
                   tabSize: 2,
               }}
            />
        </div>
    );
}

export default CodeOutput;
