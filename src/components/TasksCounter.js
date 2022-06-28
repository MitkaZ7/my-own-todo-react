
const TasksCounter = (props) => {
  return (
    <div className="tasks__info">
      <div className="tasks__counters">
        <p className="tasks__counter counter">active:&nbsp;<span className="tasks__counter-current">0</span></p>
        <p className="tasks__counter counter">completed:&nbsp;<span className="tasks__counter-completed">0</span></p>
      </div>
    </div>
  )
}

TasksCounter.propTypes = {}

export default TasksCounter
