import React, { useEffect, useState } from 'react'
import CommentTableItem from '../../components/admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')
  const [isLoading, setIsLoading] = useState(true)

  const { axios } = useAppContext()

  const fetchComments = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get('/api/admin/comments')
      if (data.success) {
        setComments(data.comments)
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
    fetchComments()
  }, [])

  const filteredComments = comments.filter((comment) => {
    return filter === 'Approved' 
      ? comment.isApproved === true 
      : comment.isApproved === false
  })

  return (
    <div className='flex-1 p-4 md:p-8 bg-gray-50 min-h-screen'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4'>
        <h1 className='text-2xl font-bold text-gray-800'>Comment Management</h1>
        
        <div className='flex gap-2 bg-white p-1 rounded-lg shadow-sm border border-gray-200'>
          <button 
            onClick={() => setFilter('Not Approved')} 
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === 'Not Approved' 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Pending Review
          </button>
          
          <button 
            onClick={() => setFilter('Approved')} 
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              filter === 'Approved' 
                ? 'bg-green-100 text-green-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Approved
          </button>
        </div>
      </div>

      <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr className='text-left text-sm text-gray-600 uppercase'>
                <th scope='col' className='px-6 py-3 font-medium'>Blog Title & Comment</th>
                <th scope='col' className='px-6 py-3 font-medium hidden sm:table-cell'>Date</th>
                <th scope='col' className='px-6 py-3 font-medium text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {isLoading ? (
                <tr>
                  <td colSpan="3" className='px-6 py-8 text-center text-gray-500'>
                    Loading comments...
                  </td>
                </tr>
              ) : filteredComments.length === 0 ? (
                <tr>
                  <td colSpan="3" className='px-6 py-8 text-center text-gray-500'>
                    No {filter === 'Approved' ? 'approved' : 'pending'} comments found
                  </td>
                </tr>
              ) : (
                filteredComments.map((comment, index) => (
                  <CommentTableItem 
                    key={comment._id} 
                    comment={comment} 
                    index={index+1} 
                    fetchComments={fetchComments}
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

export default Comments