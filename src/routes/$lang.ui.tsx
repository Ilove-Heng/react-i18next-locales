import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MacbookScroll } from '@components/ui/macbook-scroll'

export const Route = createFileRoute('/$lang/ui')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MacbookScroll src="/image/macbook-wallpaper.jpg" />
}
``