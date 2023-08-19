import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundaryWrapper } from './components/ErrorBoundary/index.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundaryWrapper>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
    </ErrorBoundaryWrapper>
  </React.StrictMode>,
)