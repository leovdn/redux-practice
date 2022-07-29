import React from "react"

import PostAuthor from "./PostAuthor"
import ReactionButtons from "./ReactionButtons"
import TimeAgo from "./TimeAgo"
import { Link } from "react-router-dom"

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title} </h3>
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
