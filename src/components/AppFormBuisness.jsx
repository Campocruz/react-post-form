export default function AppFormBuisness({ onFormatData, post, onHandlerSubmit }) {

  return (
    <>
      <form onSubmit={onHandlerSubmit}>
        <div className="row g-3 row-cols-2">
          <div className="col">
            <label htmlFor="author">Autore del Post</label>
            <input
              name="author"
              className="form-control"
              placeholder="autore"
              type="text"
              value={post.author}
              onChange={onFormatData}
            />
          </div>
          <div className="col">
            <label htmlFor="title">Titolo del Post</label>
            <input
              name="title"
              className="form-control"
              placeholder="titolo"
              type="text"
              value={post.title}
              onChange={onFormatData}
            />
          </div>
          <div className="col-12">
            <label htmlFor="body">Messaggio del Post</label>
            <textarea
              name="body"
              className="form-control"
              placeholder="body"
              type="text"
              value={post.body}
              onChange={onFormatData}
            />
          </div>
          <div className="col mb-5">
            <label htmlFor="public">Post Pubblico</label>
            <input
              name="public"
              className="form-check-input"
              placeholder="scope"
              type="checkbox"
              value={post.public}
              onChange={onFormatData}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark w-100">Add Post</button>
      </form >
    </>
  )
}