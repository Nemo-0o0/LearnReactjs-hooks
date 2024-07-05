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


const tabs = ['posts', 'comments','albums'];
function Content() {

    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    console.log(type)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY >= 200) {
                // show
                setShowGoToTop(true)
                console.log('set State')
            } else {
                // hiden
                setShowGoToTop(false)
                
                
            }

            // setShowGoToTop(window.scrollY >= 200)
            // có thể dùng cách này thay cho If else
        }

        window.addEventListener('scroll', handleScroll)

        //CleanUp function
        return () => {
            console.log('Umounting....')
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return ( 
        <div>
            {tabs.map(tab => (
                <button 
                key={tab}
                style={type === tab ? {color: "#000", background: 'red'} : {}}
                onClick={() => setType(tab)}
                >{tab}
                </button>
            ))}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button style={{position: 'fixed', right: 20, bottom:20, background: 'red'}}>
                   Go To Top 
                </button>
            )}
        </div>
     );
}

export default Content;