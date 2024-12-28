import { UserAuthForm } from '@/components/forms/signinform'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/signin')({
  component: SignIn,
})

function SignIn() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-left">
        <h1 className="text-primary-900 text-[30px] leading-[38px] sm:text-[24px] sm:leading-[32px]font-bold font-Manrope">
          Welcome Back
        </h1>
        <p className="text-[16px] leading-[24px] text-tertiary-100">
          Welcome back! Please enter your details.
        </p>
      </div>
      <UserAuthForm />
      <p className="px-5 text-center text-tertiary-100 !mt-5 font-bold">
        Don't have an Account.{' '} 
        <Link to="/signup" className="text-[#4D4D4D] hover:underline">
          Sign up
        </Link>
      </p>
    </>
  )
}

export default SignIn
