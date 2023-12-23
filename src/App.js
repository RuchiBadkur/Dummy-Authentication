import React, {useState} from "react";
import Login from './Components/Login';
import Profile from './Components/Profile';

const App = () => {
    const [user, setUser] = useState(null);
  
    return (
      <div>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Profile userId={user.id} />
        )}
      </div>
    );
  };
  
  export default App;