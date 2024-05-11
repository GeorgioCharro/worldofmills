

function MachineItem({ machine, name }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={machine.imgUrls[0]} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {machine.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{machine.type}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{machine.location}</span>
      </div>
      <div className="px-6 pt-1 pb-2">
        <span className="text-lg">$ / night</span>
        <span className="block text-yellow-400 text-lg">{Array(Math.round(machine.rating)).fill('⭐')}</span>
      </div>
    </div>
  );
}

export default MachineItem;
