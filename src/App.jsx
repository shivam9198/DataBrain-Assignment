import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepForm from './components/StepForm';
import ECommerce from './components/ECommerce';
import ApiDataList from './components/ApiDataList';
import NavBar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className=' w-full h-full bg-zinc-900 text-white relative '>
     
     <NavBar/>
      
      
      
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step-form" element={<StepForm />} />
        <Route path="/ecommerce" element={<ECommerce />} />
        <Route path="/api-data-list" element={<ApiDataList />} /> 
      </Routes> 
    
    </div>
   
  );
}

export default App;
