import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getRole } from '../api/user'
import Sidebar from '../Components/Dashboard/Sidebar'
import Spinner from '../Components/Spinner/Spinner'
import { AuthContext } from '../contexts/AuthProvider'

const DashboardLayout = () => {
  const { user } = useContext(AuthContext)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getRole(user?.email).then(data => {
      console.log(data)
      setRole(data)
      setLoading(false)
    })
  }, [user])
  return (
    <div className='md:flex relative min-h-screen'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Sidebar role={role} />
          <div className='flex-1 md:ml-64'>
            <div className='p-5'>
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DashboardLayout
