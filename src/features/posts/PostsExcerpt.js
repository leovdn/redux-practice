import React from "react"

import PostAuthor from "./PostAuthor"
import ReactionButtons from "./ReactionButtons"
import TimeAgo from "./TimeAgo"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectPostById } from "./postsSlice"

const PostsExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId))

  return (
    <article>
      <h2>{post.title} </h2>
      <p className="excerpt">{post.body.substring(0, 75)}</p>

      <div className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  )
}

export default PostsExcerpt
