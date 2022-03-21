import React, {useCallback, useState, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import Loader from "../components/Loader";
import LinkCard from "../components/LinkCard";
import {useHttp} from "../hooks/http.hook";

const DetailPages = () => {
    const {token} = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [link, setLink] = useState(null);
    const linkId = useParams().id;

    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorization: `Bearer ${token}`,
            });
            setLink(fetched);
        } catch (e) {}
    }, [linkId, token, request]);

    useEffect(() => {
        getLink()
    }, [getLink]);

    if(loading){
        return <Loader />
    }

    return (
        <div>
            {link && <LinkCard link={link}/>}
        </div>
    );
};

export default DetailPages;
