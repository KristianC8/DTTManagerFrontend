import { useIsTop } from '../hooks/useIsTop'
import { Logo } from './icons/Logo'

export const Header = () => {
  const { isTop } = useIsTop()
  return (
    <header
      className={`${isTop ? 'bg-transparent' : 'bg-[#a1a1a10] shadow-md shadow-[#181818] backdrop-blur-md'}
       top-0 sm:top-6 p-4 fixed left-0 right-0 sm:left-1/2 sm:translate-x-[-50%] sm:w-[85vw] flex items-center 
       gap-1 rounded-none sm:rounded-3xl transition-colors z-10`}
    >
      <Logo />
      <h1 className=' font-Agu-reg text-3xl font-bold'>TDT</h1>
    </header>
  )
}
