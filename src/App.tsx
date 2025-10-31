import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import MatchList from './components/MatchList'
import MessagingInterface from './components/MessagingInterface'
import EventShare from './components/EventShare'
import Communities from './components/Communities'

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
          <p className="tagline">Connect Through Your Passion for Sports</p>
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
          <li>User Profile Creation</li>
          <li>Sports Interests Matching</li>
          <li>Messaging System</li>
          <li>Event & Activity Sharing</li>
          <li>User Community Forums</li>
          <li>Profile Verification & Safety Features</li>
          </ul>
        </div>
        <p>&copy; 2025 SportMatch. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App