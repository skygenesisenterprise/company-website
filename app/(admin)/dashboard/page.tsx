'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  FileText, 
  Briefcase, 
  BookOpen, 
  Image, 
  TrendingUp,
  Eye
} from 'lucide-react';

const stats = [
  {
    title: 'Total Blog Posts',
    value: '24',
    change: '+3 this week',
    icon: FileText,
    color: 'text-blue-400',
  },
  {
    title: 'Open Positions',
    value: '8',
    change: '+2 new',
    icon: Briefcase,
    color: 'text-green-400',
  },
  {
    title: 'Whitepapers',
    value: '12',
    change: '+1 this month',
    icon: BookOpen,
    color: 'text-purple-400',
  },
  {
    title: 'Media Files',
    value: '156',
    change: '+12 this week',
    icon: Image,
    color: 'text-orange-400',
  },
];

const recentContent = [
  {
    type: 'Blog Post',
    title: 'Building Scalable Enterprise Applications',
    author: 'John Doe',
    date: '2 hours ago',
    status: 'published',
  },
  {
    type: 'Changelog',
    title: 'Version 2.4.1 - Security Updates',
    author: 'System',
    date: '1 day ago',
    status: 'published',
  },
  {
    type: 'Job Opening',
    title: 'Senior Frontend Developer',
    author: 'HR Team',
    date: '3 days ago',
    status: 'open',
  },
  {
    type: 'Whitepaper',
    title: 'Cloud Migration Best Practices',
    author: 'Tech Team',
    date: '1 week ago',
    status: 'draft',
  },
];

const quickActions = [
  {
    title: 'New Blog Post',
    description: 'Create a new blog article',
    href: '/admin/content/blog/new',
    icon: FileText,
  },
  {
    title: 'Add Job Opening',
    description: 'Post a new career opportunity',
    href: '/admin/content/careers/new',
    icon: Briefcase,
  },
  {
    title: 'New Changelog',
    description: 'Document latest changes',
    href: '/admin/content/changelog/new',
    icon: TrendingUp,
  },
  {
    title: 'Upload Document',
    description: 'Add whitepaper or guide',
    href: '/admin/content/whitepapers/new',
    icon: BookOpen,
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-2">Welcome to Sky Genesis Enterprise Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Content */}
        <Card className="bg-gray-900 border-gray-800 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-white">Recent Content</CardTitle>
            <CardDescription>Latest updates across your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContent.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-blue-400 uppercase">{item.type}</span>
                      <span className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        item.status === 'published' ? "bg-green-500/20 text-green-400" :
                        item.status === 'open' ? "bg-blue-500/20 text-blue-400" :
                        "bg-gray-500/20 text-gray-400"
                      )}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="text-white font-medium mt-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.author} • {item.date}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
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
                    className="w-full justify-start h-auto p-4 bg-gray-800 border-gray-700 hover:bg-gray-700"
                    asChild
                  >
                    <a href={action.href}>
                      <Icon className="h-5 w-5 mr-3 text-blue-400" />
                      <div className="text-left">
                        <div className="font-medium text-white">{action.title}</div>
                        <div className="text-sm text-gray-400">{action.description}</div>
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
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">System Overview</CardTitle>
          <CardDescription>Platform health and activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">Healthy</div>
              <div className="text-sm text-gray-400 mt-1">System Status</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-400 mt-1">Uptime This Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">1,247</div>
              <div className="text-sm text-gray-400 mt-1">Active Users</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}