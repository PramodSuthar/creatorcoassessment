import { useEffect, useState, useCallback, useRef } from 'react'
import UserCard from '../UserCard/UserCard';
import { Content, Loading } from './ApiCall.styles';

function ApiCall() {
    const [pageNumber, setPageNumber] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

        if (scrollHeight - scrollTop === clientHeight) {
            setPageNumber(prev => prev + 1);
        }
    };

    const getUsers = async pageNumber => {
        const users = await (
            await fetch(`https://randomuser.me/api/?page=${pageNumber}&results=25`)
        ).json();
        return users.results;
    };

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            const newUsers = await getUsers(pageNumber);
            setUsers((prev) => [...prev, ...newUsers]);
            setLoading(false);
        };

        loadUsers();
    }, [pageNumber]);

    return (
        <div className='App'>
            <Content onScroll={handleScroll}>
                {users && users.map((user) => <UserCard key={user.cell} user={user} />)}
            </Content>
            {loading && <Loading>Loading ...</Loading>}
        </div>
    );

}

export default ApiCall;