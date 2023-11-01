import React from 'react';
import ForgotPassword from './components/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import {  LoginPage, Register, Chatbot, Cards,  Quiz, Test, Quizpage,} from './components';
import Hero from './components/Hero'; 
import OTPFORM from './components/OTPFORM';


function App() {
  return (

    <div>
      <Router>
        
    <Routes>
      <Route path='/otpform' element={<OTPFORM/>} />
      <Route path='/' element={<Hero/>} />
      <Route path="/Chatbot" element={<Chatbot/>} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} /> 
      <Route path='/Cards' element={<Cards/>}/>
      <Route path='/quiz' element={<Quiz/>} />
      <Route path='/test' element={<Test/>} />
      <Route path='/quizpage' element={<Quizpage/>} />
    </Routes>
    
    
  </Router>
  

  
  
  </div>
  


    
  );
}

export default App;
// import React from 'react';
// import ForgotPassword from './components/ForgotPassword';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// import {  LoginPage, Register, Chatbot, Cards,  Quiz, Test, Quizpage,} from './components';
// import Hero from './components/Hero'; 
// import OTPFORM from './components/OTPFORM';


// function App() {
//   return (

//     <div>
//       <Router>
        
//     <Routes>
//       <Route path='/otpform' element={<OTPFORM/>} />
//       <Route path='/' element={<Hero/>} />
//       <Route path="/Chatbot" element={<Chatbot/>} />
//       <Route path="/LoginPage" element={<LoginPage />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} /> 
//       <Route path='/Cards' element={<Cards/>}/>
//       <Route path='/quiz' element={<Quiz/>} />
//       <Route path='/test' element={<Test/>} />
//       <Route path='/quizpage' element={<Quizpage/>} />
//     </Routes>
    
    
//   </Router>
  

  
  
//   </div>
  


    
//   );
// }

// export default App;
