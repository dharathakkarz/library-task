


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors } from '../../redux/actions/author/AuthorAction';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing update and delete icons

const ManageAuthors = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authors: allAuthors, loading, error } = useSelector(state => state.authors);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAuthors, setFilteredAuthors] = useState([]);

    useEffect(() => {
        dispatch(fetchAuthors());
    }, [dispatch]);

    useEffect(() => {
        // search author 
        const filtered = allAuthors.filter(author =>
            author.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredAuthors(filtered);
    }, [allAuthors, searchQuery]);

    const goToDashboard = () => {
        navigate('/admin/dashboard');
    };

    const handleEdit = (authorName) => {
        // Handle edit action
    };

    const handleDelete = (authorName) => {
        // Remove the author from the list of authors
        const updatedAuthors = filteredAuthors.filter(author => author !== authorName);
        setFilteredAuthors(updatedAuthors);
        // You may also want to trigger a delete action to delete the author from the database
        // dispatch(deleteAuthor(authorName));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h1>List of Authors</h1>
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </form>
                <button
                    style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginRight: '15px', backgroundColor: 'transparent', cursor: 'pointer' }}
                    onClick={goToDashboard}
                >
                    Dashboard
                </button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {filteredAuthors.map(author => (
                    <div key={author} style={{ margin: '10px', width: '200px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', textAlign: 'center' }}>
                        <p>{author}</p>
                        <div>
                            <FaEdit style={{ cursor: 'pointer', marginRight: '5px' }} onClick={() => handleEdit(author)} />
                            <FaTrash style={{ cursor: 'pointer' }} onClick={() => handleDelete(author)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageAuthors;//not deleted
