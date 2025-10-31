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
          className={activeTab === 'sports_interests_profile_setup' ? 'active' : ''}
          onClick={() => setActiveTab('sports_interests_profile_setup')}
        >
          Sports Interests Profile Setup
        </button>
        <button 
          className={activeTab === 'discovery_&_matching_algorithm' ? 'active' : ''}
          onClick={() => setActiveTab('discovery_&_matching_algorithm')}
        >
          Discovery & Matching Algorithm
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

        {activeTab === 'sports_interests_profile_setup' && (
          <div className="tab-content">
            <h2>Sports Interests Profile Setup</h2>
            <p>Manage your sports interests profile setup here.</p>
          </div>
        )}

        {activeTab === 'discovery_&_matching_algorithm' && (
          <div className="tab-content">
            <h2>Discovery & Matching Algorithm</h2>
            <p>Manage your discovery & matching algorithm here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard