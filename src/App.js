import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AUTH_CONTEXT } from "./context/AuthProvider";

const App = () => {
  const { handleOneClickAuth } = useContext(AUTH_CONTEXT);
  const google = new GoogleAuthProvider();

  return (
    <div>
      <button onClick={() => handleOneClickAuth(google)}>Google login</button>
    </div>
  );
};
export default App;
