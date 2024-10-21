import { AppThunkType } from '../../../../app/store'
import { todolistAPI } from '../../todolistAPI/todolistAPI'
import { setTodolists } from '../todolistsSlice'
import { setAppStatus } from '../../../../app/reducers/appSlice'
import { handleServerNetworkError } from '../../../../common/utils/handleServerNetworkError'
import { fetchTasks } from '../tasksSlice'

export const getTodolistsTC = (): AppThunkType<Promise<void>> => async (dispatch) => {
  dispatch(setAppStatus({ status: 'loading' }))
  try {
    const todolists = await todolistAPI.getTodolist()
    dispatch(setTodolists({ todolists: todolists.data }))
    dispatch(setAppStatus({ status: 'succeeded' }))
    todolists.data.forEach((tl) => {
      dispatch(fetchTasks(tl.id))
    })
  } catch (e: any) {
    dispatch(setTodolists({ todolists: [] }))
    handleServerNetworkError(e, dispatch)
  } finally {
    dispatch(setAppStatus({ status: 'idle' }))
  }
}
