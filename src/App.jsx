import { useState } from 'react'

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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Container style={{ minHeight: "75vh" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
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
