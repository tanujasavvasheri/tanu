import React from "react";
import "./App.css";

function App() {
  const builds = [
    {
      id: "#1042",
      branch: "main",
      commit: "a8f3c21",
      message: "Fix authentication issue",
      status: "Passed",
      duration: "2m 14s",
      time: "5 min ago",
    },
    {
      id: "#1041",
      branch: "develop",
      commit: "c92be18",
      message: "Update dashboard UI",
      status: "Passed",
      duration: "1m 48s",
      time: "18 min ago",
    },
    {
      id: "#1040",
      branch: "feature/payment",
      commit: "e71d4aa",
      message: "Add payment integration",
      status: "Failed",
      duration: "3m 02s",
      time: "42 min ago",
    },
    {
      id: "#1039",
      branch: "main",
      commit: "b12ac90",
      message: "Improve API performance",
      status: "Passed",
      duration: "2m 31s",
      time: "1 hour ago",
    },
    {
      id: "#1038",
      branch: "feature/profile",
      commit: "f41de72",
      message: "Add user profile page",
      status: "Running",
      duration: "1m 12s",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">CI</div>
          <span>DevFlow</span>
        </div>

        <nav>
          <a className="nav-item active" href="#">
            <span>▦</span>
            Dashboard
          </a>

          <a className="nav-item" href="#">
            <span>⚙</span>
            Pipelines
          </a>

          <a className="nav-item" href="#">
            <span>⌘</span>
            Repositories
          </a>

          <a className="nav-item" href="#">
            <span>◷</span>
            Build History
          </a>

          <a className="nav-item" href="#">
            <span>⚠</span>
            Issues
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a className="nav-item" href="#">
            <span>⚙</span>
            Settings
          </a>

          <div className="user-card">
            <div className="avatar">JD</div>
            <div>
              <strong>John Doe</strong>
              <small>Developer</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Header */}
        <header className="header">
          <div>
            <h1>CI Dashboard</h1>
            <p>Monitor your builds, pipelines and deployments.</p>
          </div>

          <div className="header-actions">
            <button className="icon-button">🔔</button>
            <button className="run-button">▶ Run Pipeline</button>
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <span>Total Builds</span>
              <div className="stat-icon blue">▦</div>
            </div>
            <h2>1,284</h2>
            <p className="positive">↑ 12.5% <span>vs last month</span></p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Success Rate</span>
              <div className="stat-icon green">✓</div>
            </div>
            <h2>94.8%</h2>
            <p className="positive">↑ 2.4% <span>vs last month</span></p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Failed Builds</span>
              <div className="stat-icon red">!</div>
            </div>
            <h2>23</h2>
            <p className="negative">↓ 8.2% <span>vs last month</span></p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Avg. Build Time</span>
              <div className="stat-icon purple">◷</div>
            </div>
            <h2>2m 18s</h2>
            <p className="positive">↓ 14.3% <span>vs last month</span></p>
          </div>
        </section>

        {/* Content Grid */}
        <section className="content-grid">
          {/* Recent Builds */}
          <div className="panel builds-panel">
            <div className="panel-header">
              <div>
                <h2>Recent Builds</h2>
                <p>Latest CI pipeline executions</p>
              </div>

              <button className="view-button">View all →</button>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>BUILD</th>
                    <th>BRANCH</th>
                    <th>COMMIT</th>
                    <th>STATUS</th>
                    <th>DURATION</th>
                    <th>TIME</th>
                  </tr>
                </thead>

                <tbody>
                  {builds.map((build) => (
                    <tr key={build.id}>
                      <td>
                        <strong>{build.id}</strong>
                        <div className="commit-message">
                          {build.message}
                        </div>
                      </td>

                      <td>
                        <span className="branch">
                          ⑂ {build.branch}
                        </span>
                      </td>

                      <td>
                        <code>{build.commit}</code>
                      </td>

                      <td>
                        <Status status={build.status} />
                      </td>

                      <td>{build.duration}</td>

                      <td className="muted">{build.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pipeline Status */}
          <div className="panel pipeline-panel">
            <div className="panel-header">
              <div>
                <h2>Pipeline Status</h2>
                <p>Current pipeline health</p>
              </div>
            </div>

            <div className="pipeline-list">
              <Pipeline
                name="Production"
                branch="main"
                status="Healthy"
                percentage="100%"
                color="green"
              />

              <Pipeline
                name="Staging"
                branch="develop"
                status="Healthy"
                percentage="96%"
                color="green"
              />

              <Pipeline
                name="Payment Service"
                branch="feature/payment"
                status="Failed"
                percentage="72%"
                color="red"
              />

              <Pipeline
                name="User Service"
                branch="feature/profile"
                status="Running"
                percentage="84%"
                color="blue"
              />
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="bottom-grid">
          {/* Build Activity */}
          <div className="panel">
            <div className="panel-header">
              <div>
                <h2>Build Activity</h2>
                <p>Build performance over the last 7 days</p>
              </div>

              <select className="select">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>

            <div className="chart">
              <div className="chart-y">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              <div className="chart-area">
                <div className="grid-line line-1"></div>
                <div className="grid-line line-2"></div>
                <div className="grid-line line-3"></div>
                <div className="grid-line line-4"></div>

                <div className="bars">
                  <div className="bar-group">
                    <div className="bar success" style={{ height: "75%" }}></div>
                    <div className="bar failed" style={{ height: "10%" }}></div>
                    <span>Mon</span>
                  </div>

                  <div className="bar-group">
                    <div className="bar success" style={{ height: "85%" }}></div>
                    <div className="bar failed" style={{ height: "8%" }}></div>
                    <span>Tue</span>
                  </div>

                  <div className="bar-group">
                    <div className="bar success" style={{ height: "68%" }}></div>
                    <div className="bar failed" style={{ height: "15%" }}></div>
                    <span>Wed</span>
                  </div>

                  <div className="bar-group">
                    <div className="bar success" style={{ height: "92%" }}></div>
                    <div className="bar failed" style={{ height: "5%" }}></div>
                    <span>Thu</span>
                  </div>

                  <div className="bar-group">
                    <div className="bar success" style={{ height: "78%" }}></div>
                    <div className="bar failed" style={{ height: "12%" }}></div>
                    <span>Fri</span>
                  </div>

                  <div className="bar-group">
                    <div className="bar success" style={{ height: "60%" }}></div>
                    <div className="bar failed" style={{ height: "18%" }}></div>
                    <span>Sat</span>
                  </div>

                  <div className="bar-group">
                    <div className="bar success" style={{ height: "72%" }}></div>
                    <div className="bar failed" style={{ height: "9%" }}></div>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-legend">
              <span>
                <i className="legend-success"></i> Successful
              </span>
              <span>
                <i className="legend-failed"></i> Failed
              </span>
            </div>
          </div>

          {/* Deployment */}
          <div className="panel">
            <div className="panel-header">
              <div>
                <h2>Recent Deployments</h2>
                <p>Latest production deployments</p>
              </div>
            </div>

            <div className="deployment-list">
              <Deployment
                version="v2.8.1"
                message="Fix authentication issue"
                time="Today, 10:32 PM"
                status="Success"
              />

              <Deployment
                version="v2.8.0"
                message="Update dashboard UI"
                time="Today, 6:14 PM"
                status="Success"
              />

              <Deployment
                version="v2.7.9"
                message="Payment integration"
                time="Yesterday, 4:45 PM"
                status="Rolled back"
              />

              <Deployment
                version="v2.7.8"
                message="API performance improvements"
                time="Yesterday, 11:20 AM"
                status="Success"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* Status Component */
function Status({ status }) {
  const className = status.toLowerCase().replace(" ", "-");

  return (
    <span className={`status ${className}`}>
      <span className="status-dot"></span>
      {status}
    </span>
  );
}

/* Pipeline Component */
function Pipeline({ name, branch, status, percentage, color }) {
  return (
    <div className="pipeline">
      <div className="pipeline-info">
        <div>
          <strong>{name}</strong>
          <small>⑂ {branch}</small>
        </div>

        <span className={`pipeline-status ${color}`}>
          {status}
        </span>
      </div>

      <div className="progress">
        <div
          className={`progress-bar ${color}`}
          style={{ width: percentage }}
        ></div>
      </div>

      <div className="progress-text">
        <span>Pipeline completion</span>
        <strong>{percentage}</strong>
      </div>
    </div>
  );
}

/* Deployment Component */
function Deployment({ version, message, time, status }) {
  return (
    <div className="deployment">
      <div className="deployment-icon">
        {status === "Success" ? "✓" : "↩"}
      </div>

      <div className="deployment-content">
        <div className="deployment-top">
          <strong>{version}</strong>
          <span
            className={
              status === "Success"
                ? "deployment-success"
                : "deployment-warning"
            }
          >
            {status}
          </span>
        </div>

        <p>{message}</p>
        <small>{time}</small>
      </div>
    </div>
  );
}

export default App;