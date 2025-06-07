import React, { useState, useRef } from 'react';
import "./style.css"
import { MediaRecorder, register } from 'https://cdn.skypack.dev/extendable-media-recorder';
import { connect } from 'https://cdn.skypack.dev/extendable-media-recorder-wav-encoder';

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const [response, setResponse] = useState('');
    const [text, setText] = useState('');
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    // Register the WAV encoder
    const initialize = async () => {
        try {
            await register(await connect());
        } catch (error) {
            console.error('Failed to initialize encoder:', error);
        }
    };

    React.useEffect(() => {
        initialize();
    }, []);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioChunksRef.current = [];
            
            mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'audio/wav' });

            mediaRecorderRef.current.ondataavailable = event => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioUrl(audioUrl);

                const formData = new FormData();
                formData.append('file', audioBlob, 'recording.wav');

                try {
                    const response = await fetch('http://localhost:8000/ser/save-audio', {
                        method: 'POST',
                        body: formData,
                    });
                    
                    const result = await response.json();
                    setResponse(JSON.stringify(result, null, 2));
                    
                } catch (error) {
                    console.error('Error:', error);
                    setResponse('An error occurred while sending the audio.');
                }

                try {
                    const response = await fetch('http://localhost:8000/ser/get-text', {
                        method: 'GET'
                    });
                    
                    const result = await response.json();
                    setText(JSON.stringify(result, null, 2));
                    
                } catch (error) {
                    console.error('Error:', error);
                    setResponse('An error occurred while sending the audio.');
                }

                audioChunksRef.current = [];
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Error accessing audio stream:', error);
            setResponse('An error occurred while accessing the audio stream.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }
        setIsRecording(false);
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
    
        <div style={styles.container}>
            <h1 style={styles.heading}>Audio Recorder</h1>
            <button onClick={startRecording} style={styles.button} disabled={isRecording}>
                Record
            </button>
            <button onClick={stopRecording} style={styles.button} disabled={!isRecording}>
                Stop
            </button>
            {audioUrl && <audio src={audioUrl} controls style={styles.audio}></audio>}
            {response && <div style={styles.response}>{response}</div>}
            {text && <div style={styles.text}>{text}</div>}
        </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Helvetica, sans-serif',
        background: 'rgb(26, 188, 156)',
        background: '-moz-linear-gradient(-45deg, rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%)',
        background: '-webkit-linear-gradient(-45deg, rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%)',
        background: 'linear-gradient(135deg, rgba(26, 188, 156, 1) 0%, rgba(142, 68, 173, 1) 100%)',
        color: '#333',
        
        textAlign: 'center',
        paddingTop: "200px",
        paddingButtom: "20px",
        paddingRight: "20px",
        paddingLeft: "20px",
    },
    heading: {
        color: '#4CAF50',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
        disabled: {
            backgroundColor: '#ccc',
            cursor: 'not-allowed',
        },
    },
    audio: {
        marginTop: '20px',
        width: '100%',
        maxWidth: '600px',
    },
    response: {
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#fff',
        color: '#333',
        maxWidth: '600px',
        display: 'inline-block',
        wordWrap: 'break-word',
    },
    text: {
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#fff',
        color: '#333',
        maxWidth: '600px',
        display: 'inline-block',
        wordWrap: 'break-word',
    },
};

export default AudioRecorder;
