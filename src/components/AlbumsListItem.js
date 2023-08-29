import Button from "./Button";
import ExpendablePanel from "./ExpendablePanel";
import { GiTrashCan } from 'react-icons/gi';
import {  useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem ({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation()

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }

    const header = 
        <>
        <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}><GiTrashCan /></Button>
        {album.title}
        </>;

    return (<ExpendablePanel key={album.id} header={header}>
        <PhotosList album={album}/>
    </ExpendablePanel>
)
}

export default AlbumsListItem;