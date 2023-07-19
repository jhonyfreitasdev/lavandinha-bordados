import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Products } from '../pages/products';
import { Contact } from '../pages/contact'

export const AppRoutes = () => (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/sobre' element={<About />} />
        <Route exact path='/produtos' element={<Products />} />
        <Route exact path='/sobre' element={<Contact />} />
    </Routes>
)