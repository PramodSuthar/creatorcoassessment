import { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios';

const ApiCall = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(12);

    useEffect(() => {
        setBooks([]);
    }, [pageNumber])


    const observer = useRef()
    const lastBookElementRef = useCallback(node => { //useCallback to initiate a Callback function attached to the useRef 
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'https://randomuser.me/api?page=1&results={pageNumber}',

            cancelToken: new axios.CancelToken(c => cancel = c)
        }).

            setHasMore(res.data.docs.length > 0)
        setLoading(false);
        console.log(res.data);

    }).catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
    })
    return () => cancel
}, [pageNumber]);
return (
    <div className='App' >
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
    </div >
)
}

export default ApiCall;