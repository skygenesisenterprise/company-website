'use client';


import { 
  Server, 
  Cloud, 
  Database, 
  HardDrive, 
  Zap, 
  Shield, 
  Activity, 
  Globe, 
  MapPin, 
  Clock, 
  RefreshCw, 
  TrendingUp, 
  ArrowRight, 
  Download, 
  Mail, 
  Building, 
  Cpu, 
  Network,
  BarChart, 
  CheckCircle, 
  Settings, 
  Monitor, 
  Router
} from 'lucide-react';

interface InfrastructureFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  specs?: string[];
}

interface DataCenter {
  name: string;
  location: string;
  type: string;
  tier: string;
  status: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

export default function InfrastructurePage() {
  const infrastructureFeatures: InfrastructureFeature[] = [
    {
      title: 'Cloud-Native Architecture',
      description: 'Containerized microservices with Kubernetes orchestration for maximum scalability and resilience.',
      icon: <Cloud className="w-6 h-6" />,
      color: 'blue',
      specs: ['Kubernetes', 'Docker', 'Service Mesh', 'Auto-scaling']
    },
    {
      title: 'High-Performance Computing',
      description: 'Enterprise-grade compute resources with optimized CPU, GPU, and memory configurations.',
      icon: <Cpu className="w-6 h-6" />,
      color: 'green',
      specs: ['AMD EPYC', 'NVIDIA A100', 'DDR5 Memory', 'NVMe Storage']
    },
    {
      title: 'Distributed Storage',
      description: 'Redundant, scalable storage systems with automatic data replication and instant recovery.',
      icon: <HardDrive className="w-6 h-6" />,
      color: 'purple',
      specs: ['Object Storage', 'Block Storage', 'File Systems', 'Backup Solutions']
    },
    {
      title: 'Network Infrastructure',
      description: 'High-speed, low-latency network with redundant paths and advanced load balancing.',
      icon: <Network className="w-6 h-6" />,
      color: 'orange',
      specs: ['100 Gbps Backbone', 'DDoS Protection', 'CDN', 'Global Load Balancer']
    },
    {
      title: 'Edge Computing',
      description: 'Distributed edge nodes for reduced latency and improved user experience across regions.',
      icon: <Router className="w-6 h-6" />,
      color: 'cyan',
      specs: ['Edge Locations', 'Content Caching', 'API Gateway', 'Real-time Processing']
    },
    {
      title: 'Hybrid Cloud',
      description: 'Seamless integration between public, private, and on-premises infrastructure for optimal deployment.',
      icon: <Server className="w-6 h-6" />,
      color: 'red',
      specs: ['Multi-Cloud', 'On-Prem Integration', 'Data Sync', 'Unified Management']
    }
  ];

  const dataCenters: DataCenter[] = [
    {
      name: 'Belgium - Liège',
      location: 'Primary European Hub',
      type: 'Primary Data Center',
      tier: 'Tier III+',
      status: 'Active',
      features: ['99.99% Uptime', '24/7 Security', 'N+1 Redundancy', 'Green Energy'],
      icon: <MapPin className="w-8 h-8" />,
      color: 'blue'
    },
    {
      name: 'Germany - Frankfurt',
      location: 'Financial Services Hub',
      type: 'Secondary Data Center',
      tier: 'Tier III',
      status: 'Active',
      features: ['Disaster Recovery', 'Low Latency', 'Compliance Ready', 'Redundant Power'],
      icon: <MapPin className="w-8 h-8" />,
      color: 'green'
    },
    {
      name: 'France - Paris',
      location: 'Edge Computing Node',
      type: 'Edge Location',
      tier: 'Tier II',
      status: 'Planned',
      features: ['Content Delivery', 'API Gateway', 'Cache Services', 'Regional Optimization'],
      icon: <MapPin className="w-8 h-8" />,
      color: 'purple'
    },
    {
      name: 'Netherlands - Amsterdam',
      location: 'Connectivity Hub',
      type: 'Network Point of Presence',
      tier: 'Tier I',
      status: 'Planned',
      features: ['Network Peering', 'CDN Edge', 'DNS Services', 'Traffic Optimization'],
      icon: <MapPin className="w-8 h-8" />,
      color: 'orange'
    }
  ];

  const getFeatureColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500/20 text-blue-400';
      case 'green': return 'bg-green-500/20 text-green-400';
      case 'purple': return 'bg-purple-500/20 text-purple-400';
      case 'orange': return 'bg-orange-500/20 text-orange-400';
      case 'cyan': return 'bg-cyan-500/20 text-cyan-400';
      case 'red': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getDataCenterColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30';
      case 'green': return 'bg-green-500/20 text-green-400 hover:bg-green-500/30';
      case 'purple': return 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30';
      case 'orange': return 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Planned': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Maintenance': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

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
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            {/* Enterprise badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-12 hover:border-white/20 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Scalable Infrastructure
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight mx-auto text-center px-4">
              <div className="max-w-5xl mx-auto">
                Enterprise
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </div>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 md:space-y-4 text-base md:text-xl max-w-4xl mx-auto leading-relaxed text-center px-4 mb-12">
              <p>
                Sky Genesis Enterprise delivers scalable, resilient infrastructure with European data sovereignty, 
                ensuring optimal performance and compliance for mission-critical applications.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">99.99%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">&lt;10ms</div>
                <div className="text-gray-400 text-sm">Network Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">4+</div>
                <div className="text-gray-400 text-sm">Data Centers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100Gbps</div>
                <div className="text-gray-400 text-sm">Backbone Speed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE FEATURES */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Infrastructure Capabilities
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Enterprise-grade infrastructure components designed for scalability, performance, 
                and reliability in demanding environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {infrastructureFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className={`w-16 h-16 ${getFeatureColor(feature.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.specs && (
                    <div className="space-y-2">
                      {feature.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center text-xs">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          <span className="text-gray-300">{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DATA CENTERS & GEOGRAPHIC DISTRIBUTION */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                European Data Centers
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Strategic geographic distribution across Europe ensuring low latency, 
                data sovereignty, and regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {dataCenters.map((dataCenter, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 ${getDataCenterColor(dataCenter.color)} rounded-2xl flex items-center justify-center transition-all duration-300`}>
                      {dataCenter.icon}
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(dataCenter.status)}`}>
                      {dataCenter.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{dataCenter.name}</h3>
                  <p className="text-gray-400 mb-4">{dataCenter.location}</p>
                  <p className="text-gray-300 mb-6">{dataCenter.type}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-gray-500 text-sm">Tier:</span>
                      <span className="text-white ml-2 font-semibold">{dataCenter.tier}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Status:</span>
                      <span className={`ml-2 font-semibold ${
                        dataCenter.status === 'Active' ? 'text-green-400' : 
                        dataCenter.status === 'Planned' ? 'text-blue-400' : 'text-yellow-400'
                      }`}>{dataCenter.status}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {dataCenter.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE & SCALABILITY */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Performance & Scalability
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Optimized infrastructure delivering exceptional performance with automatic 
                scaling capabilities to handle any workload demand.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-8">Performance Metrics</h3>
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                      <h4 className="text-xl font-semibold">Compute Performance</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300">CPU Utilization</span>
                          <span className="text-green-400 font-semibold">Optimal</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300">Memory Efficiency</span>
                          <span className="text-blue-400 font-semibold">High</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Network className="w-6 h-6 text-blue-400 mr-3" />
                      <h4 className="text-xl font-semibold">Network Performance</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300">Bandwidth Utilization</span>
                          <span className="text-green-400 font-semibold">40%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300">Latency</span>
                          <span className="text-green-400 font-semibold">&lt;10ms</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <HardDrive className="w-6 h-6 text-purple-400 mr-3" />
                      <h4 className="text-xl font-semibold">Storage Performance</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300">IOPS Performance</span>
                          <span className="text-green-400 font-semibold">100K+</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300">Throughput</span>
                          <span className="text-blue-400 font-semibold">5GB/s</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8">Auto-Scaling Capabilities</h3>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center">
                        <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                        <div>
                          <h4 className="text-green-400 font-semibold">Horizontal Scaling</h4>
                          <p className="text-gray-400 text-sm">Automatic instance addition/removal</p>
                        </div>
                      </div>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <div className="flex items-center">
                        <Activity className="w-6 h-6 text-blue-400 mr-3" />
                        <div>
                          <h4 className="text-blue-400 font-semibold">Load-Based Scaling</h4>
                          <p className="text-gray-400 text-sm">CPU, memory, and network triggers</p>
                        </div>
                      </div>
                      <span className="text-blue-400 text-sm">Configured</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <div className="flex items-center">
                        <Clock className="w-6 h-6 text-purple-400 mr-3" />
                        <div>
                          <h4 className="text-purple-400 font-semibold">Scheduled Scaling</h4>
                          <p className="text-gray-400 text-sm">Predictive resource provisioning</p>
                        </div>
                      </div>
                      <span className="text-purple-400 text-sm">Enabled</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                      <div className="flex items-center">
                        <RefreshCw className="w-6 h-6 text-orange-400 mr-3" />
                        <div>
                          <h4 className="text-orange-400 font-semibold">Health-Based Scaling</h4>
                          <p className="text-gray-400 text-sm">Automatic failover and recovery</p>
                        </div>
                      </div>
                      <span className="text-orange-400 text-sm">Monitoring</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <div className="flex items-center mb-2">
                      <BarChart className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-blue-400 font-semibold">Scaling Limits</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Min Instances:</span>
                        <span className="text-white ml-2">2</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Max Instances:</span>
                        <span className="text-white ml-2">100</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Scale-up Time:</span>
                        <span className="text-green-400 ml-2">&lt;2min</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Scale-down Time:</span>
                        <span className="text-blue-400 ml-2">&lt;5min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONITORING & OBSERVABILITY */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Monitoring & Observability
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Comprehensive monitoring and observability stack providing real-time insights 
                into infrastructure performance and health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Monitor className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Real-Time Monitoring</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Continuous monitoring of all infrastructure components with sub-second 
                  data collection and alerting.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Metrics Collection</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Dashboard Visualization</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Custom Alerts</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                  <Activity className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Performance Analytics</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Advanced analytics and machine learning for performance optimization 
                  and predictive capacity planning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Trend Analysis</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Anomaly Detection</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Capacity Forecasting</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
                  <Settings className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Infrastructure Automation</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Automated infrastructure management with self-healing capabilities 
                  and zero-touch deployment.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Auto-Remediation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Configuration Management</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">Patch Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE & STANDARDS */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Compliance & Standards
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Infrastructure compliance with international standards and regulatory 
                requirements ensuring enterprise-grade security and governance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">ISO 27001</h3>
                <p className="text-gray-400 text-sm mb-3">Information Security Management</p>
                <span className="text-green-400 text-xs font-semibold">Certified</span>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">GDPR</h3>
                <p className="text-gray-400 text-sm mb-3">Data Protection Regulation</p>
                <span className="text-blue-400 text-xs font-semibold">Compliant</span>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">SOC 2</h3>
                <p className="text-gray-400 text-sm mb-3">Service Organization Control</p>
                <span className="text-purple-400 text-xs font-semibold">Type II</span>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">ISO 9001</h3>
                <p className="text-gray-400 text-sm mb-3">Quality Management System</p>
                <span className="text-orange-400 text-xs font-semibold">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Scale Your Infrastructure with SGE
              </h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
                Ready to deploy enterprise-grade infrastructure that scales with your business? 
                Our infrastructure experts are here to help you design the perfect solution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Contact Infrastructure Team</h3>
                  <p className="text-gray-400 text-sm mb-3">infrastructure@skygenesisenterprise.com</p>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                    Send Message
                  </button>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Visit Our Data Center</h3>
                  <p className="text-gray-400 text-sm mb-3">Liège, Belgium</p>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    Schedule Tour
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  Get Infrastructure Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300 flex items-center justify-center">
                  Download Architecture Guide
                  <Download className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}