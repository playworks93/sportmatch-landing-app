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
          className={activeTab === 'personalized_user_profiles' ? 'active' : ''}
          onClick={() => setActiveTab('personalized_user_profiles')}
        >
          Personalized User Profiles
        </button>
        <button 
          className={activeTab === 'event_finder_for_local_sports_activities' ? 'active' : ''}
          onClick={() => setActiveTab('event_finder_for_local_sports_activities')}
        >
          Event Finder For Local Sports Activities
        </button>
        <button 
          className={activeTab === 'chat_and_messaging_system' ? 'active' : ''}
          onClick={() => setActiveTab('chat_and_messaging_system')}
        >
          Chat And Messaging System
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

        {activeTab === 'personalized_user_profiles' && (
          <div className="tab-content">
            <h2>Personalized User Profiles</h2>
            <p>Manage your personalized user profiles here.</p>
          </div>
        )}

        {activeTab === 'event_finder_for_local_sports_activities' && (
          <div className="tab-content">
            <h2>Event Finder for Local Sports Activities</h2>
            <p>Manage your event finder for local sports activities here.</p>
          </div>
        )}

        {activeTab === 'chat_and_messaging_system' && (
          <div className="tab-content">
            <h2>Chat and Messaging System</h2>
            <p>Manage your chat and messaging system here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard