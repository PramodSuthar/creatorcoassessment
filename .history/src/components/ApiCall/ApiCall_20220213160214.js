import { useEffect, useState } from 'react'
import axios from 'axios';

const ApiCall = (query, pageNumber) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(12);

    useEffect(() => {
        setBooks([]);
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'https://randomuser.me/api?page=1&results={pageNumber}',
            params: { q: query, page: pageNumber }, //the value q and pageNumber variable will vary as per on the API
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setBooks(prevBooks => {
                return [...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])]//returns a list of old books and new books and will only return unique values since we are using set 
            })
            setHasMore(res.data.docs.length > 0)
            setLoading(false);
            console.log(res.data);

        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel
    }, [query, pageNumber]);
    return (
        <container className='App' >
            <input type="text" value={query} onChange={handleSearch}></input>
            {
                books.map((book, index) => {
                    if (books.length === index + 1) {
                        return <div ref={lastBookElementRef} key={book}>{book}</div>
                    }
                    else {
                        return <div key={book}>{book}</div>
                    }
                })
            }
            <div>{error && 'Error...'}</div>
        </container >
    )
}

export default ApiCall