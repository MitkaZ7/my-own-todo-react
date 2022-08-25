import React, { useState } from 'react'
import FormAddTask from './FormAddTask';
import TaskItem from './TaskItem';
import TasksCounter from './TasksCounter';
import EmptyPlug from './EmptyPlug';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/UserSlice';
import Confetti from './Confetti';
import { useAuth } from '../hooks/useAuth';
import Unauthorized from './Unauthorized';
const TasksList = () => {
  const { activeQty } = useSelector(state => state.counter);
  const tasks = useSelector(state => state.tasks.tasks);
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
    return !isAuth ? (
      <Unauthorized />
    ) : (
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
