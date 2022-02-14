import { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios';

const ApiCall = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [books, setBooks] = useState({})
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setLoading(true)
        setError(false)

        axios.get('https://randomuser.me/api?page=' + pageNumber + '&results=12').then((res) => {
            setBooks(res.data.results);
            console.log(books);
        })
    }, []);
    return (
        <div className='App' >

            <div>{error && 'Error...'}</div>
        </div >
    )
}

export default ApiCall;