import { AiFillHome, AiOutlineShopping,AiOutlineShoppingCart } from 'react-icons/ai';
 const NavRoute = [
    {
        link:'/',
        label:'Products',
        icons: <AiOutlineShopping/>
    },
    {
        link:'/cart',
        label:'Cart',
        icons: <AiOutlineShoppingCart/>
    }
]

export default NavRoute