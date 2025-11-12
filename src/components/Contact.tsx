import { useRef, useState, type ChangeEvent } from "react";
import TextInput from "./TextInput";
import emailjs from "emailjs-com";
import SocialMedia from "./SocialMedia";

function Contact() {
  const [status, setStatus] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const submitForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const result = await emailjs.sendForm(
        "service_k71lfcu", // ← your Service ID
        "template_q3whoh4", // ← your Template ID
        form.current!,
        "9tybtJDm1F808PWEe" // ← your Public Key
      );

      if (result.status === 200) {
        alert("✅ Message sent successfully!");
        form.current?.reset();
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("⚠️ Something went wrong. Try again later.");
    }

    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section
      id='contact'
      className='dark:bg-dark-blue-100 mt-10 pt-20 w-full flex flex-col items-center px-4 bg-light-gray  '
    >
      <h1 className=' text-4xl font-bold'>Get In Touch</h1>
      <div className='rounded-lg w-full md:w-3xl  mt-10  px-8 py-8 dark:bg-dark-blue  bg-white shadow-md dark:shadow-dark-blue shadow-gray-300 '>
        <form ref={form} onSubmit={submitForm} className='space-y-4'>
          <TextInput label='Name' name={"name"} placeholder='Your Name' />
          <TextInput
            label='Email'
            name={"email"}
            type='email'
            placeholder='your@gmail.com'
          />
          <TextInput
            label='Message'
            name={"message"}
            placeholder='Your message'
            textInputType='textarea'
            rows={5}
          />
          <button
            type='submit'
            className='w-full py-3 px-8 rounded-xl bg-linear-to-r from-blue-600 to-purple-700 text-white cursor-pointer'
          >
            Send Message
          </button>
        </form>
      </div>
      <SocialMedia />
    </section>
  );
}

export default Contact;
