import { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper/Wrapper';
import Timer from './components/Timer/Timer';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setIsOpenModal(true);
    }, 2000);
    return () => {
      clearTimeout(idTimeOut);
    };
  }, []);
  const closeModal = () => {setIsOpenModal(false)}
  return (
    <>
      {isOpenModal &&
        (<ModalWindow closeModal={closeModal}>
        <h3>modal window</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt eos porro consectetur provident asperiores.</p>
      </ModalWindow>)}
      <Wrapper>
        <Timer/>
      </Wrapper>
      <Wrapper>
        <h2>Hi!</h2>
      </Wrapper>
      <Wrapper>
        <h2>Hello!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto modi nulla eveniet quasi aperiam. Asperiores omnis ea voluptatum facilis.</p>
      </Wrapper>
    </>
  )
}

export default App
