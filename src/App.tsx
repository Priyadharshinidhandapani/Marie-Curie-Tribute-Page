import React from 'react';
import { Award, BookOpen, FlaskRound as Flask, Heart, Star, Calendar } from 'lucide-react';

function App() {
  const achievements = [
    {
      year: 1867,
      title: "Born in Warsaw",
      description: "Maria Skłodowska was born in Warsaw, Poland, showing early brilliance in mathematics and physics."
    },
    {
      year: 1891,
      title: "Moved to Paris",
      description: "Enrolled at the University of Paris (Sorbonne) to study physics, chemistry, and mathematics."
    },
    {
      year: 1895,
      title: "Marriage to Pierre",
      description: "Married Pierre Curie, beginning one of science's greatest partnerships."
    },
    {
      year: 1898,
      title: "Discovery of Elements",
      description: "Discovered polonium and radium, coining the term 'radioactivity'."
    },
    {
      year: 1903,
      title: "First Nobel Prize",
      description: "Won Nobel Prize in Physics (shared with Pierre and Henri Becquerel) for work on radioactivity."
    },
    {
      year: 1911,
      title: "Second Nobel Prize",
      description: "Won Nobel Prize in Chemistry for discovery of radium and polonium, becoming the first person to win Nobel Prizes in two different sciences."
    },
    {
      year: 1914,
      title: "Radium Institute",
      description: "Founded the Radium Institute (now Curie Institute) in Paris, advancing cancer research."
    },
    {
      year: 1934,
      title: "Legacy Continues",
      description: "Passed away, leaving behind groundbreaking research that continues to benefit humanity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8471862/pexels-photo-8471862.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Marie Curie"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Marie Curie
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Pioneer of Radioactivity • Nobel Prize Winner • Scientific Trailblazer
            </p>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              The first woman to win a Nobel Prize, the first person to win Nobel Prizes in two different sciences, 
              and the first female professor at the University of Paris.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-50 to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why We Admire Marie Curie</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Flask className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scientific Pioneer</h3>
            <p className="text-gray-600">Groundbreaking research in radioactivity opened entirely new fields of science and medicine.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Double Nobel Laureate</h3>
            <p className="text-gray-600">The only person to win Nobel Prizes in two different scientific disciplines: Physics and Chemistry.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Barrier Breaker</h3>
            <p className="text-gray-600">Shattered gender barriers in science, paving the way for countless women in STEM fields.</p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Dedicated Educator</h3>
            <p className="text-gray-600">First female professor at the University of Paris, inspiring generations of scientists.</p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-12 h-12 mx-auto mb-8 text-yellow-300" />
          <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mb-8 italic">
            "Nothing in life is to be feared, it is only to be understood. 
            Now is the time to understand more, so that we may fear less."
          </blockquote>
          <p className="text-lg text-purple-200">— Marie Curie</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Life & Achievements Timeline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-indigo-400"></div>
          
          {achievements.map((achievement, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} ml-16 md:ml-0`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-purple-500 mr-2" />
                    <span className="text-purple-600 font-semibold text-lg">{achievement.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
              
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lasting Legacy</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Continuing Impact</h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Marie Curie's pioneering research laid the foundation for modern atomic physics and chemistry. 
                  Her discoveries in radioactivity continue to benefit humanity through medical treatments, 
                  energy production, and scientific research.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Curie Institute, which she founded, remains one of the world's leading cancer research centers. 
                  Her daughter Irène and son-in-law Frédéric continued her legacy, also winning Nobel Prizes in Chemistry.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Beyond science, Marie Curie serves as an enduring symbol of perseverance, dedication, and the 
                  power of curiosity. Her life story continues to inspire scientists, particularly women in STEM, 
                  around the world.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-2xl shadow-2xl text-white">
                <h4 className="text-xl font-bold mb-4">By the Numbers</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Nobel Prizes Won</span>
                    <span className="font-bold text-2xl text-yellow-300">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Scientific Fields</span>
                    <span className="font-bold text-2xl text-yellow-300">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Elements Discovered</span>
                    <span className="font-bold text-2xl text-yellow-300">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Years of Research</span>
                    <span className="font-bold text-2xl text-yellow-300">40+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Marie Curie (1867-1934)</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            A brilliant scientist whose dedication to knowledge and unwavering curiosity changed the world forever. 
            Her legacy continues to inspire and her discoveries continue to benefit humanity.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;