import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Siderbar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Welington dos Santos"
            content="Fazendo um teste no projeto"
          />
          <Post
            author="Gabinho Verme"
            content="Gente boa"
          />
        </main>

      </div>
    </div>
  )
}

