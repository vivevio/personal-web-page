
import { useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation, AnimatePresence } from "framer-motion"

import styles from './AboutMe.module.scss'

function ImageFullLeft({isVisible}) {
    return (
        <AnimatePresence>
            { isVisible && <motion.img initial={{transform: 'scaleX(0.5)', opacity: 0}} animate={{opacity:1, transform: 'scaleX(1)'}} exit={{ opacity: 0, transform: 'scaleX(0.5)' }} src="/me-left-full.webp" className='me-full' width={129} height={210} /> }
        </AnimatePresence>
    )
}

function ImageFullRight({isVisible}) {
    return (
        <AnimatePresence>
            { isVisible && <motion.img initial={{transform: 'scaleX(0.5)', opacity: 0}} animate={{opacity:1, transform: 'scaleX(1)'}} exit={{ opacity: 0, transform: 'scaleX(0.5)' }} src="/me-right-full.webp" className='me-full image-right' width={129} height={210} /> }
        </AnimatePresence>
    )
}

const AboutMe = () => {

    const [showImageLeft, setImageLeft] = useState(false)
    const [showImageRight, setImageRight] = useState(false)
    const halfAnimateControlLeft = useAnimation()
    const halfAnimateControlRight = useAnimation()

    const onHoverHalfLeft = () => {
        halfAnimateControlLeft.start({
            opacity: 0,
        })

        halfAnimateControlRight.start({
            opacity: 0,
            zIndex: -2
        })

        setImageLeft(true)
    }

    const onHoverHalfLeftEnd = async () => {

        halfAnimateControlLeft.start({
            opacity: 1
        })
        
        setImageLeft(false)
        halfAnimateControlRight.start({
            opacity: 1,
            zIndex: 1
        })
    }

    const onHoverHalfRight = () => {
        halfAnimateControlRight.start({
            opacity: 0,
        })

        halfAnimateControlLeft.start({
            opacity: 0,
            zIndex: -2
        })

        setImageRight(true)
    }

    const onHoverHalfRightEnd = async () => {

        halfAnimateControlRight.start({
            opacity: 1
        })
        
        setImageRight(false)
        halfAnimateControlLeft.start({
            opacity: 1,
            zIndex: 1
        })
    }

    return (
        <div id='about' className="ve-container">
            <div className={styles.container}>
                <div className='left flex relative'>
                    <ImageFullLeft isVisible={showImageLeft} />
                    <ImageFullRight isVisible={showImageRight} />
                    <motion.img animate={halfAnimateControlLeft} onHoverStart={onHoverHalfLeft} onHoverEnd={onHoverHalfLeftEnd} src="/me-left.webp" className='half-left' width={129} height={210} />
                    <motion.img animate={halfAnimateControlRight} onHoverStart={onHoverHalfRight} onHoverEnd={onHoverHalfRightEnd} src="/me-right.webp" className='half-right' width={129} height={210} />
                </div>
                <div className='right'>
                    <span className='small-title'>well, hi there</span>
                    <h3>Nice to Meet <span>You</span></h3>
                    <p>
                    I was born in 95s. Started loving programming since late 2011. Visual Studio Code and Figma was my favorite tools before Sublime Text and Sketch. an Introvert. Sometimes I love to put my thought into writing but sometimes I just let them talk in my head.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
