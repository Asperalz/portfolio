import { useState, useEffect } from 'react'

export function useTypewriter(text, speed = 75, delay = 700) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timeoutId
    let intervalId
    let index = 0

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index++
        setDisplayed(text.slice(0, index))
        if (index >= text.length) {
          clearInterval(intervalId)
          setDone(true)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, delay])

  return { displayed, done }
}
