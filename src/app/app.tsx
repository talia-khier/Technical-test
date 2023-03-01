// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import ContentCard from './Components/ContactCard';
import FixedCard from './Components/FixedCard';
import MasonryCard from './Components/MasonryCards';
import Layout from './Layouts';

export function App() {
  return (
    <Layout>
      <div className={styles.masonryWrapper}>
        <MasonryCard />
      </div>

      <div className={styles.fixedCards}>
        <FixedCard />
        <ContentCard />
      </div>
    </Layout>
  );
}

export default App;
