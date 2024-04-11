import { createContext, useContext } from 'react'
import useFeedFeatureContext from './feed-feature-context'
import { FeedFeatureContextProps } from './feed-feature-context'
// import { AdminPageProps, AdminPageContextTypes } from '../../types/AdminPage'

type FeedFeatureContextTypes = {
  children: React.ReactNode
}

export const FeedFeatureContext = createContext<FeedFeatureContextProps | null>(null)

export const FeedFeatureContextProvider: React.FC<FeedFeatureContextTypes> = ({ children }) => {
  const context = useFeedFeatureContext()

  return <FeedFeatureContext.Provider value={context}>{children}</FeedFeatureContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFeedContext = () => {
  const context = useContext(FeedFeatureContext)

  if (!context) throw new Error('Use app context within provider!')

  return context
}