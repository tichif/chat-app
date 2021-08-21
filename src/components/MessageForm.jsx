import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
      setValue('');
    }
  };

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='message-input'
        placeholder='Send a Message'
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default MessageForm;
