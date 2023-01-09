import '../src/styles/index.css';
import { Outlet } from 'react-router-dom';

export default function App () {
  return (
    <div>
      <Outlet/>
    </div>
  );
};
