import Post from "../post/Post"
import "./posts.css"

function Posts({posts}) {
  return (
    <div className="posts">
        {posts.map((p) => 
            (<Post key={p._id} post={p} />)
        )}
        <Post post={{photo:"default.jpg",categories:[],createdAt:new Date(),title:"",desc:""}} />
    </div>
  )
}

export default Posts