import Home from './MyComponents/Home';
import BookProfile from './MyComponents/BookProfile'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import HarryPotter1 from './MyComponents/Books/HarryPotter1';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/BookProfile" element={<BookProfile />}/>
        <Route path="/HarryPotter1" element={<HarryPotter1 />} />
        {/* <Route path="" element={<Profile />}/> */}
        {/* <Route path="" element={<Toggle />}/> */}
        {/* <Route path="" element={<Logout />}/> */}
      </Routes>
    </div>
  )
}

export default App
