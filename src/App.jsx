import { useState } from 'react'
import './App.css'
import AppFormBuisness from './components/AppFormBuisness'
import AppPostCard from './components/AppPostCard'

const initPost = {
  author: '',
  title: '',
  body: '',
  public: false
}

const postList = [];

function App() {

  const [post, setPost] = useState(initPost)

  function formatData(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setPost({ ...post, [e.target.name]: value })
  }

  function handlerSubmit(e) {
    e.preventDefault()
    postList.push(post)
    setPost(initPost)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AppFormBuisness onFormatData={formatData} post={post} onHandlerSubmit={handlerSubmit} />
          </div>
          <hr className="mt-3" />
          <div className="col mt-3">
            {
              postList.length > 0 && postList.map((post, index) => {
                return <AppPostCard key={index} post={post} />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
