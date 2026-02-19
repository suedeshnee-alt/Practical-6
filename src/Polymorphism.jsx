import React from 'react';

const Screen = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Title */}
      <header className="w-full py-6 bg-white border-b text-center">
        <h1 className="text-3xl font-bold text-gray-900">Main Screen Title</h1>
      </header>

      {/* Second Top / Sub-header */}
      <section className="w-full py-3 bg-blue-600 text-white text-center shadow-md">
        <p className="font-medium">Second Top: Featured Alert or Navigation</p>
      </section>

      {/* Description Content */}
      <main className="flex-grow p-8 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          This is your description paragraph. It sits comfortably below both 
          the main title and the secondary header, providing the context your 
          users need. 
        </p>
      </main>
    </div>
  );
};

export default Screen;