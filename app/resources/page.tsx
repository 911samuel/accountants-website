import Events from "@/components/Events"
import FreeMateials from "@/components/FreeMateials"
import components from "@/components"
import { resourceSlides } from "@/data"
import CalendarCard from "@/components/CalendarCard"

const page = () => {
    return (
        <div>
            <components.Hero slides={resourceSlides} />
            <components.Latest />
            <CalendarCard />
            <Events />
            <FreeMateials />
        </div>
    )
}

export default page