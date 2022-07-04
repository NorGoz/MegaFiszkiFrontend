import './log-out.css';
import {useContext} from "react";
import {UserContext} from "../../context/user.context";

const LogOutComponent = () => {
    const {setUser} = useContext(UserContext);
  return (
      <div>
          <button onClick={e => setUser('')}>Wyloguj</button>
      </div>
  )
}
export default LogOutComponent
