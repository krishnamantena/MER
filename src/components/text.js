import React, { useState } from 'react';

const EmotionPrediction = () => {
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/ter/predict-emotion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: inputText }),
            });

            const data = await response.json();
            setResult(`Predicted Emotion: ${data}`);
        } catch (error) {
            console.error('Error:', error);
            setResult('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <section id="header">
        <div className="header container">
          <div className="nav-bar">
            <div className="brand">
              <a href="#hero">
                <h1>AJK&CO</h1>
              </a>
            </div>
            <div className="nav-list">
              <div className="hamburger">
                <div className="bar"></div>
              </div>
              <ul>
                <li><a href="/" data-after="Home">Home</a></li>
                <li><a href="#services" data-after="Service">Services</a></li>
                <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#contact" data-after="Contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
      </section>
        <div style={styles.main}>
        <div style={styles.container}>
            <h1>Emotion Prediction</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter your text here..."
                    style={styles.textarea}
                    required
                ></textarea>
                <br />
                <button type="submit" style={styles.button}>
                    Predict Emotion
                </button>
            </form>
            {result && <div style={styles.result}>{result}</div>}
        </div>
        </div>
        </div>
    );
};

const styles = {
    main: {
        paddingTop: "200px",
        paddingButtom: "20px",
        paddingRight: "20px",
        paddingLeft: "20px",
    },
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f2f2f2',
        display: 'contents',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        flexDirection: 'column',
        
        padding: "20px",
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    textarea: {
        width: 'calc(60% - 20px)',
        height: '150px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        resize: 'vertical',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '20px',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    result: {
        marginTop: '20px',
        padding: '10px',
        borderRadius: '4px',
        backgroundColor: '#e9ecef',
        border: '1px solid #ddd',
    },
};

export default EmotionPrediction;
