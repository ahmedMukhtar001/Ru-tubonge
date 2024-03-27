import { useState } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInAnonymously(auth);
      console.log('Successfully signed in anonymously');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <button onClick={handleSignIn} className="btn-signIn">Sign In Anonymously</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default SignIn;
