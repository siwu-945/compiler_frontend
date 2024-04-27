// src/components/CodeInputForm.js
import React, { useState } from 'react';

function CodeInputForm({ onSubmit }) {
    const [code, setCode] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(code);
    };

    return (
        <form onSubmit={handleSubmit}>
      <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Type your C code here"
          rows={10}
          cols={50}
      />
            <button type="submit">Translate Code</button>
        </form>
    );
}

export default CodeInputForm;
