import Footer from './Components/Footer'
import Header from './Components/Header'
import CategoryPost from './Pages/CategoryPost'
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
            <Route path='/posts/category/:id' element={<CategoryPost />} />
          </Routes>
        <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
