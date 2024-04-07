import Card from "./part-components/Card";

export const Hero = () => {
  return (
    <section className="flex flex-col py-10 container">
        <div className="flex gap-8 mb-10">
            <Card title="Walk-in-offers" icon="/assets/icons/restaurant.svg" discount="up to 40% off"/>
            <Card title="Book in Advance" icon="/assets/icons/dinningIcon.svg" discount="up to 50% off"/>
        </div>
        <div className="flex justify-between mb-10 items-center">
            <div className="h-0.5 w-1/3 bg-gray-100"></div>
            <h2 className="text-semibold text-gray-500">IN THE LIMELIGHT </h2>
            <div className="h-0.5 w-1/3 bg-gray-100"></div>
        </div>
    </section>
  )
}
