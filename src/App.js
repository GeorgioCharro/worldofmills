// App.js
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" mt-2 ml-2 mr-2 md:ml-20 md:mr-20">
      
      
      <SearchBar />
      
      <Header />
      
      <hr className="w-full border md:-mt-6 " />
      <div className="mt-12"><Home /></div>
      
    </div>
  );
}

export default App;
