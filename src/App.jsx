import { useState } from 'react';
import Timer from "./components/Timer/Timer";


function App() {
  const [show, setShow] = useState(false);
  const changeShow = () => setShow(!show);
  return (
    <>
      <button onClick={changeShow}>swith show timer</button>
      {show && <Timer/>}
    </>
  )
}

export default App
