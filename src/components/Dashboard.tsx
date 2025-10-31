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
          className={activeTab === 'profile_creation_with_sports_preferences' ? 'active' : ''}
          onClick={() => setActiveTab('profile_creation_with_sports_preferences')}
        >
          Profile Creation With Sports Preferences
        </button>
        <button 
          className={activeTab === 'matchmaking_algorithm_based_on_interests' ? 'active' : ''}
          onClick={() => setActiveTab('matchmaking_algorithm_based_on_interests')}
        >
          Matchmaking Algorithm Based On Interests
        </button>
        <button 
          className={activeTab === 'event_planning_for_sports_activities' ? 'active' : ''}
          onClick={() => setActiveTab('event_planning_for_sports_activities')}
        >
          Event Planning For Sports Activities
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

        {activeTab === 'profile_creation_with_sports_preferences' && (
          <div className="tab-content">
            <h2>Profile Creation with Sports Preferences</h2>
            <p>Manage your profile creation with sports preferences here.</p>
          </div>
        )}

        {activeTab === 'matchmaking_algorithm_based_on_interests' && (
          <div className="tab-content">
            <h2>Matchmaking Algorithm Based on Interests</h2>
            <p>Manage your matchmaking algorithm based on interests here.</p>
          </div>
        )}

        {activeTab === 'event_planning_for_sports_activities' && (
          <div className="tab-content">
            <h2>Event Planning for Sports Activities</h2>
            <p>Manage your event planning for sports activities here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard