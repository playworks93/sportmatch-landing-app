import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import EventList from './components/EventList'
import ChatWindow from './components/ChatWindow'
import MatchmakingEngine from './components/MatchmakingEngine'
import Forum from './components/Forum'

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
          <p className="tagline">Connect Through Sports</p>
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
          <li>Personalized User Profiles</li>
          <li>Event Finder for Local Sports Activities</li>
          <li>Chat and Messaging System</li>
          <li>Matchmaking Algorithm Based on Sports Interests</li>
          <li>Community Forums and Discussion Groups</li>
          <li>User Verification and Safety Features</li>
          </ul>
        </div>
        <p>&copy; 2025 SportMatch. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App