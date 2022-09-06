import React, {useEffect, useCallback, useState} from 'react'
import useAxios from './useAxios'
import NinjaApi from '../api/api';

const useCountry = () => {
    const [data, loading, error, fetch] = useAxios(NinjaApi);
    const [toggle, setToggle] = useState(false);
    
    const refetch = useCallback(() => {
        setToggle(!toggle);
    }, [toggle]);

    useEffect(() => {
        const ctrl = new AbortController();
        fetch({
				url: "/api/v1/country",
        }, undefined, ctrl);

        return () => {
            ctrl.abort();
        }
    },[toggle]);

    return [data, loading, error, refetch] as const;
}

export default useCountry;