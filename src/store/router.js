import { Chat } from '@views/Chat';
import { ChatRoom } from '@views/Chat/ChatRoom';
import { EmptyRoom } from '@views/Chat/EmptyRoom';
import App from '../App';
import { createHashRouter, createBrowserRouter } from 'react-router-dom';

import { AuthSignIn, AuthSignUp, AuthForgot } from '@views/Auth';

const createRouter = process.env.ENV === 'gh-pages' ? createHashRouter : createBrowserRouter;

export const routes = createRouter([
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
