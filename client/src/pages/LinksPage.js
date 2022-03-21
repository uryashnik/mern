import React, {useContext, useEffect, useState, useCallback} from 'react';
import {AuthContext} from '../context/AuthContext';
import Loader from '../components/Loader';
import LinksList from '../components/LinksList';
import {useHttp} from '../hooks/http.hook';

const LinksPage = () => {
    const [links, setLinks] = useState([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = request('/api/link', 'GET', null, {Authorization: `Bearer ${token}`});
            setLinks(fetched);
        } catch (e) {}
    }, [token, request]);

    useEffect(() => {
        fetchLinks();
    }, [fetchLinks]);

    if (!loading) {
        return <Loader />;
    }
    console.log('loading: ', loading);
    return (
        <>
            {null}
            {/*<LinksList links={links}/>*/}
        </>
    );
};

export default LinksPage;
