import React, { useEffect } from  'react';

function useTitle(record) {
    useEffect(() => {
        document.title = `Record ${record}`
    }, [record])
}

export default useTitle