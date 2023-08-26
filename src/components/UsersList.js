import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import  Skeleton  from './Skeleton';

export default function UsersList() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => {
    return state.users;
  })

  
  useEffect(() => {
    dispatch(fetchUsers())
  },[dispatch]);
  
  if(isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />
  }
  if(error) {
    return <div>ERROR</div>
  }

  if(data) {
    return <div>{data.length}</div>
  }
  
  return 'Users List'
}