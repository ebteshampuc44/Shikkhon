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
import MyClass from './pages/MyClass';
import CoursePlaylist from './pages/CoursePlaylist';
import Cart from './pages/Cart'; // নতুন ইম্পোর্ট

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
        <Route path="my-class" element={<MyClass />} />
        <Route path="course-playlist/:courseId" element={<CoursePlaylist />} />
        <Route path="cart" element={<Cart />} /> {/* নতুন রুট */}
      </Route>
    </Routes>
  );
}

export default App;