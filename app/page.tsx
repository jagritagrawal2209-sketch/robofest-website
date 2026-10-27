import { About } from '@/components/robofest/about'
import { Events } from '@/components/robofest/events'
import { Faq } from '@/components/robofest/faq'
import { Hero } from '@/components/robofest/hero'
import { Register } from '@/components/robofest/register'
import { Schedule } from '@/components/robofest/schedule'
import { SiteFooter } from '@/components/robofest/site-footer'
import { SiteHeader } from '@/components/robofest/site-header'
import { Ticker } from '@/components/robofest/ticker'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Events />
        <Schedule />
        <Register />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
