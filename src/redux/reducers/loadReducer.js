const initialState = {
  load: false,
  error: null
}

export const loadReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOADER_DISPLAY_ON":
      return {
        ...state,
        load: true
      }
  
    case "LOADER_DISPLAY_OFF":
      return {
        ...state,
        load: false
      }

    case "ERROR_DISPLAY_ON":
      return {
        ...state,
        error: action.text
      }

    default: 
      return state
  }

}