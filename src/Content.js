import { memo } from 'react'
function Content( {onIncrease}) {
    console.log('render')
    return ( 
       <>
            <h2>hello</h2>
            <button onClick={onIncrease}>Click me</button>
       </>
     );
}

export default memo(Content);