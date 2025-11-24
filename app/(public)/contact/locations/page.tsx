'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { ArrowRight, Building, MapPin, Phone, Mail, Clock, Globe, Users, Shield, Headphones, Calendar, FileText, Handshake, Navigation, Wifi, X, ZoomIn, ZoomOut } from 'lucide-react';

export default function LocationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);

  const headquarters = {
    name: "Global Headquarters",
    address: "123 Business District, International Plaza, Suite 1000",
    city: "Paris, France",
    email: "hq@skygenesis.com",
    phone: "+33 1 234 567 890",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM CET",
    functions: ["Corporate Governance", "Strategic Planning", "Global Operations", "Research & Development"]
  };

  const regionalOffices = [
    {
      region: "Europe",
      offices: [
        {
          name: "European Operations Center",
          address: "Friedrichstraße 123, Berlin",
          city: "Berlin, Germany",
          email: "europe@skygenesis.com",
          phone: "+49 30 1234 5678",
          functions: ["Regional Support", "Compliance", "Partnerships"]
        },
        {
          name: "Mediterranean Hub",
          address: "Via Milano 45, Milan",
          city: "Milan, Italy",
          email: "mediterranean@skygenesis.com",
          phone: "+39 02 1234 5678",
          functions: ["Southern Europe Operations", "Client Relations"]
        }
      ]
    },
    {
      region: "Americas",
      offices: [
        {
          name: "Americas Headquarters",
          address: "350 Fifth Avenue, Empire State Building",
          city: "New York, NY, USA",
          email: "americas@skygenesis.com",
          phone: "+1 212 555 0123",
          functions: ["North America Operations", "Strategic Partnerships", "Enterprise Sales"]
        },
        {
          name: "Latin America Hub",
          address: "Avenida Paulista 1000, São Paulo",
          city: "São Paulo, Brazil",
          email: "latam@skygenesis.com",
          phone: "+55 11 1234 5678",
          functions: ["Regional Operations", "Market Development"]
        }
      ]
    },
    {
      region: "Asia-Pacific",
      offices: [
        {
          name: "APAC Headquarters",
          address: "1 Raffles Place, #50-00",
          city: "Singapore, Singapore",
          email: "apac@skygenesis.com",
          phone: "+65 1234 5678",
          functions: ["Asia-Pacific Operations", "Strategic Initiatives", "Technology Hub"]
        },
        {
          name: "Japan Office",
          address: "Marunouchi Building, 2-4-1 Marunouchi",
          city: "Tokyo, Japan",
          email: "japan@skygenesis.com",
          phone: "+81 3 1234 5678",
          functions: ["Japan Operations", "Enterprise Solutions"]
        }
      ]
    },
    {
      region: "Africa & Middle East",
      offices: [
        {
          name: "MENA Headquarters",
          address: "Dubai International Financial Centre",
          city: "Dubai, UAE",
          email: "mena@skygenesis.com",
          phone: "+971 4 123 4567",
          functions: ["Middle East Operations", "Africa Expansion", "Strategic Growth"]
        }
      ]
    }
  ];

  const operationalCenters = [
    {
      name: "European Data Center",
      location: "Frankfurt, Germany",
      role: "Primary Infrastructure, 24/7 Monitoring, Security Operations",
      capacity: "Tier IV Certified",
      coordinates: [50.1109, 8.6821]
    },
    {
      name: "Americas Data Center",
      location: "Virginia, USA",
      role: "Disaster Recovery, Regional Infrastructure, Performance Optimization",
      capacity: "Tier III Certified",
      coordinates: [37.5407, -77.4360]
    },
    {
      name: "APAC Data Center",
      location: "Singapore",
      role: "Asia-Pacific Infrastructure, Low-Latency Services, Regional Backup",
      capacity: "Tier III Certified",
      coordinates: [1.3521, 103.8198]
    }
  ];

  const mapLocations = [
    {
      name: "Global Headquarters",
      city: "Paris, France",
      coordinates: [48.8566, 2.3522],
      type: "headquarters",
      description: "Corporate Governance & Strategic Planning"
    },
    ...regionalOffices.flatMap(region =>
      region.offices.map(office => ({
        name: office.name,
        city: office.city,
        coordinates: getCityCoordinates(office.city),
        type: "regional",
        description: office.functions.join(", ")
      }))
    ),
    ...operationalCenters.map(center => ({
      name: center.name,
      city: center.location,
      coordinates: center.coordinates,
      type: "datacenter",
      description: center.role
    }))
  ];

  function getCityCoordinates(city: string): [number, number] {
    const cityCoords: { [key: string]: [number, number] } = {
      "Berlin, Germany": [52.5200, 13.4050],
      "Milan, Italy": [45.4642, 9.1900],
      "New York, NY, USA": [40.7128, -74.0060],
      "São Paulo, Brazil": [-23.5505, -46.6333],
      "Singapore, Singapore": [1.3521, 103.8198],
      "Tokyo, Japan": [35.6762, 139.6503],
      "Dubai, UAE": [25.2048, 55.2708]
    };
    return cityCoords[city] || [0, 0];
  }

  function coordinatesToSVG(coords: [number, number]): [number, number] {
    const [lat, lng] = coords;
    // Convert lat/lng to SVG coordinates (simple projection)
    const x = ((lng + 180) / 360) * 1000;
    const y = ((90 - lat) / 180) * 500;
    return [x, y];
  }

  function handleLocationClick(location: any) {
    const modal = document.getElementById('location-modal');
    const title = document.getElementById('modal-title');
    const city = document.getElementById('modal-city');
    const description = document.getElementById('modal-description');
    
    if (modal && title && city && description) {
      title.textContent = location.name;
      city.textContent = location.city;
      description.textContent = location.description;
      modal.classList.remove('hidden');
    }
  }

  useEffect(() => {
    // Add global click handler for modal
    const handleModalClick = (e: MouseEvent) => {
      const modal = document.getElementById('location-modal');
      if (modal && e.target === modal) {
        modal.classList.add('hidden');
      }
    };
    
    document.addEventListener('click', handleModalClick);
    return () => document.removeEventListener('click', handleModalClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Tech grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <MapPin className="w-4 h-4 mr-2" />
              Global Locations
            </div>
            
            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Our Global
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Presence
                </span>
              </div>
            </h1>

            {/* Subtitle - Hero Section */}
            <div className="space-y-3 md:space-y-4 text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                With strategic locations across continents, we bring enterprise solutions closer to your operations. 
                Our global network ensures optimal performance, compliance, and support for your digital sovereignty journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <button 
                onClick={() => document.getElementById('headquarters')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center group text-sm sm:text-base whitespace-nowrap"
              >
                Explore Locations
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link 
                href="/contact/sales" 
                className="border border-white/20 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL HEADQUARTERS */}
      <section id="headquarters" className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Global Headquarters
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              The heart of our operations and strategic vision
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Building className="w-8 h-8 mr-3 text-blue-400" />
                  {headquarters.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p className="text-gray-300">{headquarters.address}</p>
                        <p className="text-gray-300">{headquarters.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-gray-300">{headquarters.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <p className="text-gray-300">{headquarters.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Business Hours</p>
                        <p className="text-gray-300">{headquarters.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-3">Key Functions</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {headquarters.functions.map((func, index) => (
                      <div key={index} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-center">
                        <span className="text-sm text-gray-300">{func}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* REGIONAL OFFICES */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Regional Offices
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Strategic locations serving our global client base
            </p>
          </div>

          {/* Region Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {regionalOffices.map((region) => (
              <Button
                key={region.region}
                variant={selectedRegion === region.region ? "default" : "outline"}
                onClick={() => setSelectedRegion(selectedRegion === region.region ? null : region.region)}
                className="px-6 py-3"
              >
                <Globe className="w-4 h-4 mr-2" />
                {region.region}
              </Button>
            ))}
          </div>

          {/* Regional Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {regionalOffices.map((region) =>
              region.offices.map((office, officeIndex) => (
                <Card
                  key={`${region.region}-${officeIndex}`}
                  className={`bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-300 ${
                    selectedRegion && selectedRegion !== region.region ? 'opacity-50' : 'hover:bg-white/10'
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Building className="w-5 h-5 mr-2 text-blue-400" />
                      {office.name}
                    </CardTitle>
                    <p className="text-sm text-gray-400">{region.region}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-300">{office.address}</p>
                          <p className="text-sm text-gray-300">{office.city}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                        <p className="text-sm text-gray-300">{office.email}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                        <p className="text-sm text-gray-300">{office.phone}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold mb-2">Functions</p>
                      <div className="flex flex-wrap gap-2">
                        {office.functions.map((func, index) => (
                          <span key={index} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-gray-300">
                            {func}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* OPERATIONAL CENTERS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Operational Centers
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              State-of-the-art infrastructure powering our global services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {operationalCenters.map((center, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Wifi className="w-5 h-5 mr-2 text-green-400" />
                    {center.name}
                  </CardTitle>
                  <p className="text-sm text-gray-400">{center.location}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold mb-2">Primary Role</p>
                    <p className="text-sm text-gray-300">{center.role}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">Certification</p>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      {center.capacity}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE MAP SECTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Global Network Map
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Visualize our worldwide presence and infrastructure
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
            <div className="p-6 text-center border-b border-white/10">
              <Navigation className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Interactive World Map</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our global network of offices, data centers, and operational facilities. 
                Click on any location to view detailed information.
              </p>
            </div>
            
            <div className="relative">
                  {/* Map Header */}
                  <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                    <h3 className="text-lg font-bold mb-2">Global Network</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                        <span>Headquarters</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                        <span>Regional Offices</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                        <span>Data Centers</span>
                      </div>
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowMap(false)}
                      className="text-white hover:bg-white/10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Interactive Map Container */}
                  <div className="relative h-[600px] bg-gradient-to-br from-gray-900 to-black">
                    {/* Simple SVG World Map with Interactive Locations */}
                    <svg viewBox="0 0 1000 500" className="w-full h-full">
                      {/* Simple world map background */}
                      <rect width="1000" height="500" fill="url(#worldGradient)" />
                      
                      {/* Gradient definition */}
                      <defs>
                        <linearGradient id="worldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#111827" />
                          <stop offset="100%" stopColor="#000000" />
                        </linearGradient>
                        
                        {/* Glow effects */}
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Simple continent shapes */}
                      <g opacity="0.1">
                        {/* Europe */}
                        <ellipse cx="500" cy="180" rx="80" ry="60" fill="white" />
                        {/* Africa */}
                        <ellipse cx="500" cy="280" rx="70" ry="90" fill="white" />
                        {/* Asia */}
                        <ellipse cx="650" cy="160" rx="120" ry="80" fill="white" />
                        {/* Americas */}
                        <ellipse cx="250" cy="200" rx="60" ry="120" fill="white" />
                        {/* Australia */}
                        <ellipse cx="750" cy="350" rx="50" ry="40" fill="white" />
                      </g>

                      {/* Location markers */}
                      {mapLocations.map((location, index) => {
                        const [x, y] = coordinatesToSVG(location.coordinates as [number, number]);
                        const color = location.type === 'headquarters' ? '#60A5FA' : 
                                     location.type === 'datacenter' ? '#C084FC' : '#4ADE80';
                        
                        return (
                          <g key={index}>
                            {/* Pulsing circle */}
                            <circle
                              cx={x}
                              cy={y}
                              r="8"
                              fill={color}
                              opacity="0.3"
                              className="animate-pulse"
                            />
                            {/* Main marker */}
                            <circle
                              cx={x}
                              cy={y}
                              r="5"
                              fill={color}
                              filter="url(#glow)"
                              className="cursor-pointer hover:r-7 transition-all"
                              onClick={() => handleLocationClick(location)}
                            />
                            {/* Location label */}
                            <text
                              x={x}
                              cy={y - 10}
                              fill="white"
                              fontSize="10"
                              textAnchor="middle"
                              className="pointer-events-none"
                            >
                              {location.city.split(',')[0]}
                            </text>
                          </g>
                        );
                      })}
                    </svg>

                    {/* Location Details Panel */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-sm rounded-lg p-4 border border-white/10 max-h-40 overflow-y-auto">
                      <div className="text-sm text-gray-300">
                        <p className="font-semibold text-white mb-2">Click on any location to view details</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <span className="text-blue-400">●</span> Headquarters: Paris
                          </div>
                          <div>
                            <span className="text-green-400">●</span> Regional Offices: 7 locations
                          </div>
                          <div>
                            <span className="text-purple-400">●</span> Data Centers: 3 facilities
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> {/* Location Details Panel */}
                </div>     {/* relative map wrapper */}
            </Card>
          </div>        {/* max-w-6xl mx-auto */}
        </div>      {/* container mx-auto px-4 */}
      </section>

      {/* Location Details Modal */}
      <div id="location-modal" className="hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-md w-full p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 id="modal-title" className="text-xl font-bold"></h3>
            <button 
              onClick={() => {
                const modal = document.getElementById('location-modal');
                if (modal) modal.classList.add('hidden');
              }}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p id="modal-city" className="text-gray-400 mb-2"></p>
          <p id="modal-description" className="text-gray-300 text-sm"></p>
        </div>
      </div>

      {/* HOW TO REACH US */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              How to Reach Us
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Multiple channels to connect with our global teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Schedule a Visit</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Plan a visit to any of our global offices
              </p>
              <Button variant="outline" className="w-full">
                Book Visit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <Headphones className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Regional Support</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Connect with your local support team
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <FileText className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Office Directory</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Complete directory of all our locations
              </p>
              <Button variant="outline" className="w-full">
                View Directory
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Join Our Team</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Explore career opportunities worldwide
              </p>
              <Link href="/careers">
                <Button variant="outline" className="w-full">
                  View Careers
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Related Resources
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Explore more about our global operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link href="/contact/sales">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <Handshake className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">Sales Inquiries</h3>
                  <p className="text-gray-400 text-sm">
                    Connect with our enterprise sales team
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/office">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <Building className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">Our Solutions</h3>
                  <p className="text-gray-400 text-sm">
                    Discover our enterprise offerings
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/governance/compliance">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-3">Compliance</h3>
                  <p className="text-gray-400 text-sm">
                    Learn about our global compliance standards
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}