import { useEffect, useState } from 'react'
import styles from './Message.module.css'

function Message({type, msg}) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        if(!msg) {
            setVisible(false);
            return;
        }

        const timer = setTimeout(() => {
            setVisible(true)
        }, 3000)

        return () => clearInterval(timer)
    }, [msg])


    return (
        <>
            {!visible && (
            <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    )
}

export default Message