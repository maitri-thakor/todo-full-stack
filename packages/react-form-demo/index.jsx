import { createRoot } from 'react-dom/client'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(
    document.getElementById('app')
  ).render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </MemoryRouter>
  )
})