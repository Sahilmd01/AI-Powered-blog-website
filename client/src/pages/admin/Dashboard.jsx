import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const { axios } = useAppContext()

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard')
      data.success ? setDashboardData(data.dashboardData) :
        toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [])


  return (
    <div className='flex-1 p-4 md:p-8 bg-gray-50 min-h-screen'>
      <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8'>
        <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100'>
          <div className='flex items-center gap-5'>
            <div className='p-3 rounded-lg bg-blue-50'>
              <img src={assets.dashboard_icon_1} alt="Blogs" className='w-8 h-8' />
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Total Blogs</p>
              <p className='text-2xl font-bold text-gray-700'>{dashboardData.blogs}</p>
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100'>
          <div className='flex items-center gap-5'>
            <div className='p-3 rounded-lg bg-green-50'>
              <img src={assets.dashboard_icon_2} alt="Comments" className='w-8 h-8' />
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Total Comments</p>
              <p className='text-2xl font-bold text-gray-700'>{dashboardData.comments}</p>
            </div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100'>
          <div className='flex items-center gap-5'>
            <div className='p-3 rounded-lg bg-purple-50'>
              <img src={assets.dashboard_icon_3} alt="Drafts" className='w-8 h-8' />
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Saved Drafts</p>
              <p className='text-2xl font-bold text-gray-700'>{dashboardData.drafts}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Blogs Section */}
      <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
        <div className='p-5 border-b border-gray-100'>
          <div className='flex items-center gap-3'>
            <div className='p-2 bg-gray-100 rounded-lg'>
              <img src={assets.dashboard_icon_4} alt="Latest Blogs" className='w-6 h-6' />
            </div>
            <h2 className='text-xl font-semibold text-gray-800'>Latest Blogs</h2>
          </div>
        </div>
        
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr className='text-left text-sm text-gray-600 uppercase'>
                <th className='px-6 py-3 font-medium'>#</th>
                <th className='px-6 py-3 font-medium'>Blog Title</th>
                <th className='px-6 py-3 font-medium hidden sm:table-cell'>Date</th>
                <th className='px-6 py-3 font-medium hidden sm:table-cell'>Status</th>
                <th className='px-6 py-3 font-medium'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem 
                  key={blog._id} 
                  blog={blog} 
                  fetchBlogs={fetchDashboard} 
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
          
          {dashboardData.recentBlogs.length === 0 && (
            <div className='p-8 text-center text-gray-500'>
              No recent blogs found
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard