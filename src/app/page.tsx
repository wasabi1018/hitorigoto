import '@/styles/style.scss'
import Tweet from '../components/tweet';
import Hearing from '../components/hearing';

export default function Home() {
  return (
    <div>
      {/* ロゴ */}
      <div>
        ヒトリゴト
      </div>
      {/* ヒトリゴトをつぶやく */}
      <Tweet />
      {/* 誰かのヒトリゴトを聞く */}
      <Hearing />
    </div>
  );
}
