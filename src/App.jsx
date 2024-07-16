import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Welington dos Santos"
        content="Fazendo um teste no projeto"
      />
      <Post
        author="Gabinho Verme"
        content="Gente boa"
      />
    </div>
  )
}

