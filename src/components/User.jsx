import { useParams, Link } from "react-router-dom";

const User = ({ users }) => {
    const params = useParams();
    const id = params.id * 1;
    
    const user = users.find( user => user.id === id);
  
    if(!user) {
      return null;
    }
  
    return (
      <>
      <h1>Detail for Users { user.name }</h1>
      <ol>
        <li> { `Username: ${ user.username }` } </li>
        <li> { `Email: ${ user.email }` } </li>
        <li> { `City: ${ user.address.city }` } </li>
        <li> { `Phone: ${ user.phone }` } </li>
        <li> { `Website: ${ user.website }` } </li>
        <li> { `Company: ${ user.company.name }` } </li>
      </ol>
      <Link to='/users'>
        Back to All Users
      </Link>
      </>
    );
  };

  export default User;