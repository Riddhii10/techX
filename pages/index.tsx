import { GetStaticProps } from "next";
import Card from "../components/Card";
import data from "../data/talks.json";

interface Talk {
  id: number;
  image: string;
  date: string;
  title: string;
  author: string;
}

interface HomeProps {
  talks: Talk[];
}

const Home: React.FC<HomeProps> = ({ talks }) => {
  const talks2023 = talks.filter((talk) => talk.date.includes("2023"));
  const talks2024 = talks.filter((talk) => talk.date.includes("2024"));

  return (
    <>
      <div className="container mx-auto p-4 bg-black px-14">
        <h1 className="text-3xl mb-10 text-left text-white">
          Talks<span className="text-orange-500">_</span>
          <span className="text-green-600">2024</span>{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          {talks2024.map((talk) => (
            <Card
              key={talk.id}
              image={talk.image}
              date={talk.date}
              title={talk.title}
              author={talk.author}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto  bg-black px-14 pt-10">
        <h1 className="text-3xl mb-10 text-left text-white">
          Talks<span className="text-orange-500">_</span>
          <span className="text-green-600">2023</span>{" "}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
          {talks2023.map((talk) => (
            <Card
              key={talk.id}
              image={talk.image}
              date={talk.date}
              title={talk.title}
              author={talk.author}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      talks: data,
    },
  };
};

export default Home;
