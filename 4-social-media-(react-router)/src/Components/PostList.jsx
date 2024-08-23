import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import Wellcommassage from "./Wellcommassage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Wellcommassage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
