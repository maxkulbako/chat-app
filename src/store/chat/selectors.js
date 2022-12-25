export const selectChat = state => state.activeChat;
export const selectChatList = state => state.chatRooms;

export const selectChatRoom = (state) => {
    const rooms = state;
    const activeRoomId = state.current;

    const roomObj = rooms.list.find(room => room.id === activeRoomId);

    return roomObj;
};