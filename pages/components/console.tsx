import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
import type { Data } from "../api/scrape";
import { AnimatePresence, motion } from "framer-motion";

function Content(data: Data): JSX.Element {
  return (<>{data.html}</>)
}

type ConsoleProps = {
    url: string;
}

const Console: NextPage<ConsoleProps> = ({url}) => {
    const encodedUrl = encodeURIComponent(url);
    const [data, setData] = useState({});
    const loadData = async () => {
      const res = await fetch(`/api/scrape?url=${encodedUrl}`)
      setData(await res.json());
    };
  
    useEffect(() => {
      loadData()
      return () => {};
    }, []);

    const containerVariants = {
        visible: { 
            opacity: 1,     
            transition: {
            when: "beforeChildren",
            staggerChildren: 1.3
            }
        },
        hidden: { 
            opacity: 0
        },
      }
    const itemVariants = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        }
    };
    return (
    <AnimatePresence>
        <motion.div className={styles.console}>
            <motion.div     
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className={styles.consolebody}>
                <motion.p variants={itemVariants}>{'>'} scraping {url}</motion.p>
                <motion.p variants={itemVariants}>{Content(data)}</motion.p>
            </motion.div>
        </motion.div>
    </AnimatePresence>
  )
}

export default Console;
