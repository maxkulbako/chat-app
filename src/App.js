import {Chat, Sidebar} from '../src/components'

export default function App() {
  return (
    <div className="chat_container">
      <Sidebar className="sidebar"/>
      <Chat className="chat_wrapper"/>
    </div>
  );
}