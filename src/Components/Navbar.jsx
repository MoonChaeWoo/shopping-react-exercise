import '../Css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/MoonChaeWooLogo.png';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Navbar = ({auth, setAuth}) => {
    const navigate = new useNavigate();
    const [inputValue, setInputValue] = useState('');

    const goToLogin = () => {
        if(auth){
            setAuth(false);
        }else{
            navigate('/login');
        }
    };

    const searchProduct = (e) => {
        if(e.code === 'Enter'){
            navigate(`https://my-json-server.typicode.com/MoonChaeWoo/shopping-react-exercise/products?id=${e.target.value}`);
        }
    };

    const navContent = ['여성', '날씨', '남성', '신생아/유아', 'Sale', '지속가능성'];

  return (
    <div className='nav-container'>
        <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser}/>
            <div>{auth ? '로그아웃' : '로그인'}</div>
        </div>
        <div className='nav-logo-section'>
            <img src={logo} style={{width : 'auto', height : '100%', cursor : 'pointer'}} onClick={() => navigate('/')}/>
        </div>
        <div className='nav-navigation'>
            <div className='nav-navigation-ul-container'>
                <ul className='nav-ul'>
                    { navContent.map((value, index) => <li key={index}>{value}</li>) }
                </ul>
                <div className='nav-search'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder='검색어를 입력하시오' onChange={(e) => {setInputValue(e.target.value)}} onKeyDown={searchProduct} value={inputValue}/>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default Navbar