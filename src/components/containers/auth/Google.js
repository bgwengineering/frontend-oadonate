import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { googleAuthenticate } from 'store/actions/auth/Social';
import queryString from 'query-string';

const Google = () => {
    const dispatch = useDispatch();
    let location = useLocation();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            dispatch(googleAuthenticate(state, code));
        }
    }, [location]);

    return (
        <div className='container'>
            <div class='jumbotron mt-5'>
                <p>Click the Log In button</p>
                <Link class='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </div>
        </div>
    );
};

export default Google;