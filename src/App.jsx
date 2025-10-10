import Home from './MyComponents/Home';
import BookProfile from './MyComponents/BookProfile'
import './App.css'
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/BookProfile" element={<BookProfile />}/>
        {/* <Route path="" element={<Profile />}/> */}
        {/* <Route path="" element={<Toggle />}/> */}
        {/* <Route path="" element={<Logout />}/> */}
      </Routes>
    </div>
  )
}

export default App
