import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useLocation, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import Posts from './components/Posts';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    const fetchUsers = async() => {
      const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const usersData = response.data;
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async() => {
      const response = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts');
      const postsData = response.data;
      setPosts(postsData);
    };
    fetchPosts();
  }, []);
  
  return (
    <>
    <nav>
      <Link to='/' className={ pathname === '/' ? 'selected' : '' }>Home</Link>
      <Link to='/users' className={ pathname === '/users' ? 'selected' : '' }>Users ({ users.length }) </Link>
      <Link to='/posts' className={ pathname === '/posts' ? 'selected' : '' }>Posts ({ posts.length }) </Link>
    </nav>
    
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/users' element={ <Users users={ users }/> } />
      <Route path='/posts' element={ <Posts posts={ posts }/> } />
      <Route path='/users/:id' element={ <User users={ users }/> } />
    </Routes>

    </>
  )
}

export default App
