import Title from "../Shared/Title";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-8 md:p-[60px]  mb-[60px] bg-[#F2F2F2]">
      <Title title={"What our Client Says"} subtilte={"Client Testiomial"} />
      <div className="container mt-8">
        <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3  place-content-around">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
