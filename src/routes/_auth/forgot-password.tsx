import ForgetPasswordForm from '@/components/forms/forgetpwordform'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/_auth/forgot-password')({
  component: ForgotPassword,
})

function ForgotPassword() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-left">
        <h1 className="text-primary-900 text-[30px] leading-[38px] sm:text-[24px] sm:leading-[32px]font-bold font-Manrope mb-2">
          Forgot Password
        </h1>
        <p className="text-[16px] leading-[24px] text-tertiary-100">
          No worries, we'll send you reset instructions.
        </p>
        <ForgetPasswordForm />
      </div>

      <p className="px-5  text-tertiary-100 !m-6 font-bold flex items-center gap-1 justify-center">
        {' '}
        <ArrowLeft size={20} />
        <Link to="/signin" className="text-[#4D4D4D] hover:underline">
          Back to Login.
        </Link>
      </p>
    </>
  )
}
