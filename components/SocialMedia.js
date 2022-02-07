
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from "framer-motion"

import styles from './SocialMedia.module.scss'

const SOCIAL_MEDIA = [
    {
        id: 1,
        icon: '/icons/icon-instagram.svg',
        link: 'https://www.instagram.com/vive.vio'
    },
    {
        id: 2,
        icon: '/icons/icon-twiiter.svg',
        link: 'https://twitter.com/vive_vio'
    },
    {
        id: 3,
        icon: '/icons/icon-medium.svg',
        link: 'https://medium.com/@vivevio'
    },
    {
        id: 4,
        icon: '/icons/icon-github.svg',
        link: 'https://github.com/vivevio'
    },
    {
        id: 5,
        icon: '/icons/icon-youtube.svg',
        link: 'https://www.youtube.com/channel/UCQ8WKujzEF4owBy2EN7yBag'
    }
];

const SocialMedia = () => {

    const lineControl = useAnimation()

    const onHoverAnimationStart = () => {
        // lineControl.start({
        //     transform: 'scaleX(0.2)',
        //     transformOrigin: 'bottom right'
        // })
    }

    const onHoverAnimationEnd = () => {
        // lineControl.start({
        //     transform: 'scaleX(1)',
        // })
    }

    return (
        <ul className={styles.listSocialMedia}>
            <li><motion.div animate={lineControl} className="line" /></li>
            {
                SOCIAL_MEDIA.map((row) => {
                    return (
                        <li key={row.id}>
                            <motion.div
                                animate={{opacity: 0.65}}
                                whileHover={{ scale:1.1, opacity: 1 }}
                                onHoverStart={onHoverAnimationStart}
                                onHoverEnd={onHoverAnimationEnd}
                            >
                            <a href={row.link} target="_blank" rel='noreferrer'>
                                <Image src={row.icon} width={25} height={25} />
                            </a>
                            </motion.div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SocialMedia
