
import FormAddTask from './FormAddTask';
import Task from './Task';
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
          <div className="plug section__plug">
            <p className="plug__text">no current tasks, please add them</p>
          </div>
          <div className="tasks__info">
            <div className="tasks__counters">
              <p className="tasks__counter counter">active:&nbsp;<span className="tasks__counter-current">0</span></p>
              <p className="tasks__counter counter">completed:&nbsp;<span className="tasks__counter-completed">0</span></p>
            </div>
          </div>
        </section>
        </main>
    )
}
export default Tasks;
