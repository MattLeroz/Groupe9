import React, { useState } from 'react';
import axios from 'axios';
import './ChatComponent.css';
const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      // 
      // 
      try {
        const response = await axios.post('/api/chat', {prompt: input,
          max_tokens: 150,
        })
        setResponses([...responses, response.data]);
        setInput('');
      } catch (error) {
        console.error('Erreur lors de la récupération de la réponse :', error);
      }
    }
  };
  return (
    <div className="chat-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Posez votre question..."
          className="chat-input"
        />
        <button type="submit" className="send-button">Envoyer</button>
      </form>
      <div className="responses">
        {responses.map((res, index) => (
          <div key={index} className="response">{res}</div>
        ))}
      </div>
    </div>
  );
};
export default ChatComponent;
