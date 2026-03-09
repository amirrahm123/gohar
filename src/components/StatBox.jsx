import { useInView } from 'framer-motion'
import { useRef } from 'react'
import useCounter from '../hooks/useCounter'

export default function StatBox({ target, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCounter(target, inView)

  return (
    <div className="stat-box" ref={ref}>
      <span className="stat-num">{count}+</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}
