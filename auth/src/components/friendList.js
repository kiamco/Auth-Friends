import React, {
    useState
} from 'react';
import { AxiosWithAuth } from './axiosWithAuth';

const FriendsList = props => {

    const [friendData, setFriendData] = useState([]);
    const getData = () => {
        AxiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res.data);
                setFriendData(res.data)
            })
            .catch(err => console.log(err));
    }

    return (
        <h1>Friends List</h1>
    
    );
}

export default FriendsList;