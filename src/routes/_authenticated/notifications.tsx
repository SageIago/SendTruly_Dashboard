import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/notifications')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_authenticated/notifications!'
}
