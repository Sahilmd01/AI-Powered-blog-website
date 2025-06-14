import React, { useEffect, useState } from 'react'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const ListBlog = () => {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { axios } = useAppContext()

  const fetchBlogs = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get('/api/admin/blogs')
      if (data.success) {
        setBlogs(data.blogs)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className='flex-1 p-4 md:p-8 bg-gray-50 min-h-screen'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Blog Management</h1>
          <p className='text-gray-500 text-sm mt-1'>Manage all your published and draft blogs</p>
        </div>
        <Link 
          to="/admin/blogs/create" 
          className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm'
        >
          <FiPlus size={18} />
          Create New Blog
        </Link>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr className='text-left text-sm text-gray-600 uppercase'>
                <th scope='col' className='px-6 py-3 font-medium'>#</th>
                <th scope='col' className='px-6 py-3 font-medium'>Blog Title</th>
                <th scope='col' className='px-6 py-3 font-medium hidden sm:table-cell'>Date</th>
                <th scope='col' className='px-6 py-3 font-medium hidden sm:table-cell'>Status</th>
                <th scope='col' className='px-6 py-3 font-medium text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {isLoading ? (
                <tr>
                  <td colSpan="5" className='px-6 py-8 text-center text-gray-500'>
                    Loading blogs...
                  </td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan="5" className='px-6 py-8 text-center text-gray-500'>
                    No blogs found. Create your first blog!
                  </td>
                </tr>
              ) : (
                blogs.map((blog, index) => (
                  <BlogTableItem 
                    key={blog._id} 
                    blog={blog} 
                    fetchBlogs={fetchBlogs} 
                    index={index+1}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListBlog