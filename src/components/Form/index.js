import { useEffect, useState } from "react";
import { SwapOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import './Form.scss';

function Form() {
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');
  const [rateFrom, setRateFrom] = useState(0);
  const [rateTo, setRateTo] = useState(0);

  const data = useSelector(state => {
    const { dataReducer } = state;
    return dataReducer.data;
  })

  useEffect(()=>{
    data.length && setRateFrom(data[0].buy);
    data.length && setRateTo(data[1].buy)
  }, [data])

  //input change
  function handleChangeFrom(e){
    e.preventDefault();
    setValueFrom(e.target.value);
    setValueTo((rateFrom / rateTo * e.target.value).toFixed(2));
  }

  function handleChangeTo(e){
    e.preventDefault();
    setValueTo(e.target.value);
    setValueFrom((rateTo / rateFrom * e.target.value).toFixed(2));
  }

  //select change
  function selectFromChange(e){
    setRateFrom(e.target.value);
    setValueTo((e.target.value / rateTo  * valueFrom).toFixed(2));
  }

  function selectToChange(e){
    setRateTo(e.target.value);
    setValueFrom((e.target.value / rateFrom * valueTo).toFixed(2));
  }

  return (
    <div className="form">
      <div className="form__content">
        <h2 className="form__header">Change your currency</h2>
        <div>
          <input 
            type="number" 
            value={valueFrom} 
            onChange={handleChangeFrom} 
            placeholder='Exchange from...'
          />

          <select onChange={selectFromChange} value={rateFrom}>
            {data && data.map(el => (
              <option key={el.ccy} value={el.buy} >
                {el.ccy}
              </option>
            ))}
          </select>
        </div>

        <SwapOutlined style={{fontSize: '4rem', color: '#502d55'}}/>

        <div>
          <input
            type="number"
            value={valueTo}
            onChange={handleChangeTo}
            placeholder='Exchange to...'
          />
          <select onChange={selectToChange} value={rateTo}>
            {data && data.map(el => (
              <option key={el.ccy} value={el.buy}>
                {el.ccy}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Form;