import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/text2pay')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_authenticated/text2pay!'
}
