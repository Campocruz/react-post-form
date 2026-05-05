import AppBtnItem from "./AppBtnItem";

export default function AppPostCard({ post, index, onDelateCurrentPost }) {

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="row d-flex justify-contents-between">
            <div className="col">
              <h3>{post.title}</h3>
            </div>
            <div className="col">
              <span>Scritto da: </span>
              <h3>{post.author}</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row row-cols-12">
            <div className="col">
              <p>{post.body}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div>
            <AppBtnItem index={index} icon={"trash"} text={"delate"} color={"danger"} userFuction={onDelateCurrentPost} />
          </div>
        </div>
      </div>
    </>
  )
}