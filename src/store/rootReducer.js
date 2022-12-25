import { combineReducers} from 'redux';
import { activeChatReducer, chatRoomsReducer} from '../store/chat/reducer'

export const rootReducer = combineReducers({
    chatRooms: chatRoomsReducer,
    activeChat: activeChatReducer,
});