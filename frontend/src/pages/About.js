import Akshita from "../assests/Akshita.jpeg";
import Somen from "../assests/Somen.jpeg";

export const About = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">About Our Project</h1>
        <p className="mb-8">
          This project is a joint collaboration between Somen Bandishti and Akshita Bhamidimarri. 
          It allows users to submit participants, get assigned gift receivers, and brings joy and excitement to gift-giving traditions.
          This platform provides a convenient way to run Secret Santa events, ensuring anonymity in 
          the gift-giving process and fostering a fun and enjoyable experience for participants.
        </p>
        <h2 className="text-2xl font-bold mb-4">Creators</h2>
        <div className="flex items-center justify-center space-x-8 mb-8">
          <div>
            <img src={Somen} alt="Somen Bandishti" className="w-32 h-32 rounded-full" />
            <p className="font-semibold mt-2">Somen Bandishti</p>
          </div>
          <div>
            <img src={Akshita} alt="Akshita Bhamidimarri" className="w-32 h-32 rounded-full" />
            <p className="font-semibold mt-2">Akshita Bhamidimarri</p>
          </div>
        </div>
      </div>
    </main>
  );
};

