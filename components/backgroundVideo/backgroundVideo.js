import { motion } from "framer-motion"
import { p } from '../../lib/path'

export default function BackgroundVideo({src}) {
  return (
    <motion.div
    initial={{opacity:0, height:"100vh",width:"100vw",position:"absolute"}}
    animate={{opacity:0.5}}
    transition={{
      opacity: { duration: 0.65 }
    }}
    >
      <video autoPlay loop muted className="backgroundVideo">
        <source src={p(src)} />
      </video>
      <style jsx>{`
      .backgroundVideo {
        position: absolute;
        object-fit: cover;
        height: 100vh;
        width: 100vw;
      }
    `}</style>
    </motion.div>
  );
}
