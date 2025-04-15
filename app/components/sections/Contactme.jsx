import ContactForm from "../ContactForm";
import Title from "../title";

export default function Contactme() {
  return (
    <section className=" flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center text-center">
        <Title
          title={"Contact Me"}
          desc="Cultivating Connections: Reach Out and Connect with Me"
        />
      </div>

<ContactForm />
    </section>
  );
}
