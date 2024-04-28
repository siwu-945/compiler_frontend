// src/App.js
import React, { useState } from 'react';
import CodeInputForm from './compoents/SourceCodeInput';
import CodeOutput from './compoents/IROutput';
import Header from './compoents/Header';
import './styles/App.css';
import axios from "axios";

function App() {
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');

  const takeInputCode = async () => {
    try {
        const response = await axios.post(process.env.REACT_APP_server+'input', { input: input });
        setOutput(response.data.translatedCode);
    } catch (error) {
        console.error('Error translating code:', error);
        setOutput('Error translating code.');
    }
  }

  const examples = {
    example1: "    "
  }

  const loadFileContent = async (fileName) =>{
      try{
          const response = await fetch(fileName);
          const content = await response.text();
          setInput(content);
      }catch(error){
          console.error('Error loading file content:', error);
      }
  }

    return (
        <div className="App">
            <Header />
            <div className={"load-files"}>
                <button onClick={() => loadFileContent('example1.txt')}>Source Code Example 1</button>
                <button onClick={() => loadFileContent('example2.txt')}>Source Code Example 2</button>
                <button onClick={() => loadFileContent('failedExample1.txt')}>Failed Code Example 1</button>
                <button onClick={() => loadFileContent('failedExample2.txt')}>Failed Code Example 2</button>
            </div>
            <div className="content">
                <div className="code-box">
                    <CodeInputForm exampleInput={input} onCodeChange={setInput} />
                </div>
                <div className="code-box">
                    <CodeOutput translatedCode={output} />
                </div>
            </div>
            <div className="button-container">
                <button onClick={() => takeInputCode()}>Translate Code</button>
            </div>
        </div>
    );
}

export default App;
