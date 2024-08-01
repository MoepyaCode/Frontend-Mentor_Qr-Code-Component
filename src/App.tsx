import { assets } from './assets'
import { Container, Main, Wrapper } from './components'

export default function App() {

  return (
    <Main className='bg-slate-300 grid place-items-center min-w-full px-[27.5px]'>

      <Container className='bg-white max-w-[320px] w-full min-h-[499px] rounded-[20px] px-[16px] pt-[16px] pb-[40px] flex flex-col items-center'>

        <img className='rounded-[10px]' src={assets.image} alt="" />

        <Wrapper className='w-[90%] mt-[24px] flex flex-col gap-[16px]'>
          <h1 className='font-outfit text-[22px] text-center font-bold'>
            Improve your front-end skills by building projects
          </h1>

          <p className='font-outfit text-[15px] text-center text-slate-500'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </Wrapper>

      </Container>

    </Main>
  )
}
