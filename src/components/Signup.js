import React from "react";

function Signup(){
    return (
      <div>
        <form>
          <input type="text" name="username" placeholder="Enter your user name"></input>
          <input type="password" name="password" placeholder="Enter your password"></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    )
  }

  export default Signup;