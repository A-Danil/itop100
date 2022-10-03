function loaderOn(){
  return {
    type: "LOADER_DISPLAY_ON"
  }
}

function loaderOff(){
  return {
    type: "LOADER_DISPLAY_OFF"
  }
}

function errorOn(text){
  return {
    type: "ERROR_DISPLAY_ON",
    text
  }
}

export function dataLoad(){
  return async dispatch => {
    try{
      dispatch(loaderOn())
      const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
      const jsonData = await response.json();

      setTimeout(()=>{
        dispatch({
          type: "DATA_LOAD",
          data: jsonData
        })
        dispatch(loaderOff());
      }, 2000)
    } catch (err){
        dispatch(errorOn('Ошибка АРІ'));
        dispatch(loaderOff());
    }
    
  }
}
