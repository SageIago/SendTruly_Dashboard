import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/reviews')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_authenticated/reviews!'
}
