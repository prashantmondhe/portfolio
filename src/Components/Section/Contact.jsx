

import { useState } from 'react'; 
import emailjs from 'emailjs-com'; 

export const Contact = () => {  

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const SERVICE_ID = "service_gsb9psf";
    const TEMPLATE_ID = "template_kjlno1q";
    const PUBLIC_KEY = "8bHRqtTzyU0Gj_TWN";

    const handleSubmit = (e) => {   
        e.preventDefault();

        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
            alert("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        }, (error) => {
            alert("Failed to send message. Please try again later.");
        });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="px-4 w-full max-w-lg"> 
                
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="Name..."
                            onChange={(e)=> setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                     <div className="relative">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={formData.email}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="example@gmail.com..."
                            onChange={(e)=> setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                        <div className="relative">
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                            rows={5}
                            value={formData.message}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            placeholder="your message..."
                            onChange={(e)=> setFormData({...formData, message: e.target.value})}
                        />
                    </div>

                       
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                </form>

            </div>
        </section>
    );
};