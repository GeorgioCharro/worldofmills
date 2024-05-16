import OAuth from '../components/OAuth';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      toast.error('Bad User Credentials!');
    }
  }

  const handleBackClick = () => {
    navigate('/'); // Go back to the previous page
  };

  return (
    <>
      <div className='w-full border rounded-xl shadow-lg'>
        <button
          className='m-2 text-yellow-500'
          onClick={handleBackClick}
        >
          <ArrowBackIcon sx={{width:40,height:40}} /> {/* Increased size here */}
        </button>
      </div>

      <div className="flex items-center mb-32">
        <div className="h-max mx-auto flex flex-col items-center">
          <form onSubmit={onSubmit}>
            <h1 className="text-xl font-bold text-center  mt-10">Sign in to your account</h1>
            <div className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
              <div>
                <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="email">Email</label>
                <input
                  className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                  onChange={onChange}
                  id='email'
                  type="email"
                  name="email"
                  value={email}
                  placeholder="giocharro@hotmail.com"
                />
              </div>
              <div>
                <label className="text-gray-600 font-bold inline-block pb-2" htmlFor="password">Password</label>
                <input
                  className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
                  onChange={onChange}
                  id='password'
                  type="password"
                  name="password"
                  value={password}
                  placeholder="******"
                />
              </div>
              <div className="flex">
                <div className="w-1/2">
                  <Link to='/forgot-password' className="font-bold text-yellow-600">Forgot password?</Link>
                </div>
              </div>
              <div>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 w-full py-2 rounded-md text-white font-bold cursor-pointer"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div>
                <p className="text-center">Or continue with</p>
              </div>
              <OAuth />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
