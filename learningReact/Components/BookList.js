import React,{useContext} from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const BookList = () => {
    const { isLightTheme, light , dark} = useContext(ThemeContext);
    const theme= isLightTheme?light:dark;
    return ( 
        <div className='book-list' style={{color:theme.syntax, background:theme.bg}}>
                <ul>
                    <li style={{background:theme.ui}}>Book1</li>
                    <li style={{background:theme.ui}}>Book2</li>
                    <li style={{background:theme.ui}}>Book3</li>
                </ul>
            </div>
     );
}
 
export default BookList;