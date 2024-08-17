import { MdDeleteForever } from "react-icons/md";
import React, { useContext } from "react";
import { PostList } from "../Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDeleteForever />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary has-tags">
            {tag}
          </span>
        ))}

        {post.reactions && typeof post.reactions === "object" ? (
          <div className="alert alert-danger reactions" role="alert">
            <p>This post has:</p>
            <ul>
              <li>{post.reactions.likes || 0} likes</li>
              <li>{post.reactions.dislikes || 0} dislikes</li>
            </ul>
          </div>
        ) : (
          <div className="alert alert-danger reactions" role="alert">
            This post has been reacted to by {post.reactions || 0} people
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
