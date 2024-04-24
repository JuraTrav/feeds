// import { useState } from 'react'
import './App.css'
import { FeedFeature } from './features/feed'
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <FeedFeature />
      </Provider>
    </>
  )
}

export default App
