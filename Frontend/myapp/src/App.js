import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import AgentPackages from './Components/AgentPackages';
import 'bootstrap/dist/css/bootstrap.css';
import PackageView from './Components/PakageView';
import BookingForm from './Components/BookingForm';
import AddPackageForm from './Components/AddPackageForm';
import AgentRegister from './Components/AgentRegister';
import TravellerRegister from './Components/TravellerReg';
import AdminViewAgents from './Components/AdminViewAgents';
import SearchPacks from './Components/SearchPacks';
import TravellerLand from './Components/TravellerLand';
import TravellerPackage from './Components/TravellerPackages';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='Login' element={<Login/>}/>
       <Route path='AgentReg' element={<AgentRegister/>}/>
       <Route path='TravellerReg' element={<TravellerRegister/>}/>
       {/* <Route path='BookForm' element={<BookingForm/>}/> */}
       <Route path='adminAgents' element={<AdminViewAgents/>}/> 
       <Route path='agentPacks' element={<AgentPackages/>}/>
       <Route path='Travellerhome' element={<TravellerLand/>}/>
       <Route path = 'AddPack' element={<AddPackageForm/>}/>
       <Route path='search' element={<SearchPacks/>}/>
       <Route path='book' element={<BookingForm/>}/>

       

       </Routes>
       </BrowserRouter>
       
    </div>
  );
}

export default App;
