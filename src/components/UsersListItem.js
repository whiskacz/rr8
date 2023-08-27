import React from 'react';
import { GiTrashCan } from 'react-icons/gi';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import ExpendablePanel from './ExpendablePanel';
import AlbumsList from './AlbumsList';


export default function UsersListItem( {user} ) {

    const [doRemoveUser, isLoading, error] = useThunk(removeUser)

    const handleClick = () => {
        doRemoveUser(user)
    }

    const header = <>
        <Button className="mr-3" loading={isLoading} onClick={handleClick}>
                <GiTrashCan />
            </Button>
            {error && <div>Error deleting User</div>}
            {user.name}     
    </>

    return (
      
        <ExpendablePanel header={header}>
            <AlbumsList user={user} />
        </ExpendablePanel>
            
      )
}
