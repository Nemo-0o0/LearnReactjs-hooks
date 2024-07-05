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
// 3. Cleanup Function luon duoc goi truoc khi callback duoc goi (tru lan mounted)


function Content() {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        // cleanup

        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return ( 
        <div>
            <input 
            type='file'
            onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width='80%' />
            )}
        </div>
     );
}

export default Content;