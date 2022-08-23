import React, { useState } from 'react'
import FormAddTask from './FormAddTask';
import TaskItem from './TaskItem';
import TasksCounter from './TasksCounter';
import EmptyPlug from './EmptyPlug';
import { useSelector } from 'react-redux'
import Confetti from './Confetti'
const TasksList = () => {
  const { activeQty } = useSelector(state => state.counter);
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
          <TasksCounter/>
          <Confetti isCompletedAll={activeQty === 0 ? true : false} />
        </section>
        </main>
    )
}
export default TasksList;
