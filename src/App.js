import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Layout from './/Pages/Layout'
export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
  )
 }
// import React from 'react'
// import Basic from './EventClass/Basic'
// import Counter from './Counter'
// export default function App() {
//   return (
//     <>
//     <Basic/>
//     <Counter/>
//     </>
//   )
// }

