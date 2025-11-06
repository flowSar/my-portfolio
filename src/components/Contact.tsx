import React, { useState } from "react";
import TextInput from "./TextInput";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = () => {
    console.log(form);
  };

  return (
    <section
      id='contact'
      className=' mt-10 pt-20 w-full flex flex-col items-center px-4 bg-light-gray  '
    >
      <h1 className=' text-4xl font-bold'>Get In Touch</h1>
      <div className='w-full md:w-3xl  mt-10 px-8 py-4 bg-white shadow-md shadow-gray-300 space-y-4'>
        <TextInput
          label='Name'
          name={"name"}
          placeholder='Your Name'
          value={form.name}
          onChangeInputValue={(e) => setForm({ ...form, name: e.target.value })}
        />
        <TextInput
          label='Email'
          name={"email"}
          type='email'
          placeholder='your@gmail.com'
          value={form.email}
          onChangeInputValue={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <TextInput
          label='Message'
          name={"message"}
          value={form.message}
          onChangeTextareaValue={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          placeholder='Your message'
          textInputType='textarea'
          rows={5}
        />
        <button
          onClick={submitForm}
          className='w-full py-3 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-700 text-white'
        >
          Send Message
        </button>
      </div>
    </section>
  );
}

export default Contact;
