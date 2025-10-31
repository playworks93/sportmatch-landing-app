import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import MatchList from './components/MatchList'
import EventCard from './components/EventCard'
import ChatWindow from './components/ChatWindow'
import ForumPost from './components/ForumPost'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>SportMatch</h1>
          <p className="tagline">Find Love Through Sports</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User Profiles with Sports Interests</li>
          <li>Matchmaking Algorithm Based on Sporting Preferences</li>
          <li>Event Creation for Group Activities</li>
          <li>In-app Messaging and Chat</li>
          <li>Sport-Related Community Forums</li>
          <li>Location-Based Match Suggestions</li>
          </ul>
        </div>
        <p>&copy; 2025 SportMatch. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App