import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../firebase.config';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../contexts/LanguageContext';
import Animation from '../components/Animation';
import FeedGrinder from '../media/png/animalfeed/feedgrinder.png';
import ChocolatePump from '../media/png/chocolate/chocolatepump.jpg';
import FilteringGrain from '../media/png/filtering/grainfilteringline.png';
import MachineItem from '../components/MachineItem';
function Home() {
  const [selectedType, setSelectedType] = useState('Grinder');
  const { t, i18n } = useTranslation();
  const { toggleLanguage } = useContext(LanguageContext);
  const [machines, setMachines] = useState(null);
  const [loading, setLoading] = useState(true);

  const changeLanguage = () => {
    toggleLanguage();
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        const machinesRef = collection(db, 'machines');
        const q = query(machinesRef, where('type', '==', selectedType));
        const querySnap = await getDocs(q);
        let machines = [];
        querySnap.forEach((doc) => {
          machines.push({
            id: doc.id,
            data: doc.data()
          });
        });
        setMachines(machines);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching machines: ", error);
        setLoading(false);
      }
    };
    fetchMachines();
  }, [selectedType]);

  return (
    loading ? (
      <Animation />
    ) : (
      <>
        <div className="flex mt-12 flex-col md:flex-row justify-evenly m-4 p-4">
          <div className="flex-col flex flex-1 md:mr-2 mb-8 md:mb-0 ml-8">
            <p className="text-4xl md:text-6xl font-bold">{t('Quality Mills Equipment & Tools')}</p>
            <p className="text-gray-600 mb-8 mt-4 font-semibold">
              {t('Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels.')}
            </p>
            <div className="flex items-center justify-center -ml-12">
              <button
                className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-yellow-600 transition duration-200"
                onClick={changeLanguage}
              >
                {t('Start your search')}
              </button>
            </div>
          </div>

          <div className="md:flex flex-col flex-1 hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 row-span-1">
                <img
                  src={FeedGrinder}
                  alt="Image 1"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="col-span-1 md:row-span-2">
                <img
                  src={ChocolatePump}
                  alt="Image 2"
                  className="rounded-lg shadow-xl h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <img
                  src={FilteringGrain}
                  alt="Image 3"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 mt-4 ml-2 mr-2 flex-row rounded-3xl"> 
          <div className='p-3'>
            <div className="p-12">
              <p className="text-2xl font-bold">{t('Machineries we Provide')}</p>
              <p className="text-gray-600 mt-2">
                {t('Contact us in case you need help with a specific machine')}
              </p>
              <div className="flex gap-2 mt-8 flex-wrap p-3">
                {['Grinder', 'Feeder', 'Filtering', 'Halawi', 'Chocolate', 'Mills', 'Nuts', 'Tahina', 'Thyme and Spices'].map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-2 rounded text-sm ${selectedType === type ? 'bg-yellow-500 text-white' : 'text-black'} hover:text-gray-800 focus:outline-none transition duration-150`}
                    onClick={() => handleTypeChange(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

                {machines.map((machine) => (
                  <MachineItem
                    key={machine.id}
                    machine={machine.data}
                    name={machine.data.name}
                  />
                ))}


              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Home;
