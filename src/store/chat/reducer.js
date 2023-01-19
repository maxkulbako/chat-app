import { mainUser } from '@store/constants';
import { createMockMessage, createMockChat } from '../../core/mock/index';
import * as actions from './actions';

const mainUserAvatar = mainUser.avatar;

const initialState = {
  list: [
    createMockChat(),
    createMockChat(),
    {
      id: '3',
      name: 'Jeff Bezos',
      avatar: 'https://image.capital.de/31027178/t/pO/v1/w960/r0/-/bezos-final-0404-jpg.jpg',
      lastMessage: 'I\'ll be in your neighborhood...',
      date: '10/11/22',
      messages: [
        {
          id: '1',
          primary: 'Brunch this week?',
          name: 'Max Kulbako',
          secondary: 'I\'ll be in the neighbourhood this week. Let\'s grab a bite to eat',
          person: mainUserAvatar
        },
        {
          id: '2',
          primary: 'Birthday Gift',
          name: 'Jeff Bezos',
          secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
          person: 'https://image.capital.de/31027178/t/pO/v1/w960/r0/-/bezos-final-0404-jpg.jpg'
        },
        {
          id: '3',
          primary: 'Recipe to try',
          name: 'Max Kulbako',
          secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
          person: mainUserAvatar
        },
        {
          id: '4',
          primary: 'Yes!',
          name: 'Jeff Bezos',
          secondary: 'I have the tickets to the ReactConf for this year.',
          person: 'https://image.capital.de/31027178/t/pO/v1/w960/r0/-/bezos-final-0404-jpg.jpg'
        },
        {
          id: '5',
          primary: 'Doctor\'s Appointment',
          name: 'Jeff Bezos',
          secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
          person: 'https://image.capital.de/31027178/t/pO/v1/w960/r0/-/bezos-final-0404-jpg.jpg'
        },
        {
          id: '6',
          primary: 'Discussion',
          name: 'Max Kulbako',
          secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
          person: mainUserAvatar
        },
        {
          id: '7',
          primary: 'Summer BBQ',
          name: 'Jeff Bezos',
          secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
          person: 'https://image.capital.de/31027178/t/pO/v1/w960/r0/-/bezos-final-0404-jpg.jpg'
        }
      ]
    },
    createMockChat(),
    createMockChat()
  ]
};

export function chatRoomsReducer (state = initialState, action) {
  switch (action.type) {
  case actions.actionSendMessage.TYPE:
    return {
      ...state,
      list: state.list.map(room => {
        if (room.id === action.payload.roomId) {
          return {
            ...room,
            messages: [
              ...room.messages,
              createMockMessage({
                name: 'Max Kulbako',
                secondary: action.payload.text
              })]
          };
        }
        return room;
      })
    };

  default:
    return state;
  };
}
