import { useState } from 'react'
//fonts import
import './fonts/Messina.ttf'
import './fonts/MessinaSans-Bold.ttf'
import './fonts/MessinaSemiBold.ttf'

// import './App.css'
import Header from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Fotter';

import { Container } from "react-bootstrap";
import Home from './pages/Home';

import SigninT from './components/microComponents/SigninT';
import AboutDepartment from './components/pages/AboutDepartment';
import Form from './components/pages/Form';
import Programme from './components/microComponents/programme';
import TimeTable from './components/microComponents/TimeTable';
import Services from './components/services';
import Notices from './components/microComponents/Notices';
import Results from './components/microComponents/Results';
import Results23 from './components/microComponents/results23';
import Academics from './components/pages/Academics';
import Learn from './components/microComponents/Learn';
import Syllabus from './components/microComponents/syllabus';
import People from './components/pages/People';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Container style={{ minHeight: "75vh" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resources" element={<Services /> } />
          <Route path='/resources/notices' element={<Notices />} />
          <Route path='/resources/results' element={<Results />} />
          <Route path='/resources/learn' element={<Learn />} />
          <Route path='/resources/results/result2023' element={<Results23 /> } />

          <Route path='/academics' element={<Academics />} />

          <Route path="/academics/programme" element={<Programme />} />
          <Route path='/academics/schedule' element={<TimeTable />} />
          <Route path='/academics/syllabus' element={<Syllabus />} />
          
          <Route path='/people' element={<People />} />

          <Route path='/people/admin' element={<Form />} />
          <Route path='/people/admin/forgotcredentials' element={<SigninT />} />


          <Route path="/about" element={<AboutDepartment />} />
      
          <Route path="/programme" element={<Programme />} />
          <Route path="/schedule" element={<TimeTable />} />
          <Route path="*" element={<div>Error</div>} />

        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
