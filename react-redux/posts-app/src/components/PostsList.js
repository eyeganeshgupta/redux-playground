import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
import { fetchPostsAction } from "../redux/actions/postActions";

const PostsList = () => {
  // ! dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);

  // TODO: get data from store
  const { loading, posts, error } = useSelector((data) => {
    return data;
  });

  return (
    <>
      <div className="posts-list">
        <h1>Total Posts {posts.length}</h1>
        {loading ? (
          <h2>Loading</h2>
        ) : error ? (
          <h2 style={{color: "darkred"}}>{error.response.status && "No Post Found!"}</h2>
        ) : (
          posts.map((post) => {
            return (
              <div className="post-details">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default PostsList;
