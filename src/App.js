import { BrowserRouter, Link, Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Info from './pages/Info';
import VodFooter from './components/VodFooter';
import NotFound from './pages/NotFound';


function App() {
   return (
<BrowserRouter>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/info/:id' element={<Info/>}/>
<Route path='/*' element={<NotFound/>}/>
</Routes>
 <VodFooter/>
</BrowserRouter>

 
   
  );
}

export default App;
