import { useState } from 'react'
import Image from './pizza.png'
import Logo from './star.svg'
export const App = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <img width={100} height={100} src={Image} alt="heheh" />
      <Logo />
      <h1>React TS is WEBPACK HANDY in {process.env.NODE_ENV} </h1>
      <h1>name var is {process.env.name} </h1>

      <h2 onClick={() => setCount((prev) => prev + 1)}>{count}</h2>
    </>
  )
}
