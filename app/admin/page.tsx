"use client";
import {
  FiTrendingUp,
  FiDollarSign,
  FiUsers,
  FiActivity,
} from "react-icons/fi";

function AdminHome() {

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+12%",
      icon: <FiDollarSign className="text-green-500" />,
    },
    {
      title: "Total Users",
      value: "2,345",
      change: "+8%",
      icon: <FiUsers className="text-blue-500" />,
    },
    {
      title: "Active Sessions",
      value: "1,234",
      change: "+3.2%",
      icon: <FiActivity className="text-purple-500" />,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      icon: <FiTrendingUp className="text-yellow-500" />,
    },
  ];


  return (
    <div className="space-y-6 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p>{stat.title}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-green-600 flex items-center">
                  {stat.icon}
                  <span className="ml-1">{stat.change}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="px-6 py-4 flex items-center">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Activity {item}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Description of activity {item}
                </p>
              </div>
              <div className="ml-4 text-sm text-gray-500">2h ago</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Sales Overview
        </h3>
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center text-gray-400">
          Chart Placeholder
        </div>
      </div>
    </div>
  );
}


export default AdminHome
