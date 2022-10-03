const initialState = {
  data: []
}

export const dataReducer = (state = initialState, action) =>{
  switch (action.type){

    case "DATA_LOAD":
      const dataNew = action.data.map(res => {
        return {
          ccy: res.ccy,
          base_ccy: res.base_ccy,
          buy: res.buy,
          sale: res.sale
        }
      })
      return {
        ...state,
        data: [...dataNew.filter(el => el.ccy !=='BTC'), {ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1'} ]
      }

    default:
      return state
  }
}
