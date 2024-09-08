import { useState } from "react";

type authUser = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState<authUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Mojjam",
      email: "mojjam@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}

export default User;
