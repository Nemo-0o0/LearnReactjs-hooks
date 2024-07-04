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
    // useEffect(Callback)
    // - Goi callback moi khi component re-render
        -Goi callback sau khi component them element vao DOM
    // useEffect(Callback, [])
        - Chi goi callback 1 lan sau khi component mounted
    // useEffect(Callback, [deps])
 */
//----------------------------------------
// 1. Callback luon duoc goi sau khi component mounted


const tabs = ['posts', 'comments','albums'];
function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    console.log(type)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

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

            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
     );
}

export default Content;