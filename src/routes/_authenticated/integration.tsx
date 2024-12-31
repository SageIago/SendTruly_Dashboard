import ApiIntegration from '@/components/shared/Integration/api-integration'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/integration')({
  component: ApiIntegration,
})
