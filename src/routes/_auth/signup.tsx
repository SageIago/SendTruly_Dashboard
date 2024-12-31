import { UserSignUpForm } from '@/components/forms/signupform'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-left">
        <h1 className="text-primary-900 text-[30px] leading-[38px] sm:text-[24px] sm:leading-[32px]font-bold font-Manrope mb-2">
          Sign Up To Use SendTruly
        </h1>
      </div>
      <UserSignUpForm />
      <p className="px-5 text-center text-tertiary-100 !mt-5 font-bold">
        Already have an Account.{' '}
        <Link to="/signin" className="text-[#4D4D4D] hover:underline">
          Log In.
        </Link>
      </p>
    </>
  )
}
