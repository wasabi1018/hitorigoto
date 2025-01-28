"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SectionButton from './section-button';

const FetchHitorigoto = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push('/hearing');
  };
  
    return (
      <div>
        <Link href="/hearing">
          <SectionButton onClickEvent={handleClick} buttonName='誰かのヒトリゴトを聞く' />
        </Link>
      </div>
    );
};
  
  export default FetchHitorigoto;