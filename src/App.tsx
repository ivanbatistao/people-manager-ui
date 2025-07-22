import './App.css'
import { HomeContainer } from '@/pages/home'
import { Navbar } from '@/components/navbar'
import { LayoutContainer } from '@/styled-components'
import { Provider } from 'react-redux'

import store from '@/redux/store'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <HomeContainer />
      </LayoutContainer>
    </Provider>
  )
}

export default App
