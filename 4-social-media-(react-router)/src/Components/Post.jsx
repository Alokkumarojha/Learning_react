import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className="mb-2">
            {post.tags.map((tag) => (
              <span key={tag} className="badge text-bg-primary hashtag">
                {tag}
              </span>
            ))}
          </div>
        )}
        {post.reactions && typeof post.reactions === "object" ? (
          <div className="alert alert-danger reactions" role="alert">
            <p>This post has:</p>
            <ul>
              <li>{post.reactions.likes || 0} likes.</li>
              <li>{post.reactions.dislikes || 0} dislikes.</li>
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
