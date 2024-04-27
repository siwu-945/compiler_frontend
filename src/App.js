// src/App.js
import React, { useState } from 'react';
import CodeInputForm from './compoents/SourceCodeInput';
import CodeOutput from './compoents/IROutput';
import Header from './compoents/Header';
import './styles/App.css';

function App() {
  const [output, setOutput] = useState('');

  // const translateCode = async (code) => {
  //   try {
  //     const response = await axios.post('/api/translate', { code });
  //     setOutput(response.data.translatedCode);
  //   } catch (error) {
  //     console.error('Error translating code:', error);
  //     setOutput('Error translating code.');
  //   }
  // };

    const translateCode = () => {
        console.log('Translating code:');
    }

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
        </div>
    );
}

export default App;
