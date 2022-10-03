import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Space, Spin } from 'antd';

import { Header, Form } from "./components";
import { dataLoad } from "./redux/actions";

function App() {
   const dispatch = useDispatch();

  const loading = useSelector(state=> {
    const { loadReducer } = state;
    return loadReducer.load;
  });

  useEffect(()=>{
    dispatch(dataLoad())
  }, []);

  return (
    <div className="App">
      {loading ?
        <Space size="middle">
         <Spin size="large" className="spin"/>
       </Space> :
       <>
        <Header />
        <Form />
       </>
      }
    </div>
  );
}

export default App;
