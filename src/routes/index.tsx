import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: ({ context }) => {
    const { isSignedIn } = context.authentication
    if (!isSignedIn) {
      throw redirect({ to: '/signin' })
    } else {
      throw redirect({ to: '/dashboard' })
    }
  },
})
