import { Chat } from '@views/Chat';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';

import { AuthSignIn, AuthSignUp, AuthForgot } from '@views/Auth';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: ':roomId',
        element: <Chat />
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
