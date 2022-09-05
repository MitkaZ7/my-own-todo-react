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

      />
      }
    </>
  )
}

export default Confetti
