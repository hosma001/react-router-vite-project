const Posts = ({ posts }) => {
    return (
      <>
        <h1>Posts</h1>
        <div>
            {
              posts.map( post => {
                return (
                  <p key={post.id}>
                    {
                    post.title
                    }
                  </p>
                );
              })
            }
        </div>
      </>
    );
  };

  export default Posts;