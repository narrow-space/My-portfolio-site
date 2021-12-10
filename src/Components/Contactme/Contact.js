import React, { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

import "./Contact.css";
import ScrollToTop from 'react-scroll-to-top';


const Contact = () => {
  const [alert,setAlert]= useState('')
  console.log(alert);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ct782e', 'template_ogg9yut', form.current, 
    'user_ELMPk3OqygXgI3R1Le7HO')
      .then((result) => {
          console.log(result.text);
          if(result.text){
            return swal("Thank you messagaing me! 🍧 ", "I will inform you asap!", "success")
          }
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <div id="contact" className="">
      <h1 className="text-light text-center my-5">
        Contact <span style={{ color: "#DC143C" }}>Me</span>{" "}
      </h1>
     <div className="container">
     <div className="row">
        <div className="col-lg-12 col-md-12">
        

     

        <div  class="card">
            <div class="card-body">
              <div className="text-light contact">
            
             <form data-aos="zoom-in" ref={form} onSubmit={sendEmail}>
             <label  htmlFor="">Name</label>
              <input required placeholder='Name' className="form-control"  type="text" name='name' />
              <label  htmlFor="">Email</label>
              <input  required placeholder='Email' className="form-control"  type="text" name='email' />
              <label  htmlFor="">Message</label>
              <textarea  required placeholder='Message' className="form-control"  type="text" name='message' />
              <input className="btn btn-danger p-2 w-25 mt-4" type="submit" value="Send" />
             </form>
              </div>
              
            </div>
          
          </div>

          
        </div>
      
      </div>
     </div>
     <div>
      <ScrollToTop
      style={{"backgroundColor":"#DC143C"}}
      color="white"
      top="10"
      smooth="true" />
     
    </div>
    </div>
  );
};

export default Contact;
