import { ACRTeamData } from "@/data";
import TeamCard from "./TeamCard";
import Heading from "./shared/Headings";

const ACRTeam = () => {

    return (
        <section className="py-16 bg-background">
            <Heading title="Meet Our Team" subtitle="Our team of professionals is ready to help you with all your accounting needs." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {
                    ACRTeamData.map((person) => {
                        return (
                            <TeamCard name={person.names} title={person.title} bio={person.description} avatar={person.avatar} key={person.id} social={person.social} email={person.email} tel={person.tel} />
                            
                        )
                    })
                }
            </div>
        </section>
    )
}
export default ACRTeam;


