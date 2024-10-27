import Footer from './Components/Footer'
import Header from './Components/Header'
import PostDetail from './Pages/PostDetail'
import PostList from './Pages/PostList'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">

        <Router>
        <Header />
          <Routes>
            <Route path='/' element={<PostList />} />
            <Route path='/posts/:id' element={<PostDetail />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
