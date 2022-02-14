import { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios';

const ApiCall = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

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
        axios.get('https://randomuser.me/api?page=' + pageNumber + '&results=12')
            .then(({ }) => {
                console.log(res.data.results);
                //returns a list of old books and new books and will only return unique values since we are using set 
            })


    }).catch(e => {
        if (axios.isCancel(e)) return
        setError(true)

    })
    return () => cancel
}, []);
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