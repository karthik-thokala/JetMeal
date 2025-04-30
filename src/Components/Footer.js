import React ,{useRef} from 'react'
import emailjs from "@emailjs/browser";
import logo from './JetMEal.png'
const Footer = () => {


    const form = useRef();
    const SendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm(
            "service_xwiwy4d",   
            "template_dj32h8w",  
            form.current,
            "JYsEMa57DHwhZ0rXE"    
          )
          .then(
            (result) => {
              alert("Thank you! Your feedback has been sent successfully.");
              form.current.reset();
            },
            (error) => {
              alert("Oops! Something went wrong.");
            }
          );
    }
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10 px-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      
      <div className="text-2xl font-semibold">
      <h3 className=''>JetMeal</h3>
      © 2025 JetMeal Limited
      <img src={logo} alt="Logo" className="w-[350px] h-auto rounded-full object-cover p-4" />
      </div>

      
      <div className="flex flex-col space-y-4 text-3xl">
        <a href="/" className="hover:text-orange-500">Home</a>
        <a href="about" className="hover:text-orange-500">About</a>
        
        <a href="cart" className="hover:text-orange-500">Cart</a>
      </div>

     
      <div className="text-lg w-[500px]">
        <h2 className="text-2xl font-semibold mb-6">We value your Feedback!</h2>
        <form ref={form} onSubmit={SendEmail} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" name="user_name" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"/>
          </div>
          <div>
            <label className="block mb-1">Email:</label>
            <input type="email" name="user_email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none" />
          </div>
          <div>
            <label className="block mb-1">Feedback:</label>
            <textarea name="message" rows="4" required className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"/>
          </div>
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-bold py-2 px-6 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  </footer>

  )
}

export default Footer