import React, {useEffect, useState, useRef} from 'react'
import ReactConfetti from 'react-confetti'
import { useSelector, subscribe } from 'react-redux'

const Confetti = ({isCompletedAll}) => {
  const [windowDimension, setWindowDimension] = useState({});

  const detectSize = () => {
    setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight
    })
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension]);
  return (
    <>
      {isCompletedAll && <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        tweenDuration={4400}
        numberOfPieces={300}
        recycle={false}
        gravity={.5}
        drawShape={ctx => {
          ctx.beginPath()
          for (let i = 0; i < 22; i++) {
            const angle = 0.5 * i
            const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
            const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
            ctx.lineTo(x, y)
          }
          ctx.stroke()
          ctx.closePath()
        }}
      />
      }
    </>
  )
}

export default Confetti
