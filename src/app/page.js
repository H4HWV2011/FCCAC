"use client";

import React from "react";

export default function FCCACHomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-teal-900">
      {/* HERO SECTION - Enhanced storytelling with real FCCAC building */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Front_of_FCCAC_e5b8d9f0f5.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/50 to-black/70"></div>
        <div className="relative flex flex-col items-center justify-center text-center py-24 px-6">
          <div className="mb-8">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #A855F7, #14B8A6, #F59E0B, #EF4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fayette County Community Arts Center
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 font-semibold mb-6 drop-shadow-lg">
              "Where Creativity Meets Community"
            </p>
            <p className="max-w-4xl mx-auto text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
              A vibrant and inclusive hub for artistic expression and community engagement in Fayette County, West Virginia.
              Fostering creativity, promoting cultural understanding, and providing accessible arts programming for all ages and backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
            <div className="bg-purple-600/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/50">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-purple-200 font-semibold">Creativity</div>
            </div>
            <div className="bg-teal-600/30 backdrop-blur-sm rounded-lg p-4 border border-teal-400/50">
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-teal-200 font-semibold">Inclusivity</div>
            </div>
            <div className="bg-amber-600/30 backdrop-blur-sm rounded-lg p-4 border border-amber-400/50">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-amber-200 font-semibold">Education</div>
            </div>
            <div className="bg-rose-600/30 backdrop-blur-sm rounded-lg p-4 border border-rose-400/50">
              <div className="text-3xl mb-2">🏘️</div>
              <div className="text-rose-200 font-semibold">Community</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Explore Our Programs
            </button>
            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Join Our Community
            </button>
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Visit Our Hub
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Enhanced with mission focus and real storefront imagery */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
            Our Creative Community Story
          </h2>

          {/* Gallery showcase with real FCCAC storefront */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/images/FCCAC_storefrontwindow_9d420bff25.jpg"
                  alt="FCCAC Storefront Gallery Display featuring local artwork curated by Karen Leathers"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
              <div className="order-1 md:order-2 bg-gradient-to-br from-purple-800/50 to-indigo-800/50 p-8 rounded-2xl shadow-2xl border border-purple-400/20">
                <h3 className="text-2xl font-bold text-amber-300 mb-4">🎨 Our Creative Hub</h3>
                <p className="text-purple-100 leading-relaxed">
                  Step into our Creative Hub and discover a space where the beautiful Harmony for Hope tree mural
                  watches over diverse local artwork. From intimate exhibitions to rotating displays,
                  our gallery celebrates the rich artistic heritage of Fayette County.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 p-8 rounded-2xl shadow-2xl border border-purple-400/20">
                <h3 className="text-2xl font-bold text-amber-300 mb-4">🎭 Born from Harmony for Hope</h3>
                <p className="text-purple-100 leading-relaxed">
                  Operating under Harmony for Hope, Inc. since 2011, we've grown from the Mount Hope Alumni Band
                  into a comprehensive arts center serving all of Fayette County and beyond.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-800/50 to-cyan-800/50 p-8 rounded-2xl shadow-2xl border border-teal-400/20">
                <h3 className="text-2xl font-bold text-amber-300 mb-4">🌟 Catalyst for Change</h3>
                <p className="text-purple-100 leading-relaxed">
                  We're more than an arts center—we're a catalyst for positive change, supporting community
                  revitalization, diversity, and inclusion through the transformative power of creative expression.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 p-8 rounded-2xl shadow-2xl border border-amber-400/30">
              <h3 className="text-3xl font-bold text-amber-300 mb-6 text-center">Who We Serve</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🏠</div>
                  <span className="text-purple-100">Fayette County residents of all ages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🎨</div>
                  <span className="text-purple-100">Local and regional artists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🌍</div>
                  <span className="text-purple-100">Art enthusiasts from across the country</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">✈️</div>
                  <span className="text-purple-100">Tourists and transient residents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION - Enhanced layout and descriptions */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-teal-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            Creative Programs & Spaces
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🖼️",
                title: "Art Gallery & Exhibitions",
                desc: "Showcasing diverse local artists with rotating exhibitions and our unique downtown storefront window displays, curated by Visual Coordinator Karen Leathers.",
                gradient: "from-rose-600/20 to-pink-600/20",
                border: "border-rose-400/30"
              },
              {
                icon: "🎺",
                title: "Mount Hope Regional Band",
                desc: "Our flagship musical program where musicians of all levels enhance skills and perform at community events, continuing Appalachian musical traditions.",
                gradient: "from-blue-600/20 to-indigo-600/20",
                border: "border-blue-400/30"
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Harmony's Kids Program",
                desc: "Safe, inclusive environment fostering creativity and self-expression in children through hands-on artistic activities and mentorship.",
                gradient: "from-green-600/20 to-emerald-600/20",
                border: "border-green-400/30"
              },
              {
                icon: "🔨",
                title: "Free Community Makers Space",
                desc: "Full access to Woodshop, Metalshop, and Pottery Studio with professional tools and materials for hands-on creative projects and skill-building.",
                gradient: "from-amber-600/20 to-yellow-600/20",
                border: "border-amber-400/30"
              },
              {
                icon: "🎪",
                title: "Performances & Concerts",
                desc: "Dynamic performance spaces hosting musicians, dancers, theater groups, and community celebrations that bring people together through the arts.",
                gradient: "from-purple-600/20 to-violet-600/20",
                border: "border-purple-400/30"
              },
              {
                icon: "🏠",
                title: "Artist Residencies & Studios",
                desc: "Dedicated collaborative spaces where artists design, create, and connect with the community while developing their craft and sharing their vision.",
                gradient: "from-teal-600/20 to-cyan-600/20",
                border: "border-teal-400/30"
              }
            ].map((program, index) => (
              <div key={index} className={`bg-gradient-to-br ${program.gradient} backdrop-blur-sm border ${program.border} rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-xl`}>
                <div className="text-5xl mb-6 text-center">{program.icon}</div>
                <h3 className="text-xl font-bold text-amber-300 mb-4 text-center">{program.title}</h3>
                <p className="text-purple-100 leading-relaxed text-center">{program.desc}</p>
              </div>
            ))}
          </div>

          {/* Additional Programs Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-400/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">Conference & Meeting Spaces</h3>
              <p className="text-purple-100 text-sm">Collaborative spaces for presentations, discussions, and community planning.</p>
            </div>
            <div className="bg-gradient-to-br from-rose-600/20 to-red-600/20 backdrop-blur-sm border border-rose-400/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">Educational Workshops</h3>
              <p className="text-purple-100 text-sm">Academic programs covering various creative disciplines and skill development.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-lg font-bold text-amber-300 mb-3">Community Events</h3>
              <p className="text-purple-100 text-sm">Festivals and events celebrating Fayette County's rich arts and cultural heritage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP & ENGAGEMENT SECTION with real community photo */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            Join Our Creative Community
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-purple-800/50 to-indigo-800/50 p-8 rounded-2xl shadow-2xl border border-purple-400/20">
              <h3 className="text-3xl font-bold text-amber-300 mb-6">Membership Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🔑</div>
                  <span className="text-purple-100">Full facility access and usage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🎭</div>
                  <span className="text-purple-100">Participation in all events and programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">🤝</div>
                  <span className="text-purple-100">Networking with local artists and creators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">⭐</div>
                  <span className="text-purple-100">Exclusive access to specialized programs</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-800/50 to-cyan-800/50 p-8 rounded-2xl shadow-2xl border border-teal-400/20">
              <h3 className="text-3xl font-bold text-amber-300 mb-6">Who Can Join?</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Open to individuals, artists, and organizations aged 18+ (or with parent permission).
                We welcome everyone who shares our commitment to respect, inclusivity, professionalism, and community collaboration.
              </p>
              <div className="space-y-3">
                <div className="bg-teal-600/30 rounded-lg p-3">
                  <span className="text-teal-200 font-semibold">✨ Individual Artists & Creators</span>
                </div>
                <div className="bg-teal-600/30 rounded-lg p-3">
                  <span className="text-teal-200 font-semibold">🏢 Organizations & Groups</span>
                </div>
                <div className="bg-teal-600/30 rounded-lg p-3">
                  <span className="text-teal-200 font-semibold">👨‍👩‍👧‍👦 Families & Community Members</span>
                </div>
              </div>
            </div>
          </div>

          {/* Community engagement showcase with real community photo */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 p-8 rounded-2xl shadow-2xl border border-green-400/20">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">🤗 Intergenerational Community</h3>
              <p className="text-purple-100 leading-relaxed mb-4">
                Our FCCAC brings together people of all ages—from young families to seasoned community members.
                Everyone contributes their unique perspective and skills to create a truly inclusive creative environment.
              </p>
              <div className="text-green-200 text-sm italic">
                "Where every generation learns from each other through the arts"
              </div>
            </div>
            <div>
              <img
                src="/images/Various_ages_arts_e912934c91.jpg"
                alt="Community gathering showing multiple generations enjoying arts activities together at FCCAC"
                className="rounded-2xl shadow-2xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VISIT SECTION - Enhanced with real FCCAC facility photos */}
      <section className="py-20 bg-gradient-to-r from-amber-900 via-orange-900 to-red-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
            Visit Our Creative Hub
          </h2>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-orange-100 mb-12 leading-relaxed">
            Located in downtown Fayette County, our Creative Hub features gallery spaces, performance areas,
            workshops, and collaborative spaces designed to inspire creativity and build community connections.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-amber-600/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Gallery Spaces</h3>
              <p className="text-orange-100">Rotating exhibitions and permanent displays showcasing local talent, curated by resident artist Karen Leathers</p>
              <img
                src="/images/FCCAC_storefrontwindow_9d420bff25.jpg"
                alt="FCCAC Downtown Storefront Gallery displaying local artwork"
                className="mt-4 rounded-lg w-full h-32 object-cover shadow-lg"
              />
            </div>
            <div className="bg-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Performance Areas</h3>
              <p className="text-orange-100">Professional venues for concerts, theater, and community events</p>
              <img
                src="/images/FCCAC_Exterior_88f95b3f63.jpg"
                alt="FCCAC Exterior showing performance spaces and community areas"
                className="mt-4 rounded-lg w-full h-32 object-cover shadow-lg"
              />
            </div>
            <div className="bg-red-600/20 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-amber-300 mb-3">Workshop Facilities</h3>
              <p className="text-orange-100">Fully equipped spaces for woodworking, metalwork, and pottery</p>
              <img
                src="/images/Front_of_FCCAC_e5b8d9f0f5.jpg"
                alt="Front entrance of FCCAC showing accessible workshop and community spaces"
                className="mt-4 rounded-lg w-full h-32 object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="bg-yellow-100 text-yellow-900 inline-block px-8 py-4 rounded-full font-bold text-lg shadow-xl mb-8">
            🌟 Open to All Ages & Backgrounds • Membership Available • Community Driven 🌟
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300">
              🎨 Become a Member
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300">
              📅 Events Calendar
            </button>
            <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300">
              💌 Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER - Enhanced with more links and info */}
      <footer className="py-16 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 mb-4">
                FCCAC
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Fostering creativity, promoting cultural understanding, and providing accessible arts programming
                for individuals of all ages and backgrounds in Fayette County, West Virginia.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-bold text-purple-300 mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#programs" className="block text-slate-400 hover:text-purple-400 transition-colors">Programs</a>
                <a href="#membership" className="block text-slate-400 hover:text-purple-400 transition-colors">Membership</a>
                <a href="#events" className="block text-slate-400 hover:text-purple-400 transition-colors">Events</a>
                <a href="#gallery" className="block text-slate-400 hover:text-purple-400 transition-colors">Gallery</a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold text-teal-300 mb-4">Stay Connected</h4>
              <div className="space-y-2">
                <a href="https://www.facebook.com/groups/1078161369506058" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-teal-400 transition-colors">
                  📘 Join Our Facebook Community
                </a>
                <a href="mailto:info@harmonyforhope.org" className="block text-slate-400 hover:text-teal-400 transition-colors">
                  📧 Contact FCCAC
                </a>
                <a href="https://harmonyforhopewv.org" className="block text-slate-400 hover:text-teal-400 transition-colors">
                  🌐 Harmony for Hope
                </a>
                <a href="https://mhrb.harmonyforhopewv.org" className="block text-slate-400 hover:text-teal-400 transition-colors">
                  🎺 Mount Hope Regional Band
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-700">
            <p className="text-slate-500 mb-2">
              Part of Harmony for Hope, Inc. • Serving the community since 2011
            </p>
            <p className="text-slate-600">
              &copy; {new Date().getFullYear()} Fayette County Community Arts Center. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
