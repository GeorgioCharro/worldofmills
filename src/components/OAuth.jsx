import google from '../media/png/google.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';

function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const allowedEmails = ["giov436@gmail.com", "allowed.email2@example.com"]; // Replace with the allowed emails

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log('Logged in user email:', user.email); // Debugging line

      // Check if the user's email is in the allowed emails list
      if (!allowedEmails.includes(user.email)) {
        toast.error('You are not authorized to log in with this account');
        return;
      }

      // Check for User
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        // If user doesn't exist, optionally create the user document or handle the error
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        });
        toast.success('New user document created. You are now logged in.');
      }

      navigate('/');
    } catch (error) {
      toast.error('Could not authorize with Google');
      console.log('Error during Google login:', error); // Debugging line
    }
  };

  return (
    <div>
      <hr className="my-6 border-gray-300 w-full" />

      <button
        type="button"
        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
        onClick={onGoogleClick} // Ensure the click handler is on the button
      >
        <div className="flex items-center justify-center">
          <img src={google} alt="google" width='24px' height='24px' />
          <span className="ml-4">
            Sign {location.pathname === '/sign-in' ? 'In' : 'Up'} with Google
          </span>
        </div>
      </button>
    </div>
  );
}

export default OAuth;
