// src/App.js
import React, { useState } from 'react';
import CodeInputForm from './compoents/SourceCodeInput';
import CodeOutput from './compoents/IROutput';
import Header from './compoents/Header';
import './styles/App.css';
import axios from "axios";

function App() {
  const [output, setOutput] = useState('');

  const translateCode = async (code) => {
      try {
          const response = await axios.get(process.env.REACT_APP_server+'output', { code });
          setOutput(response.data);
      } catch (error) {
          console.error('Error translating code:', error);
          setOutput('Error translating code.');
      }
  };

    return (
        <div className="App">
            <Header />
            <div className="content">
                <div className="code-box">
                    <CodeInputForm onSubmit={translateCode} />
                </div>
                <div className="code-box">
                    <CodeOutput translatedCode={output} />
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => translateCode()}>Translate Code</button>
            </div>
        </div>
    );
}

export default App;
