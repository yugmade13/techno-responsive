import Header from '../components/Header';
import Card from '../components/Card';
import { useQuery } from '@tanstack/react-query';
import { getMyProfile } from '../api/profileService';

import patternBackground from '../assets/pattern BG.jpg';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Slider from '../components/Slider';

function Home() {
  const { data, isPending, error } = useQuery({
    queryKey: ['profile'],
    queryFn: ({ signal }) => getMyProfile({ signal }),
  });

  if (isPending) return <Loading />;
  if (error) return <Error />;

  const { banner } = data.result;

  return (
    <>
      <Header />
      <section className="w-full max-w-md mx-auto overflow-x-hidden">
        <div className="relative">
          <img
            className="w-full h-[200px]"
            src={patternBackground}
            alt="pattern background"
          />
          <Card {...data.result} />
        </div>
        <Slider banner={banner} />
      </section>
    </>
  );
}

export default Home;
