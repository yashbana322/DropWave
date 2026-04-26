import { DemoVariant1 } from '@/components/demo'
import { WhatIsDropwave } from '@/components/WhatIsDropwave'
import { SetupGuide } from '@/components/SetupGuide'
import { HowToUse } from '@/components/HowToUse'

export function Home() {
  return (
    <>
      <DemoVariant1 />
      <WhatIsDropwave />
      <SetupGuide />
      <HowToUse />
    </>
  )
}
