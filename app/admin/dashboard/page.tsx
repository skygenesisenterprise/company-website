'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/admin/components/ui/card';
import { Button } from '@/app/admin/components/ui/button';
import { cmsService, DashboardStats, BlogPost } from '@/app/admin/lib/services/cms-service';
import { 
  FileText, 
  Briefcase, 
  BookOpen, 
  TrendingUp,
  Eye,
  Users,
  BarChart3,
  Clock,
  ArrowUp,
  ArrowDown,
  Plus,
  Activity,
  Zap,
  Target
} from 'lucide-react';

const quickActions = [
  {
    title: 'New Blog Post',
    description: 'Create a new blog article',
    href: '/admin/content/blog/new',
    icon: FileText,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Add Job Opening',
    description: 'Post a new career opportunity',
    href: '/admin/content/careers/new',
    icon: Briefcase,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'New Changelog',
    description: 'Document latest changes',
    href: '/admin/content/changelog/new',
    icon: TrendingUp,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Upload Document',
    description: 'Add whitepaper or guide',
    href: '/admin/content/whitepapers/new',
    icon: BookOpen,
    color: 'from-orange-500 to-orange-600',
  },
];

const systemMetrics = [
  {
    title: 'System Status',
    value: 'Healthy',
    status: 'success',
    icon: Activity,
    color: 'text-green-400',
  },
  {
    title: 'Uptime This Month',
    value: '99.9%',
    status: 'success',
    icon: Clock,
    color: 'text-blue-400',
  },
  {
    title: 'Active Users',
    value: '1,247',
    status: 'success',
    icon: Users,
    color: 'text-purple-400',
  },
  {
    title: 'Server Response',
    value: '142ms',
    status: 'success',
    icon: Zap,
    color: 'text-orange-400',
  },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentContent, setRecentContent] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await cmsService.getDashboardStats();
        if (response.success && response.data) {
          setStats(response.data.stats);
          setRecentContent(response.data.recentContent);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statsData = stats ? [
    {
      title: 'Total Blog Posts',
      value: stats.blogPosts.total.toString(),
      change: `+${stats.blogPosts.published} published`,
      trend: 'up' as const,
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-500/10 to-blue-600/10',
    },
    {
      title: 'Open Positions',
      value: stats.jobPostings.open.toString(),
      change: `${stats.jobPostings.total} total`,
      trend: 'up' as const,
      icon: Briefcase,
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-500/10 to-green-600/10',
    },
    {
      title: 'Whitepapers',
      value: stats.whitepapers.toString(),
      change: 'Available',
      trend: 'up' as const,
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-500/10 to-purple-600/10',
    },
    {
      title: 'Total Users',
      value: stats.users.toString(),
      change: 'Registered',
      trend: 'up' as const,
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-500/10 to-orange-600/10',
    },
  ] : [];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-slate-400 text-lg">Welcome to Sky Genesis Enterprise Admin Panel</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg">
            <BarChart3 className="h-4 w-4 mr-2" />
            View Analytics
          </Button>
          <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
            <Plus className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                    stat.trend === 'up' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUp className="h-3 w-3" />
                    ) : (
                      <ArrowDown className="h-3 w-3" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Content */}
        <Card className="lg:col-span-2 bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-400" />
              Recent Content
            </CardTitle>
            <CardDescription>Latest updates across your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContent.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-200 group">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-blue-400 bg-slate-900/50">
                        <FileText className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-medium text-slate-400 uppercase">Blog Post</span>
                      <span className={cn(
                        "text-xs px-2 py-1 rounded-full font-medium",
                        post.status === 'PUBLISHED' ? "bg-green-500/20 text-green-400" :
                        post.status === 'DRAFT' ? "bg-gray-500/20 text-gray-400" :
                        "bg-slate-700/50 text-slate-400"
                      )}>
                        {post.status.toLowerCase()}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {`${post.author.firstName || ''} ${post.author.lastName || ''}`.trim() || post.author.email} • {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-400" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.title}
                    variant="outline"
                    className="w-full justify-start h-auto p-4 bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-200 group"
                    asChild
                  >
                    <a href={action.href}>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                          {action.title}
                        </div>
                        <div className="text-sm text-slate-400">
                          {action.description}
                        </div>
                      </div>
                    </a>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Overview */}
      <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center gap-2">
            <Target className="h-5 w-5 text-green-400" />
            System Overview
          </CardTitle>
          <CardDescription>Platform health and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.title} className="text-center">
                  <div className={`w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm font-medium text-slate-400">{metric.title}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}