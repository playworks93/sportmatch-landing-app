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
          className={activeTab === 'user_authentication_&_onboarding' ? 'active' : ''}
          onClick={() => setActiveTab('user_authentication_&_onboarding')}
        >
          User Authentication & Onboarding
        </button>
        <button 
          className={activeTab === 'personalized_sports_profile_setup' ? 'active' : ''}
          onClick={() => setActiveTab('personalized_sports_profile_setup')}
        >
          Personalized Sports Profile Setup
        </button>
        <button 
          className={activeTab === 'matchmaking_algorithm_based_on_interests' ? 'active' : ''}
          onClick={() => setActiveTab('matchmaking_algorithm_based_on_interests')}
        >
          Matchmaking Algorithm Based On Interests
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

        {activeTab === 'user_authentication_&_onboarding' && (
          <div className="tab-content">
            <h2>User Authentication & Onboarding</h2>
            <p>Manage your user authentication & onboarding here.</p>
          </div>
        )}

        {activeTab === 'personalized_sports_profile_setup' && (
          <div className="tab-content">
            <h2>Personalized Sports Profile Setup</h2>
            <p>Manage your personalized sports profile setup here.</p>
          </div>
        )}

        {activeTab === 'matchmaking_algorithm_based_on_interests' && (
          <div className="tab-content">
            <h2>Matchmaking Algorithm based on Interests</h2>
            <p>Manage your matchmaking algorithm based on interests here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard