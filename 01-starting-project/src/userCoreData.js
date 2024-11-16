// useCoreData.js
import { useState, useEffect } from 'react';
import { coreData } from './data.js';

const useCoreData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(coreData);
    }, []);

    return data;
};

export default useCoreData;
