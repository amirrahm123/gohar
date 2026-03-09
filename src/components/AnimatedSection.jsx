import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AnimatedSection({ children, className, style, delay = 0 }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        ...variants,
        visible: { ...variants.visible, transition: { ...variants.visible.transition, delay } },
      }}
    >
      {children}
    </motion.div>
  )
}
