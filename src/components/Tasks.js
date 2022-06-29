
import FormAddTask from './FormAddTask';
import Task from './Task';
import TasksCounter from './TasksCounter';
import EmptyPlug from './EmptyPlug';
const Tasks = (props) => {
    const tasks = props.tasks;

    return (
        <main className="content">
        <section className="section tasks">
          <h1 className="section__title">Your tasks</h1>
          <FormAddTask onSubmit={props.onTaskAdd}/>
          <ul className="tasks__list">
            {tasks.map((task) => {
              return (
                <Task
                key={task._id}
                task={task}
                onTaskClick={props.onTaskClick}
                onTaskDelete={props.onTaskDelete}
                />
              )
            })}

          </ul>
          <EmptyPlug />
          <TasksCounter />
        </section>
        </main>
    )
}
export default Tasks;
