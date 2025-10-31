import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'user_profiles_with_sports_interests' ? 'active' : ''}
          onClick={() => setActiveTab('user_profiles_with_sports_interests')}
        >
          User Profiles With Sports Interests
        </button>
        <button 
          className={activeTab === 'matchmaking_algorithm_based_on_sporting_preferences' ? 'active' : ''}
          onClick={() => setActiveTab('matchmaking_algorithm_based_on_sporting_preferences')}
        >
          Matchmaking Algorithm Based On Sporting Preferences
        </button>
        <button 
          className={activeTab === 'event_creation_for_group_activities' ? 'active' : ''}
          onClick={() => setActiveTab('event_creation_for_group_activities')}
        >
          Event Creation For Group Activities
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'user_profiles_with_sports_interests' && (
          <div className="tab-content">
            <h2>User Profiles with Sports Interests</h2>
            <p>Manage your user profiles with sports interests here.</p>
          </div>
        )}

        {activeTab === 'matchmaking_algorithm_based_on_sporting_preferences' && (
          <div className="tab-content">
            <h2>Matchmaking Algorithm Based on Sporting Preferences</h2>
            <p>Manage your matchmaking algorithm based on sporting preferences here.</p>
          </div>
        )}

        {activeTab === 'event_creation_for_group_activities' && (
          <div className="tab-content">
            <h2>Event Creation for Group Activities</h2>
            <p>Manage your event creation for group activities here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard