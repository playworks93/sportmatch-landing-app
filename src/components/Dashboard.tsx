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
          className={activeTab === 'user_registration_and_profile_creation' ? 'active' : ''}
          onClick={() => setActiveTab('user_registration_and_profile_creation')}
        >
          User Registration And Profile Creation
        </button>
        <button 
          className={activeTab === 'sport_interest_matching' ? 'active' : ''}
          onClick={() => setActiveTab('sport_interest_matching')}
        >
          Sport Interest Matching
        </button>
        <button 
          className={activeTab === 'event_and_activity_scheduling' ? 'active' : ''}
          onClick={() => setActiveTab('event_and_activity_scheduling')}
        >
          Event And Activity Scheduling
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

        {activeTab === 'user_registration_and_profile_creation' && (
          <div className="tab-content">
            <h2>User Registration and Profile Creation</h2>
            <p>Manage your user registration and profile creation here.</p>
          </div>
        )}

        {activeTab === 'sport_interest_matching' && (
          <div className="tab-content">
            <h2>Sport Interest Matching</h2>
            <p>Manage your sport interest matching here.</p>
          </div>
        )}

        {activeTab === 'event_and_activity_scheduling' && (
          <div className="tab-content">
            <h2>Event and Activity Scheduling</h2>
            <p>Manage your event and activity scheduling here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard