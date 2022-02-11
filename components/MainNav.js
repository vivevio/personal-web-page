import { Link } from 'react-scroll'
import { motion, useAnimation } from "framer-motion"

import styles from './MainNav.module.scss'

const _MENUS = [
    {
        id: 1,
        text: 'work',
        link: 'work'
    },
    {
        id: 2,
        text: 'about',
        link: 'about'
    },
    {
        id: 3,
        text: 'social media',
        link: 'social-media'
    }
];

const MainNav = () => {

    const lineControl = useAnimation()

    const onHoverAnimationStart = () => {
        lineControl.start({
            transform: 'scaleX(0.2)',
            left: '-98px',
            transformOrigin: 'bottom right'
        })
    }

    const onHoverAnimationEnd = () => {
        lineControl.start({
            transform: 'scaleX(1)',
            left: '-115px',
        })
    }

    return (
        <nav className={styles.MainNav}>
            <motion.div animate={lineControl} className="line" />
            { _MENUS.map((row) => {
                return (
                    <motion.div
                        key={row.id}
                        onHoverStart={onHoverAnimationStart}
                        onHoverEnd={onHoverAnimationEnd}
                    >
                        <Link to={row.link} smooth={true} duration={300}>{row.text}</Link>
                    </motion.div>
                )
            }) }
        </nav>
    )
}

export default MainNav
