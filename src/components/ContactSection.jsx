import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Twitch,
  Twitter,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMeassage] = useState('');

  // This is the function that handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // adding virables for emailjs
    const serviceId = 'service_9om3cmb';
    const templateId = 'template_nscmt6x';
    const publicKey = 'd1QDPU9FLBsu6XIrP';

    //Creating a new object that contains dynamic tamplate params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Onuoha',
      message: message,
    };

    // passing all service peremeter to email send service
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email Sent Successful', response);
        setName('');
        setEmail('');
        setMeassage('');
      })
      .catch((error) => {
        console.error('Error sending mail', error);
      });

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {' '}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{' '}
                </div>
                <div>
                  <h4 className="font-medium flex"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    onuohacollinschidubem@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{' '}
                </div>
                <div>
                  <h4 className="font-medium flex"> Phone</h4>
                  <a
                    href="tel:+2347072730265"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (709) 6492835
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{' '}
                </div>
                <div>
                  <h4 className="font-medium flex"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Canada, Corner brook, NewfoundLand
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/collins-onuoha-2a7b19155"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/ONUOHACOLLINS11" target="_blank">
                  <Twitter />
                </a>
                <a
                  href="https://web.facebook.com/chidubem.c.onuoha"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a href="https://github.com/ONUOHA92" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {' '}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Pedro Machado..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {' '}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {' '}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMeassage(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2'
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
