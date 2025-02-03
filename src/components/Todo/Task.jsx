import { mdiDelete } from '@mdi/js';
import { Icon } from '@mdi/react';
import { useDispatch } from 'react-redux';
import { deleteTask, toogleTaskIsDone } from '../../store/todoSlice';

const Task = (props) => {
    const { task } = props;
    const dispatch = useDispatch();
    const changeIsDone = () => { dispatch(toogleTaskIsDone({ id: task.id })) };
    const changeDelete = () => {
        dispatch(deleteTask({ id: task.id }));
    };
    return (
        <li>
            <strong onClick={changeIsDone} style={{textDecoration: (task.isDone && 'line-through')}}
            >
                {task.content}
            </strong>
            <span onClick={changeDelete}>
                <Icon path={mdiDelete} size={0.8} />
            </span>
        </li>
    );
}

export default Task;
