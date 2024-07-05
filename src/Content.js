import { useEffect, useState } from 'react'

// Events: Add / Remove event listener
// Observer pattern; Subscribe / unsubscribe
// Closure
// timer: setInterval, setTimeout, clearInterval, clearTimeout
// useState
//Mounted / unMounted
// ===
// Call API

/**
 1.Update DOM
    - F8 blog title
2. Call API
3.Listen DOM event
`   -Scroll 
    -Resize
4. Cleanup
    -Remove listener / unsubscribe
    -clear timer
 * 
//---------------------------------------------------------------------------------------------------
    // 1.useEffect(Callback)
    // - Goi callback moi khi component re-render
        -Goi callback sau khi component them element vao DOM
    // 2.useEffect(Callback, [])
        - Chi goi callback 1 lan sau khi component mounted
    // 3.useEffect(Callback, [deps])
 */
//----------------------------------------
// 1. Callback luon duoc goi sau khi component mounted
// 2. Cleanup Function luon duoc goi truoc khi component unmouted


function Content() {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
            console.log('handleResize')
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log('cleanup')
        }

    }, [])

    return ( 
        <div>
           <h1>{width}</h1>
        </div>
     );
}

export default Content;