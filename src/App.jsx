import { useState } from 'react'
import './App.css'
import AppFormBuisness from './components/AppFormBuisness'

const initPost = {
  author: 'cosma',
  title: 'react app',
  body: '',
  public: false
}


function App() {

  const [post, setPost] = useState(initPost)

  function formatData(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setPost({ ...post, [e.target.name]: value })
  }

  function handlerSubmit(e) {
    e.preventDefault()
    console.log(post);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <AppFormBuisness onFormatData={formatData} post={post} onHandlerSubmit={handlerSubmit} />
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  )
}

export default App
