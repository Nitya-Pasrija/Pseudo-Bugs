import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ReportBox from './pages/ReportBox';
import Achivements from './pages/Achivements';
import Profile from './pages/Profile';
import Employees from './pages/Employees';
import ReportHome from './pages/NewHome'
import NewHome from './pages/NewHome';
import Freelancer from './pages/Freelancer';
import CompanyList from './pages/CompanyList';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/companyList' element={<CompanyList/>}/>
          <Route path='/freelancer' element={<Freelancer/>}/>
          <Route path='/reportHome' element={<ReportHome/>}/>
          <Route path='/' element={<NewHome/>}/>
          <Route path='/reportBox' element={<ReportBox/>}/>
          <Route path='/achivements' element={<Achivements/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/employees' element={<Employees/>}/>
        </Routes>
    </BrowserRouter>
  );
}


export default App;
