import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/wallet')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_authenticated/wallet!'
}
