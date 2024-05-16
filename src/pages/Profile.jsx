import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc, addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from "../firebase.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const storage = getStorage();

  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });
  const { name, email } = formData;

  const [machineData, setMachineData] = useState({
    machineName: '',
    machineNameAr: '',
    machineType: 'Feeder',
    description: '',
    descriptionAr: '',
    imgFiles: []
  });

  const { machineName, machineNameAr, machineType, description, descriptionAr, imgFiles } = machineData;

  const machineTypes = ['Feeder', 'Filtering', 'Halawi', 'Chocolate', 'Mills', 'Nuts', 'Tahina', 'Thyme and Spices'];

  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, {
          name
        });
        toast.success('Successfully updated profile details');
      }
    } catch (error) {
      toast.error('Could not update profile details');
      console.log(error);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const handleMachineChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "imgFiles") {
      setMachineData((prevState) => ({
        ...prevState,
        imgFiles: files
      }));
    } else {
      setMachineData((prevState) => ({
        ...prevState,
        [id]: value
      }));
    }
  };

  const storeImage = async (image) => {
    return new Promise((resolve, reject) => {
      const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;

      const storageRef = ref(storage, 'images/' + fileName);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleAddMachine = async (e) => {
    e.preventDefault();
    try {
      const imgUrls = await Promise.all(
        [...imgFiles].map((file) => storeImage(file))
      ).catch(() => {
        toast.error('Images not uploaded');
        return;
      });

      await addDoc(collection(db, 'machines'), {
        machineName,
        machineName_ar: machineNameAr,
        type: machineType,
        description,
        description_ar: descriptionAr,
        imgUrls,
        userRef: auth.currentUser.uid,
        timestamp: new Date(),
      });

      toast.success('Machine added successfully');
      setMachineData({
        machineName: '',
        machineNameAr: '',
        machineType: 'Feeder',
        description: '',
        descriptionAr: '',
        imgFiles: []
      });
    } catch (error) {
      console.error('Error adding machine: ', error);
      toast.error('Error adding machine');
    }
  };

  return (
    <div className="m-8">
      <div className="flex justify-between">
        <p className="text-3xl text-gray-700 font-bold">My Profile</p>
        <button className="btn btn-sm btn-success btn-outline" onClick={onLogout}>Logout</button>
      </div>

      <div className="mt-8">
        <div className="flex justify-between">
          <p className="text-gray-700 font-semibold text-lg">Personal Details</p>
          <button className="text-green-500 font-bold" onClick={() => {
            changeDetails && onSubmit();
            setChangeDetails((prevState) => !prevState);
          }}>
            {changeDetails ? 'done' : 'change'}
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-bold text-gray-700 mb-2 text-sm">Name</p>
        <label className="input input-bordered flex items-center gap-2 border-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow" placeholder="Username" id="name" value={name} onChange={onChange} disabled={!changeDetails} />
        </label>
      </div>

      <div className="mt-4">
        <p className="font-bold text-gray-700 mb-2 text-sm">Email</p>
        <label className="input input-bordered border-yellow-500 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="black" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" id="email" value={email} onChange={onChange} disabled />
        </label>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add New Machine</h2>
        <form onSubmit={handleAddMachine}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="machineName">
              Machine Name (English)
            </label>
            <input
              type="text"
              id="machineName"
              value={machineName}
              onChange={handleMachineChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="machineNameAr">
              Machine Name (Arabic)
            </label>
            <input
              type="text"
              id="machineNameAr"
              value={machineNameAr}
              onChange={handleMachineChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="machineType">
              Machine Type
            </label>
            <select
              id="machineType"
              value={machineType}
              onChange={handleMachineChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              {machineTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description (English)
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleMachineChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descriptionAr">
              Description (Arabic)
            </label>
            <textarea
              id="descriptionAr"
              value={descriptionAr}
              onChange={handleMachineChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imgFiles">
              Upload Images
            </label>
            <input
              type="file"
              id="imgFiles"
              onChange={handleMachineChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              multiple
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Machine
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
