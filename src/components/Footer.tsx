import React from 'react';
import { Instagram, Link, Linkedin,  MessageCircleCode, link} from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, url: 'https://www.instagram.com/mlsaxiet?igsh=ZXo2eHFvN2ZwYnlv' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://www.linkedin.com/company/mlsa-xiet-community/' },
    { icon: <MessageCircleCode className="h-5 w-5" />, url: 'https://chat.whatsapp.com/DXjoWMoEPsfBeCrVtBJNqc' },
    { icon: <Link className="h-5 w-5" />, url: 'https://linktr.ee/Events_INFO' }
  ];
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About', url: '#about' },
        { label: 'Modules', url: '#modules' },
        { label: 'Process', url: '#process' },
        { label: 'Contact', url: '#contact' }
      ]
    },
    
  ];

  return (
    <footer className={`bg-primary dark:bg-black border-t dark:border-white/10 text-primary-foreground pt-20 pb-8`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="/" className={`text-2xl font-display font-bold mb-4 inline-block ${theme === 'dark' ? 'text-white' : 'text-primary-foreground/80'}`}>
              MLSA XIET
            </a>
            <p className={`mb-6 max-w-md ${theme === 'dark' ? 'text-white' : 'text-primary-foreground/80'}`}>
            We inspire young minds through events, workshops, and community projects, fostering innovation and excellence under the MLSA legacy.
            </p>
            <div className={`flex space-x-4 ${theme === 'dark' ? 'text-white' : 'text-primary-foreground/80'}`}>
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-300 hover:bg-white/20"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-primary-foreground'}`}>{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className={`hover:text-primary-foreground transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-primary-foreground/80'}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="relative bg-white  p-4 rounded-2xl shadow-2xl shadow-primary/5 animate-zoom-in opacity-0" style={{animationDelay: "0.5s", animationFillMode: "forwards"}}>
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary rounded-full"></div>
              
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="logo.png" 
                  alt="MLSAXIET Logo" 
                  className="w-full h-full object-contain p-6"
                />
              </div>
            </div>
        </div>

        
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-primary-foreground/80'}`}>
            &copy; {currentYear} MLSA XIET. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className={`text-sm hover:text-primary-foreground transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-primary-foreground/80'}`}>
              Privacy Policy
            </a>
            <a href="#" className={`text-sm hover:text-primary-foreground transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-primary-foreground/80'}`}>
              Terms of Service
            </a>
            <a href="#" className={`text-sm hover:text-primary-foreground transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-primary-foreground/80'}`}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;