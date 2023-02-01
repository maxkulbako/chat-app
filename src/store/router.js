import { Chat } from '@views/Chat';
import { ChatRoom } from '@views/Chat/ChatRoom';
import { EmptyRoom } from '@views/Chat/EmptyRoom';
import App from '../App';
import { createHashRouter } from 'react-router-dom';

import { AuthSignIn, AuthSignUp, AuthForgot } from '@views/Auth';

export const routes = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Chat />,
        children: [
          {
            index: true,
            element: <EmptyRoom/>
          },
          {
            path: ':roomId',
            element: <ChatRoom />
          }
        ]
      }
    ]
  },
  {
    path: '/signin',
    element: <AuthSignIn />
  },
  {
    path: '/signup',
    element: <AuthSignUp />
  },
  {
    path: '/forgot',
    element: <AuthForgot />
  }
]);
