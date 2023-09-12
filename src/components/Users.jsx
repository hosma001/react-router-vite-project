import { Link } from "react-router-dom";

const Users = ({users}) => {
    return (
      <>
        <h1>Users</h1>
        <div>
          {
            users.map( user => {
              return(
                <p key={user.id}> 
                <Link to={`/users/${ user.id }`}>
                  {
                  user.name
                  }
                </Link>
                </p>                
              );
            })
          }
        </div>
      </>
    );
  };

  export default Users;