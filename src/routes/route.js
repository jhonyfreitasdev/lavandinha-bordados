import { Routes, Route } from 'react-router-dom';
import { About } from '../pages/about';
import { Products } from '../pages/products';
import { Contact } from '../pages/contact'

export const AppRoutes = () => (
    <Routes>
        <Route exact path='/' element={<About />} />
        <Route exact path='/produtos/:id' element={<Products />} />
        <Route exact path='/contato' element={<Contact />} />
    </Routes>
)