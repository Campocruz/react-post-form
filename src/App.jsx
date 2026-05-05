import { useState } from 'react'
import './App.css'
import AppFormBuisness from './components/AppFormBuisness'

const initUser = {
  firstName: 'cosma',
  lastName: 'campo',
  companyName: 'mic',
  role: 'tec',
  email: 'c@c.c',
  phone: '123',
  companyPic: 'https://loghi-famosi.com/wp-content/uploads/2020/09/Michelin-Logo.png'
}


function App() {

  const [user, setUser] = useState(initUser)

  function formatData(e) {
    // const value = e.target.value;
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function handlerSubmit(e) {
    e.preventDefault()
    console.log(user);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <AppFormBuisness onFormatData={formatData} user={user} onHandlerSubmit={handlerSubmit} />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  )
}

export default App
