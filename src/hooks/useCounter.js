import { useEffect, useState, useRef } from 'react'

export default function useCounter(target, inView) {
  const [count, setCount] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    if (!inView || done.current) return
    done.current = true
    let s = 0
    const step = target / 50
    const t = setInterval(() => {
      s = Math.min(s + step, target)
      setCount(Math.floor(s))
      if (s >= target) clearInterval(t)
    }, 28)
    return () => clearInterval(t)
  }, [inView, target])

  return count
}
