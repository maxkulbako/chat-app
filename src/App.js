import '../src/styles/index.css';
// import { Chat } from './views/Chat/index';
import { Outlet } from 'react-router-dom';

export default function App () {
  return (
    <div>
      <Outlet/>
    </div>
  );
};
