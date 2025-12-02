import React, { useState } from 'react'
import { LoginPostApi } from '../Service.js/APIService'
import { useNavigate } from 'react-router-dom'

function Homer() {

  const [userName,setUserName] = useState()
  const [password,setPassword] = useState()
  const [responseData,setResponseData] = useState([])

  const navigate = useNavigate()



  const login = async () => {
    const userDataSet = {
      userName: userName,
      password: password
    }
    const response = await LoginPostApi(userDataSet)
    setResponseData(response)
    console.log(response)
    navigate("/DashBoard")

  }

  return (
    <div>Homer<br/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">
              Username
            </label>
            <input
              onChange={(e)=>{setUserName(e.target.value)}}
              type="text"
              placeholder="Enter Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1 font-medium text-left">
              Password
            </label>
            <input
              onChange={(e) => {setPassword(e.target.value)}}
              type="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            onClick={()=>{login()}}
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>
</div>
  )
}

export default Homer