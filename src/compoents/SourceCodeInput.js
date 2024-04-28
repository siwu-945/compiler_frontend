import React, {useEffect, useState} from 'react';
import AceEditor from 'react-ace'
import 'ace-builds/src-min-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';


function CodeInputForm({ exampleInput, onCodeChange}) {
    const [input, setInput] = useState('');

    useEffect(() => {
        setInput(exampleInput);
    }, [exampleInput]);

    const handleCodeChange = (newCode) => {
        onCodeChange(newCode);
    }

    return (
        <div>
            <h3>Enter Source Code Here</h3>
            <AceEditor className={"editor-container"}
                       width={"100%"}
                placeholder={"Type your source code here"}
                mode="java"
                theme="github"
                onChange={handleCodeChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                value={input}
                setOptions={{
                    showLineNumbers: true,
                    tabSize: 2,
                }}
            />
        </div>
    );
}

export default CodeInputForm;
