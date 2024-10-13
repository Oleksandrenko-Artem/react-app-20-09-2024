import Task from './components/Task/Task';
import Comment from './components/Comment/Comment';

const dataTask = {
  id: 1,
  text: 'Learning prop-types',
  days: 4,
  isDone: false
}
const dataComment = {
  id: 1,
  content: 'cool!',
  amountLike: 135,
  isNew: true
}
function App() {

  return (
    <>
      <Task dataTask={dataTask} />
      <Comment dataComment={dataComment}/>
    </>
  )
}

export default App
