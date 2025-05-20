import { eventData } from "@/data"
import Heading from "./shared/Headings"
import EventCard from "./EventCard";


const Events = () => {
    return (
      <section>
        <Heading
          title="Upcoming Events"
          subtitle="Stay in the loop with our latest events and opportunities—don’t miss out! Let me know if you need any tweaks! 🚀"
        />
        <div className="grid md:grid-cols-2 md:gap-10 py-10 gap-3 grid-cols-1">
          {eventData.map((event) => (
            <div key={event.id}>
              <EventCard
                title={event.title}
                organizer={event.organizer}
                time={event.time}
                date={event.date}
                cost={event.cost}
                image={event.image}
                gradientClass={event.gradientClass}
                location={event.location}
                category={event.category} id={0}
              />
            </div>
          ))}
        </div>
      </section>
    );
}

export default Events