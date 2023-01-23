import { createMockMessage, createMockChat } from '../../core/mock/index';
import * as actions from './actions';

const initialState = {
  mainUser: {
    name: 'Max Kulbako',
    avatar: 'https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/37639516_1836232409764891_2112603969481080832_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GVnm-X-UQYkAX-O7ueU&_nc_ht=scontent-ber1-1.xx&oh=00_AfDr8Hjzk8y4AzmjLyXBTbRkLQ5NEl_yjoYSHFFsIY_L8A&oe=63EE5413',
    appointment: 'front-end developer'
  },
  list: [
    createMockChat(),
    createMockChat(),
    {
      id: '3',
      name: 'Jeff Bezos',
      avatar: 'https://image.capital.de/31027178/t/pO/v1/w960/r0/-/bezos-final-0404-jpg.jpg',
      date: '10/11/22',
      messages: [
        {
          id: '1',
          primary: 'Brunch this week?',
          name: 'Max Kulbako',
          secondary: 'I\'ll be in the neighbourhood this week. Let\'s grab a bite to eat',
          person: 'https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/37639516_1836232409764891_2112603969481080832_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GVnm-X-UQYkAX-O7ueU&_nc_ht=scontent-ber1-1.xx&oh=00_AfDr8Hjzk8y4AzmjLyXBTbRkLQ5NEl_yjoYSHFFsIY_L8A&oe=63EE5413'
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
          person: 'https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/37639516_1836232409764891_2112603969481080832_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GVnm-X-UQYkAX-O7ueU&_nc_ht=scontent-ber1-1.xx&oh=00_AfDr8Hjzk8y4AzmjLyXBTbRkLQ5NEl_yjoYSHFFsIY_L8A&oe=63EE5413'
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
          person: 'https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/37639516_1836232409764891_2112603969481080832_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GVnm-X-UQYkAX-O7ueU&_nc_ht=scontent-ber1-1.xx&oh=00_AfDr8Hjzk8y4AzmjLyXBTbRkLQ5NEl_yjoYSHFFsIY_L8A&oe=63EE5413'
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
                name: state.mainUser.name,
                secondary: action.payload.text
              })]
          };
        }
        return room;
      })
    };

  case actions.actionDeleteMessage.TYPE:
    return {
      ...state,
      list: state.list.map(room => {
        if (room.id === action.payload.roomId) {
          return {
            ...room,
            messages: room.messages.filter(message => message.id !== action.payload.messageId)
          };
        }
        return room;
      })
    };

  case actions.actionDeleteAllMessages.TYPE:
    return {
      ...state,
      list: state.list.map(room => {
        if (room.id === action.payload) {
          return {
            ...room,
            messages: []
          };
        }
        return room;
      })
    };

  default:
    return state;
  };
}
