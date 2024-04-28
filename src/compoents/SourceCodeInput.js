// src/components/CodeInputForm.js
import React, {useEffect, useState} from 'react';

function CodeInputForm({ exampleInput, onCodeChange}) {
    const [input, setInput] = useState('');

    useEffect(() => {
        setInput(exampleInput);
    }, [exampleInput]);

    return (
      <div>
          <h3>Enter Source Code Here</h3>
          <form>
              <textarea
              value={input}
              onChange={(e) => {
                  setInput(e.target.value);
                  onCodeChange(e.target.value);
              }}
              placeholder="Type your C code here"
              rows={10}
              cols={50}
          />
          </form>
      </div>
    );
}

export default CodeInputForm;
