function ChatSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-72 h-screen border-r border-gray-800 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-gray-300">
      {/* Header / Branding */}
      <div className="px-5 py-4 border-b border-gray-800 flex items-center justify-between">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          My Chats
        </h2>
        <button
          className="rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-2 py-1 text-sm text-white font-semibold hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_10px_rgba(79,70,229,0.3)]"
          disabled
        >
          +
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3 border-b border-gray-800">
        <input
          type="text"
          placeholder="Search..."
          disabled
          className="w-full rounded-md px-3 py-2 bg-gray-900 text-gray-200 placeholder-gray-500 border border-gray-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition"
        />
      </div>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-2 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-gray-800 bg-gray-900/50 hover:bg-gray-900 transition flex flex-col gap-1 cursor-not-allowed"
          >
            <span className="text-sm text-gray-200">
              Project Session #{i + 1}
            </span>
            <span className="text-xs text-gray-500 truncate">
              Last message preview placeholder text...
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 px-4 py-3 text-xs text-gray-500">
        <p>v1.0 — Dark Minimal UI</p>
      </div>
    </aside>
  );
}

export default ChatSidebar;
