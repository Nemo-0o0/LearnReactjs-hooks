import { useLayoutEffect, useState } from 'react'


// useEffect 
// 1. Cap nhat lai state
// 2. Cap nhat lai DOM 
// 3. Render lại UI
// 4. gọi cleanup nếu dép thay đổi
// 5. gọi useEffect callback

//useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
 

function Content() {
    
    const [count, setCount] = useState(0)
    // useEffect
    // useEffect(() => {
    //     if (count > 3)
    //         setCount(0)
    // }, [count])

    // useLayoutEffect
    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
     );
}

export default Content;