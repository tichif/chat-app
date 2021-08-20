import { ChatEngine } from 'react-chat-engine';

import './styles.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID={process.env.REACT_APP_ENGINE_PROJECT_ID}
      userName='Tichif'
      userSecret='12345'
      renderChatFeed={(chatProps) => <ChatFeed {...chatProps} />}
    />
  );
};

export default App;
