import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header/Header';
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import UsersPage from './pages/UsersPage';



function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        
        {/* Сторінка Not found завжди остання!!! */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <footer>2024</footer>
    </BrowserRouter>
  )
}

export default App
