import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
      // Props to send to ChatEngine
      // how much height you want the chat app to take up on your website
        height="100vh"
        projectID="21da8f0c-140b-4308-a032-9e8aefcf52bc"
        userName="john"
        userSecret="qwerty"
        renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps } />}
        onNewMessage = { () => new Audio(`https://chat-engine-assets.s3.amazonaws.com/click.mp3`) }
      />
    </div>
  );
}

export default App;
