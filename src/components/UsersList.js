import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import  Skeleton  from './Skeleton';
import Button from './Button';
import { useThunk } from '../hooks/use-thunk'
import UsersListItem  from './UsersListItem';

function UsersList() {
  const [ doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);


  const { data } = useSelector((state) => {
    return state.users;
  });
      useEffect(() => {
      doFetchUsers()
    },[doFetchUsers]);
    const handleUserAdd = () => {
      doCreateUser()
    };
  
    let content;
  
  if(isLoadingUsers) {
  content = <Skeleton times={5} className="h-10 w-full" />
  } else if(loadingUsersError) {
    content =  <div>ERROR</div>
  } else {
    content = data.map((user) => {
    return <UsersListItem key={user.id} user={user} />
    });
  }
  
  if(data){
    return <div>
      <div className='flex flex-row justify-between items-center m-3'>
        <h1 className='m-2 text-xl'>Users</h1> 
        <Button onClick={handleUserAdd} loading={isCreatingUser}>
          + Add User
        </Button>
          {creatingUserError && "creating user error"}
      </div>
      {content}
    </div>
    } 
    return 'Users List';
};
export default UsersList