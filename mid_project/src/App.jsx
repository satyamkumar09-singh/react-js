
import Page1 from './coponent/Page1.jsx';
import Page2 from './coponent/Page2.jsx';
import Nav from './coponent/Nav.jsx';
//import Alldata from './coponent/Alldata.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './coponent/Dashboard.jsx';
import Product from './coponent/product.jsx';
function App() {
  

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/page1' element={<Page1/>}></Route>
          <Route path='/page2' element={<Page2/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
        </Routes>
      </Router>
        
    </>
  )
}

export default App
