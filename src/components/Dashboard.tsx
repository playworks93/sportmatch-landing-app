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
          className={activeTab === 'user_profiles_with_sport_interests' ? 'active' : ''}
          onClick={() => setActiveTab('user_profiles_with_sport_interests')}
        >
          User Profiles With Sport Interests
        </button>
        <button 
          className={activeTab === 'matchmaking_algorithm_based_on_shared_interests' ? 'active' : ''}
          onClick={() => setActiveTab('matchmaking_algorithm_based_on_shared_interests')}
        >
          Matchmaking Algorithm Based On Shared Interests
        </button>
        <button 
          className={activeTab === 'activity_scheduling_for_sports_events' ? 'active' : ''}
          onClick={() => setActiveTab('activity_scheduling_for_sports_events')}
        >
          Activity Scheduling For Sports Events
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

        {activeTab === 'user_profiles_with_sport_interests' && (
          <div className="tab-content">
            <h2>User Profiles with Sport Interests</h2>
            <p>Manage your user profiles with sport interests here.</p>
          </div>
        )}

        {activeTab === 'matchmaking_algorithm_based_on_shared_interests' && (
          <div className="tab-content">
            <h2>Matchmaking Algorithm based on shared interests</h2>
            <p>Manage your matchmaking algorithm based on shared interests here.</p>
          </div>
        )}

        {activeTab === 'activity_scheduling_for_sports_events' && (
          <div className="tab-content">
            <h2>Activity Scheduling for Sports Events</h2>
            <p>Manage your activity scheduling for sports events here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard