import assets from '@/assets'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col p-10 text-white lg:flex bg-purple-400">
        <div className="absolute inset-0 shadow-sm opacity-100" />
        <div className="relative !z-30 flex items-center text-lg font-medium gap-2 !mb-5">
          <img
            src={assets.MessagingIcon}
            width={20}
            height={20}
            alt="Vite"
            className="invert"
          />
          SendTruly Dashboard: Multi-SMS Flow and Messaging
        </div>

        <img
          src={assets.SendTrulyImage}
          className="relative m-auto h-[350px] object-contain"
          alt="Vite"
        />

        <div className="relative !z-50  opacity-0.5 mt-3">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &rdquo;This SMS platform has completely transformed my workflow,
              revolutionized the way I communicate with customers, and
              streamlined the process of sending and managing messages, all
              while enhancing my customer engagement experience.&rdquo;
            </p>
            <footer className="text-sm">
              Abubakar Mohammed - Founder, SendTruly
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
