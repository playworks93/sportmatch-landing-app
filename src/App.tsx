import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import MatchList from './components/MatchList'
import ActivityScheduler from './components/ActivityScheduler'
import ChatInterface from './components/ChatInterface'
import EventReview from './components/EventReview'

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
          <p className="tagline">Connect through your passion for sports</p>
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
          <li>User Profiles with Sport Interests</li>
          <li>Matchmaking Algorithm based on shared interests</li>
          <li>Activity Scheduling for Sports Events</li>
          <li>In-app Messaging System</li>
          <li>User-generated Content and Reviews of Local Sports Events</li>
          <li>Location-based Searching for Matches</li>
          </ul>
        </div>
        <p>&copy; 2025 SportMatch. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App