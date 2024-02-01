
import Profile from './component/Profile'
import './App.css'
import Login from './component/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
