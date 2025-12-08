import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import MobileGuard from './components/MobileGuard'

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <MobileGuard>
        <AppRoutes />
      </MobileGuard>
    </BrowserRouter>
  )
}

export default App