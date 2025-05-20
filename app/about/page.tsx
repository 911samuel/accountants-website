import components from "@/components"
import { aboutSlides } from "@/data"

const AboutPage = () => {

    return (
      <div>
        <components.AboutUs slides={aboutSlides} />
        <components.Values />
        <components.ACRTeam />
        <components.Achievements />
        <components.Customers />
        <components.Testimonials />
      </div>
    );
}

export default AboutPage