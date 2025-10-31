import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import ProfileComponent from './components/ProfileComponent'
import MatchListComponent from './components/MatchListComponent'
import MessageComponent from './components/MessageComponent'
import ActivityFeedComponent from './components/ActivityFeedComponent'
import EventPlannerComponent from './components/EventPlannerComponent'

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
          <p className="tagline">Connect through your love for sports!</p>
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
          <li>Interest-Based Matching</li>
          <li>In-App Messaging</li>
          <li>Event Planning and Group Activities</li>
          <li>Sports Activity Feed</li>
          <li>User Verification</li>
          </ul>
        </div>
        <p>&copy; 2025 SportMatch. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App