import './App.css'
import { Routes, Route,  } from 'react-router-dom'
//import Login from './app/views/login'
//import Dashboard  from './views/dashboard'
//import Layout from './components/Layout'
import AuthPage from './views/AuthPage'
import UserProfile from './views/UserProfile'
import HomePage from './views/HomePage'

function App() {
  return (
    // <div className="App">
    //     {/* <Login/>
    //     <a href="#">Sign Up</a> */}

    //     <Routes>
    //       <Route path='/' element={<Home/>}/>
    //       <Route path='dashboard' element={<Dashboard/>} />
    //     </Routes>
    // </div>

      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/auth' element ={<AuthPage />}/>
        <Route path='/profile' element={<UserProfile />}/>
      </Routes>
      );
}

// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/dashboard">Dashboard</Link>
//       </nav>
//     </>
//   );
// }


export default App;
