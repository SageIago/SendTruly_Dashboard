import ComingSoon from '@/components/shared/coming-soon'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/loyalty/loyalty')({
  component: ComingSoon,
})

