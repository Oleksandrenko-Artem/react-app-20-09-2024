import Wrapper from './components/Wrapper/Wrapper';
import Timer from './components/Timer/Timer';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';


function App() {

  return (
    <>
      <Wrapper>
        <Timer/>
      </Wrapper>
      <Wrapper>
        <h2>Dropdown Menu!</h2>
        <DropdownMenu text='hi, user'>
          <p>Lorem, ipsum dolor.</p>
          <p>Molestias, illo facere!</p>
          <p>Animi, itaque nobis.</p>
        </DropdownMenu>
        <DropdownMenu text='type' widthList={300}>
          <p>Lorem, ipsum dolor.</p>
          <p>Molestias, illo facere!</p>
          <p>Animi, itaque nobis.</p>
        </DropdownMenu>
        <DropdownMenu text='links'>
          <p>Lorem, ipsum dolor.</p>
          <p>Molestias, illo facere!</p>
          <p>Animi, itaque nobis.</p>
        </DropdownMenu>
      </Wrapper>
      <Wrapper>
        <h2>Hello!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto modi nulla eveniet quasi aperiam. Asperiores omnis ea voluptatum facilis.</p>
      </Wrapper>
    </>
  )
}

export default App
