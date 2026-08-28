import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import CaseStudiesTwoPage from './pages/CaseStudiesTwoPage'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies-2" element={<CaseStudiesTwoPage />} />
            <Route path="*" element={<Navigate to="/blog" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </BrowserRouter>
  )
}
