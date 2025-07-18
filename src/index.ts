// FileCollection
// * A simple collection of files.
// * Keys are file names.
// * Values are file contents.
// * This is used for scenarios where we need to
//   work with files in a simple way, without
//   the complexity of a full VizFile structure.
export type FileCollection = Record<string, string>;

// VizFiles
//  * A collection of files.
//  * Keys are _not_ file names or array indices,
//    because based on past experience, that
//    leads to very difficult frontend logic around
//    Operational Transformation with ShareDB in the
//    case that a file is renamed or deleted.
//  * When the file name changes, or files are added/deleted,
//    this ID stays the same, simplifying things re:OT.
export type VizFiles = {
  [fileId: VizFileId]: VizFile;
};

// VizFileId
//  * A unique ID for a file.
//  * This is a random string.
export type VizFileId = string;

// VizFile
//  * A file with `name` and `text`.
export type VizFile = {
  // The file name.
  // e.g. "index.html".
  name: string;

  // The text content of the file.
  // e.g. "<body>Hello</body>"
  text: string;
};

// VizId
//  * Unique identifier string for a Viz.
//  * Common between Info and Content for a given Viz.
//  * This is a UUID v4 string with dashes removed (for ease of URL copying).
export type VizId = string;

// VizLicense
//  * The license associated with a viz.
//  * This is an SPDX License Identifier.
//  * See "Identifier" column in https://spdx.org/licenses/
export type VizLicense = string;

// VizTimestamp
//  * A timestamp down to the second.
//  * (Unix epoch milliseconds) / 1000
export type VizTimestamp = number;

// VizChatId
//  * A unique ID for a chat.
//  * This is a random string.
export type VizChatId = string;

// VizChatMessageRole
//  * The role of a message in a chat.
export type VizChatMessageRole = "user" | "assistant";

// VizChatMessageId
//  * A unique ID for a chat message.
export type VizChatMessageId = string;

// VizChatMessage
//  * A single message in a chat conversation.
//  * Based on LangChain's message structure.
export type VizChatMessage = {
  // The role of the message sender
  role: VizChatMessageRole;

  // The text content of the message
  content: string;

  // Timestamp when the message was created
  timestamp: VizTimestamp;

  // Optional metadata
  id?: VizChatMessageId;
};

// VizChat
//  * A single AI chat conversation.
//  * Contains an ordered array of messages representing the conversation history.
export type VizChat = {
  // Unique identifier for this chat
  id: VizChatId;

  // The title/name of this chat conversation
  title?: string;

  // Ordered array of messages in the conversation
  messages: VizChatMessage[];

  // Timestamp when the chat was created
  createdAt: VizTimestamp;

  // Timestamp when the chat was last updated
  updatedAt: VizTimestamp;

  // The AI scratchpad content
  aiScratchpad?: string;

  // The AI streaming content
  // The AI status, for displaying progress
  aiStatus?: string;
};

// VizChats
//  * A collection of AI chats associated with a viz.
//  * Keys are chat IDs.
//  * Values are chat objects.
//  * Similar structure to VizFiles for consistency.
export type VizChats = {
  [chatId: VizChatId]: VizChat;
};

// VizContent
//  * The content of a viz.
export type VizContent = {
  // id
  // * The viz that this content is associated with
  id: VizId;

  // `files`
  //   * The files in the viz.
  files: VizFiles;

  // title
  //  * The title of the viz, same as Info.title
  //  * Tracked here so that it can be versioned
  //  * Restoring an old version should restore its old title
  title?: string;

  // height
  // * The customized height of the viz in pixels
  // * Not defined if the user has not customized it
  // * If not defined, the default height is used,
  //   which is specified by defaultVizHeight.
  height?: number;

  // license
  // * The customized license associated with this viz
  // * Not defined if the user has not customized it
  license?: VizLicense;

  // `isInteracting`
  //   * `true` when the user is interacting
  //     via interactive code widgets (e.g. Alt+drag)
  //     * Hot reloading is throttled when this is `true`.
  //   * `false` or `undefined` when they are not (e.g. normal typing)
  //     * Hot reloading is debounced when this is `false`.
  isInteracting?: boolean;

  // `chats`
  //   * The AI chats associated with this viz.
  chats?: VizChats;
};
