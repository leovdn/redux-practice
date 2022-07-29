import React from "react"
import { useSelector } from "react-redux"
import { selectPostById } from "../features/posts/postsSlice"

import PostAuthor from "../components/blog/PostAuthor"
import ReactionButtons from "../components/blog/ReactionButtons"
import TimeAgo from "../components/blog/TimeAgo"

import { useParams } from "react-router-dom"

const SinglePostPage = () => {
  const { postId } = useParams()
  const post = useSelector((state) => selectPostById(state, Number(postId)))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <article>
      <h3>{post.title} </h3>
      <p>{post.body.substring(0, 100)}</p>

      <div className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  )
}

export default SinglePostPage
