import { auth } from '../../../config/firebase';
import { useAuth } from '../../homepage/auth';

import { ChatScreen } from "./chatscreen";
import { ChatInput } from "./chatinput";

import { useDataBase } from '../../homepage/database';

export function Chat() {
  const { chats } = useDataBase()
  const { room } = useAuth();

  return (
    <div className="chat">
      <MainHeader></MainHeader>
      {chats && <div>
        <ChatScreen room = {room}></ChatScreen>
        <ChatInput room = {room}></ChatInput>
      </div>}
    </div>
  );
}

function MainHeader() {
  return (
    <div className="main-header">
      Your chatting with ... {auth.currentUser?.displayName}
    </div>
  );
}