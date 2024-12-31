import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/loyalty/add-customer')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_authenticated/loyalty/add-customer!'
}
