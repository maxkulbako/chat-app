export const selectChatList = state => state.chatRooms.list;
export const selectChatRooms = (state) => state.chatRooms;
export const selectActiveChatList = (state) => state.chatRooms.activeRoom;

export const selectChatRoomActiveRoom = state => {
  const rooms = selectChatRooms(state);

  const activeRoomId = rooms.activeRoom;
  return rooms.list.find(room => room.id === activeRoomId);
};
