import type { Meta, StoryObj } from '@storybook/react'
import { Task } from './Task'
import * as React from 'react'
import { useLayoutEffect } from 'react'
import { ReduxStoreProviderDecorator } from '../../../../stories/ReduxStoreProviderDecorator'
import { useSelector } from 'react-redux'
import { AppRootStateType, useAppDispatch } from '../../../../app/store'
import { addTask } from '../../model/tasksSlice'
import { TaskStatuses, TodoTaskPriorities } from '../../../../common/enums/enums'
import { TaskType } from '../../todolistAPI/todolistAPI.types'

const meta: Meta<typeof Task> = {
  title: 'Todolist/Task',
  component: Task,
  decorators: [ReduxStoreProviderDecorator],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Task>

export const TaskIsNotDoneStory: Story = {
  args: {
    task: {
      id: '1',
      status: TaskStatuses.New,
      title: 'XP',
      todoListId: 'todolistId1',
      description: '',
      priority: TodoTaskPriorities.Low,
      order: 0,
      addedDate: '',
      startDate: '',
      deadline: '',
    },
    todolistId: 'todolistId1',
  },
}

export const TaskIsDoneStory: Story = {
  args: {
    task: {
      id: '1',
      status: TaskStatuses.Completed,
      title: 'XP',
      todoListId: 'todolistId1',
      description: '',
      priority: TodoTaskPriorities.Low,
      order: 0,
      addedDate: '',
      startDate: '',
      deadline: '',
    },
    todolistId: 'todoId2',
  },
}

const TaskWithRedux = () => {
  let task = useSelector<AppRootStateType, TaskType>((state) => state.tasks['todolistId1'][0])
  const dispatch = useAppDispatch()

  if (!task)
    task = {
      id: '1',
      status: TaskStatuses.New,
      title: 'XP',
      todoListId: 'todolistId1',
      description: '',
      priority: TodoTaskPriorities.Low,
      order: 0,
      addedDate: '',
      startDate: '',
      deadline: '',
    }
  useLayoutEffect(() => {
    console.log(task)
    if (task.id === 'fake') {
      dispatch(addTask({ todolistId: 'todolistId1', title: 'DEFAULT' }))
    }
  }, [task, dispatch])

  return <Task task={task} todolistId={'todolistId1'} entityStatus={'idle'} />
}

export const TaskToggleStory: Story = {
  render: () => <TaskWithRedux />,
}
