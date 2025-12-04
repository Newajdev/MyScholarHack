import Container from "../../component/LandingComponent/Container"
import PricingSection from "../../component/LandingComponent/pricings/PricingSection"
import RoiCalculator from "../../component/LandingComponent/pricings/RoiCalculator"
import FaqSection from "../../component/LandingComponent/pricings/FaqSection"

export default function Pricing() {
  return (
    <>

      <PricingSection />

      <Container>
        <FaqSection />
        <RoiCalculator />
      </Container>
    </>


  )
}
