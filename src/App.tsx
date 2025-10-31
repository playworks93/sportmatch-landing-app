import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import MatchList from './components/MatchList'
import ChatWindow from './components/ChatWindow'
import EventScheduler from './components/EventScheduler'
import Feed from './components/Feed'

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
          <li>User Registration and Profile Creation</li>
          <li>Sport Interest Matching</li>
          <li>Event and Activity Scheduling</li>
          <li>Messaging and Chat Functionality</li>
          <li>User Feed with Sports-related Content</li>
          <li>Location-based Search for Nearby Users</li>
          </ul>
        </div>
        <p>&copy; 2025 SportMatch. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App