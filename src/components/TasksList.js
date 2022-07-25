
import FormAddTask from './FormAddTask';
import TaskItem from './TaskItem';
import TasksCounter from './TasksCounter';
import EmptyPlug from './EmptyPlug';
import { useSelector, useDispatch } from 'react-redux'
const TasksList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
    return (
        <main className="content">
        <section className="section tasks">
          <h1 className="section__title">Your tasks</h1>
          <FormAddTask />
          <ul className="tasks__list">
            {
              tasks.map((task) => <TaskItem key={task._id} {...task} />)
            }
          </ul>
          <EmptyPlug />
          <TasksCounter />
        </section>
        </main>
    )
}
export default TasksList;
