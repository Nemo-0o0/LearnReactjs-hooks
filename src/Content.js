import { memo } from 'react'
function Content({ count }) {

    return ( 
        <h2>Hien Thi: {count} </h2>
     );
}

export default memo(Content);