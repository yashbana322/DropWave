import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { PrivacyPolicy } from '@/pages/PrivacyPolicy'
import { TermsOfService } from '@/pages/TermsOfService'
import { WannaWork } from '@/pages/WannaWork'
import { ConnectWithUs } from '@/components/ConnectWithUs'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const navEntries = window.performance.getEntriesByType("navigation");
    if (navEntries.length > 0) {
      const navType = (navEntries[0] as PerformanceNavigationTiming).type;
      if ((navType === "reload" || navType === "navigate") && window.location.pathname !== "/") {
        window.location.replace("/");
      }
    }
  }, []);

  return (
    <Router>
      <div className="w-full min-h-screen bg-black text-white font-sans flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/work" element={<WannaWork />} />
          </Routes>
        </main>
        <ConnectWithUs />
      </div>
    </Router>
  )
}

export default App
