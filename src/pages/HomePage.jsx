import TaskForm from '../components/Todo/TaskForm';
import TasksList from '../components/Todo/TasksList';
import Counter from './../components/Counter/Counter';

const HomePage = () => {
    return (
        <section>
            <h1>Home page</h1>
            <TaskForm />
            <hr />
            <TasksList />
            <hr />
            <Counter />
        </section>
    );
}

export default HomePage;
