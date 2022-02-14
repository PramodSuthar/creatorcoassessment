import { useEffect, useState, useCallback, useRef } from 'react'
import axios from 'axios';

const ApiCall = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [books, setBooks] = useState([])
    const [allBooks, setAllBooks] = useState([])
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        (async () => {
            let userData;
            try {
                const response = await fetch("https://randomuser.me/api/?results=10");
                userData = await response.json();
            } catch (error) {
                console.log(error);
                userData = [];
            }
            setBooks(userData.results);
            setAllBooks(userData.results);
        })();
    }, []);
    return (
        <div className='App' >
            <div></div>
            <div>{error && 'Error...'}</div>
        </div >
    )
}

export default ApiCall;