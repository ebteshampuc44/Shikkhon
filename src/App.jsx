// App.jsx - Updated
import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Instructors from './pages/Instructors';
import Blog from './pages/Blog';
import FreeLearning from './pages/FreeLearning';
import Contact from './pages/Contact';
import MyClass from './pages/MyClass'; // Import My Class page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="courses" element={<Courses />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="blog" element={<Blog />} />
        <Route path="free-learning" element={<FreeLearning />} />
        <Route path="contact" element={<Contact />} />
        <Route path="my-class" element={<MyClass />} /> {/* Add My Class route */}
      </Route>
    </Routes>
  );
}

export default App;