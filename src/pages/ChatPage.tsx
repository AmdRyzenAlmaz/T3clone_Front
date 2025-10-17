import ChatView from "../components/ChatView";
import ChatSidebar from "../components/ChatSidebar";

function ChatPage() {
  return (
    <main className="min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100">
      <ChatSidebar />

      <div className="flex-1 flex flex-col">
        <ChatView />
      </div>
    </main>
  );
}

export default ChatPage;
