import React, { useEffect, useState } from 'react';

function App() {
  const [personalization, setPersonalization] = useState({
    name: 'Your District Administrator',
    district: 'Your School District'
  });

  useEffect(() => {
    // Parse URL parameters for personalization
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const district = urlParams.get('district');
    
    if (name || district) {
      setPersonalization({
        name: name || 'Your District Administrator',
        district: district || 'Your School District'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#000957] font-['Open_Sans']">
      {/* Header */}
      <header className="py-12 text-center">
        <img 
          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2156170212/settings_images/864ed8-d78-d14-47ae-2f3547b2e3_6d3fb864-5820-4677-949d-33b2c72efc0d.png"
          alt="Logo"
          className="mx-auto max-h-[60px]"
        />
      </header>

      {/* Main Content Container */}
      <main className="max-w-[800px] mx-auto px-6">
        
        {/* Section 1: Lead Magnet */}
        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            An AI Policy Resource for {personalization.name}
          </h1>
          
          <h2 className="text-xl font-normal mb-10 leading-relaxed text-gray-700">
            Helping the {personalization.district} align with the latest guidance from the Wyoming Department of Education.
          </h2>
          
          <a 
            href="https://docs.google.com/document/d/1qmq4AhGa9kWxhaF49gPQxtgfN1FOObB8fBNkdvbvuPo/copy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFEB00] text-[#000957] py-4 px-8 rounded-lg text-lg font-bold transition-transform duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Download Your District AI Policy Starter Kit
          </a>
        </section>

        {/* Section 2: Paid App */}
        <section className="text-center mb-20">
          {/* Subtle divider */}
          <div className="w-24 h-px bg-gray-300 mx-auto mb-16"></div>
          
          <h2 className="text-3xl font-bold mb-8 leading-tight">
            Create Your District's AI Policy in 5 Minutes
          </h2>
          
          <p className="text-lg font-normal mb-10 leading-relaxed max-w-[650px] mx-auto text-gray-700">
            The free starter kit provides the framework for district-level policy (and can be adapted for individual school handbooks). When you're ready to save time, use this tool to create a complete, state-compliant policy personalized for the {personalization.district}.
          </p>
          
          <a 
            href="https://schoolaipolicy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#344CB7] text-white py-3 px-6 rounded-lg text-lg font-bold transition-colors duration-200 hover:bg-[#577BC1] shadow-lg hover:shadow-xl"
          >
            Create Your Policy for $149
          </a>
        </section>

        {/* Section 3: Consulting */}
        <section className="mb-20">
          {/* Subtle divider */}
          <div className="w-24 h-px bg-gray-300 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Picture - Left column on desktop, top on mobile */}
            <div className="text-center md:text-left order-1 md:order-1">
              <img 
                src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2158497165/settings_images/220ff66-e783-4f6c-abc2-50ab5015ccb_Bio_Pic_blue_Square_1_.png"
                alt="Profile picture of Aaron Makelky"
                className="w-[150px] h-[150px] rounded-full mx-auto md:mx-0 object-cover shadow-lg"
              />
            </div>
            
            {/* Text & Button - Right column on desktop, bottom on mobile */}
            <div className="text-center md:text-left order-2 md:order-2">
              <h2 className="text-3xl font-bold mb-6 leading-tight">
                Need Help to Make it Work?
              </h2>
              
              <p className="text-lg font-normal mb-8 leading-relaxed text-gray-700">
                If you'd like to discuss a comprehensive AI integration plan for your district, book a free consultation with me.
              </p>
              
              <a 
                href="https://cal.com/aaron-makelky/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#344CB7] text-white py-3 px-6 rounded-lg text-lg font-bold transition-colors duration-200 hover:bg-[#577BC1] shadow-lg hover:shadow-xl"
              >
                Book a Free Strategy Call
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer spacing */}
      <div className="pb-16"></div>
    </div>
  );
}

export default App;