import './App.scss'
import {BrowserRouter} from 'react-router-dom';
import Page from './components/page/Page';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Page/>
      </BrowserRouter>
    </div>
  )
}

export default App
