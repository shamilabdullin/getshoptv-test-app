import { useEffect, useRef, useState } from 'react'

export const useObserver = () => {
  const advantagesBlock = useRef(null)
  const howWeWorkBlock = useRef(null)
  const mainBlock = useRef(null)

  const [visibleBlock, setVisibleBlock] = useState('')

  useEffect(() => {
    const howWeWorkObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleBlock('howWeWork')
    })

    const advantagesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleBlock('advantages')
    })

    const mainBlockObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleBlock('')
    })

    const main = mainBlock.current
    if (main) mainBlockObserver.observe(main)

    const howWeWork = howWeWorkBlock.current
    if (howWeWork) howWeWorkObserver.observe(howWeWork)

    const advantages = advantagesBlock.current
    if (advantages) advantagesObserver.observe(advantages)

    return () => {
      if (howWeWork) howWeWorkObserver.unobserve(howWeWork)
      if (advantages) advantagesObserver.unobserve(advantages)
    }
  }, [])

  return { advantagesBlock, howWeWorkBlock, mainBlock, visibleBlock, setVisibleBlock }
}
