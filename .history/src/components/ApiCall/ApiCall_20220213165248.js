import { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios';

const ApiCall = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [books, setBooks] = useState({})
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);


    const fetchUsers = () => {
        setLoading(true)
        setError(false)

        axios.get('https://randomuser.me/api?page=' + pageNumber + '&results=12').then((res) => {
            console.log(res.results);
        })
    }

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

        axios.get('https://randomuser.me/api?page=' + pageNumber + '&results=12').then((res) => {

            console.log(res.results);
        })

    }, []);
    return (
        <div className='App' >

            <div>{error && 'Error...'}</div>
        </div >
    )
}

export default ApiCall;