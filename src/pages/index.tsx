import { useRouter } from 'next/router';

export const Home: React.FC = () => {
  const router = useRouter();
  typeof window !== 'undefined' && router.push('/about');

  return <></>;
};

export default Home;
