import React, { useEffect, useState, useContext } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase.config';
import { useTranslation } from 'react-i18next';
import Animation from '../components/Animation';
import FeedGrinder from '../media/png/animalfeed/feedgrinder.png';
import ChocolatePump from '../media/png/chocolate/chocolatepump.jpg';
import FilteringGrain from '../media/png/filtering/grainfilteringline.png';
import MachineItem from '../components/MachineItem';
import { LanguageContext } from '../contexts/LanguageContext';

function Home({ searchClickHandlerRef }) {
    const [selectedType, setSelectedType] = useState('Feeder');
    const { t, i18n } = useTranslation();
    const { language } = useContext(LanguageContext);
    const [machines, setMachines] = useState(null);
    const [loading, setLoading] = useState(true);

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
    }, [selectedType, language]);

    const machineTypes = ['Feeder', 'Filtering', 'Halawi', 'Chocolate', 'Mills', 'Nuts', 'Tahina', 'Thyme and Spices'];

    return (
        loading ? (
            <Animation />
        ) : (
            <>
                <div className="flex mt-12 flex-col md:flex-row justify-evenly m-4 p-4">
                    <div className="flex-col flex flex-1 md:mr-2 mb-8 md:mb-0 ml-8 ">
                        <p className="text-4xl md:text-6xl mt-10 font-bold">{t('Quality Mills Equipment & Tools')}</p>
                        <p className="text-gray-600 mb-8 mt-4 text-xl ">
                            {t('Accompanying us, you have a trip full of experiences. With WorldOfMills, Your Partner in Industrial Milling and Processing Solutions')}
                        </p>
                        <div className="relative flex items-center justify-center p-10 -ml-9 ">
                            <div className="absolute top-0 left-0 transform md:-translate-y-2/3 md:size-64 size-56 -translate-y-20 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
                            <div className="absolute bottom-0 right-0 transform md:-translate-y-2/3 md:size-64 size-56 -translate-y-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>

                            <button
                                className="z-10 bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-yellow-600 transition duration-200"
                                onClick={() => searchClickHandlerRef.current && searchClickHandlerRef.current()}
                            >
                                {t('Start your search')}
                            </button>
                        </div>
                    </div>

                    <div className="md:flex flex-col flex-1 hidden mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-1 row-span-1">
                                <img src={FeedGrinder} alt="FeedImage" className="rounded-lg shadow-xl" />
                            </div>
                            <div className="col-span-1 md:row-span-2">
                                <img src={ChocolatePump} alt="ChocolateImage" className="rounded-lg shadow-xl h-full object-cover" />
                            </div>
                            <div className="col-span-1 row-span-1">
                                <img src={FilteringGrain} alt="FilteringImage" className="rounded-lg shadow-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 mt-4 ml-2 mr-2 flex-row rounded-3xl flex justify-center items-center">
                    <div className='w-full max-w-4xl p-8'>
                        <p className="text-3xl font-bold text-center ">{t('Machineries we Provide')}</p>
                        <p className="text-gray-600 text-lg mt-2 text-center">
                            {t('Contact us in case you need help with a specific machine')}
                        </p>
                        <div className="flex gap-2 mt-8 flex-wrap justify-center font-bold">
                            {machineTypes.map((type) => (
                                <button
                                    key={type}
                                    className={`px-4 py-2 rounded text-lg ${selectedType === type ? 'bg-yellow-500 text-white rounded-full' : 'text-black'} hover:text-gray-800 focus:outline-none transition duration-150`}
                                    onClick={() => handleTypeChange(type)}
                                >
                                    {t(type)}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center -mx-4">
                            {machines.map((machine) => (
                                <MachineItem
                                    key={machine.id}
                                    machine={machine.data}
                                    name={language === 'ar' ? machine.data.machineName_ar : machine.data.machineName}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    );
}

export default Home;
