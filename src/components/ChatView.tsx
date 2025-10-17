
/**
 * Dark minimal Chat View skeleton
 * No logic — only structure and styling.
 */
function ChatView() {
  return (
    <section className="flex flex-col flex-1 h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-200 border-l border-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          ChatGPT Session
        </h1>
        <span className="text-sm text-gray-500">Model: GPT-5</span>
      </header>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        {/* System / Assistant message */}
        <div className="flex justify-start">
          <div className="max-w-[70%] rounded-2xl p-4 bg-gray-800/60 border border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <p className="text-gray-300">
              Hello! This is a placeholder assistant message.
            </p>
          </div>
        </div>

        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <p>Hi! This is how user messages will look.</p>
          </div>
        </div>

        {/* Another assistant message */}
        <div className="flex justify-start">
          <div className="max-w-[70%] rounded-2xl p-4 bg-gray-800/60 border border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <p className="text-gray-300">
              This area will grow dynamically as conversation continues.
            </p>
          </div>
        </div>
      </div>

      {/* Composer area */}
      <footer className="border-t border-gray-800 p-4">
        <form className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-1 rounded-lg px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
            disabled
          />
          <button
            type="button"
            disabled
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold opacity-60 cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </footer>
    </section>
  );
}

export default ChatView;
