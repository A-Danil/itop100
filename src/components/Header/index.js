import { useSelector } from 'react-redux';

import logo from '../../assets/img/logo.png';

import './Header.scss';

function Header() {
  const data = useSelector(state => {
    const { dataReducer } = state;
    return dataReducer.data;
  })

  return (
    <header className="header">
      <div className="container">
        <div className='header__content'>
          <div className="header__logo">
            <img src={logo} alt='logo' />
          </div>
          <nav className='header__nav'>
            <ul>
              <li><a href='https://minfin.com.ua/currency/' target="_blank" rel="noopener noreferrer">Minfin</a></li>
              <li><a href='https://privatbank.ua/ru/rates-archive' target="_blank" rel="noopener noreferrer">Privat</a></li>
            </ul>
          </nav>

          <div className='header__exchange-rate'>
            {data && data.map(el=>(
              el.ccy !== 'UAH' ?
              <div className='heder__exchange-element' key={el.ccy}>
                <span>{el.ccy}</span>
                <p>{Number(el.buy).toFixed(2)}/{Number(el.sale).toFixed(2)}</p>
              </div> :
              null
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;