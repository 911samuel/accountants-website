import { achievementsData } from "@/data";

const Achievements: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-2 md:px-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Achievements <br />
              <span className="text-primary">
                that we are proud of
              </span>
            </h2>
            <p className="mt-2">
              We reached here with our hard work and dedication.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievementsData.map((achievement) => (
              <div key={achievement.id} className="flex items-center space-x-4">
                <achievement.icon className="text-primary text-2xl" />
                <div>
                  <p className="text-xl font-bold">{achievement.number}</p>
                  <p className="text-gray-600">{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;