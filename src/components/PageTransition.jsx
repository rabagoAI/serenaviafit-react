import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -14 },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
