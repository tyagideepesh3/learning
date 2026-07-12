import logo from './logo.svg';
import './App.css';
import { LongList } from './longList/LongList';
import { VirtualList } from './virtualList/VirtualList';

function App() {
  return (
    <>
    {/* <LongList/> */}
     <VirtualList />
    </>
  );
}

export default App;
