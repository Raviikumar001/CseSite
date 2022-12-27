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

import WhatsNew from './components/pages/whatsNews';
import AboutDepartment from './components/pages/AboutDepartment';
import Message from './components/pages/Message';
import Programme from './components/pages/programme';
import TimeTable from './components/pages/TimeTable';
import Services from './components/services';
import Notices from './components/microComponents/Notices';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Container style={{ minHeight: "75vh" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resources" element={<Services /> } />
          <Route path='//resources/notices' element={<Notices />} />
          <Route path="/noticeboard" element={<WhatsNew />} />
          <Route path="/department" element={<AboutDepartment />} />
          <Route path="/message" element={<Message />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/schedule" element={<TimeTable />} />
          <Route path="*/" element={<div>Error</div>} />

        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
