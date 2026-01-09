import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Upload,
  MessageSquare,
  Clock,
  CheckCircle,
  X,
  Camera,
  TrendingUp,
  Award,
  DollarSign,
  Users,
  Settings,
  BarChart3,
  Shield,
  AlertTriangle
} from "lucide-react";

const SuperAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", active: true },
    { id: "users", label: "User Management" },
    { id: "messages", label: "Messages" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "System Settings" },
    { id: "support", label: "Support" }
  ];

  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      message: "High server load detected",
      time: "5 minutes ago"
    },
    {
      id: 2,
      type: "info",
      message: "New user registrations spike",
      time: "1 hour ago"
    },
    {
      id: 3,
      type: "error",
      message: "Payment gateway timeout",
      time: "2 hours ago"
    }
  ];

  const recentUsers = [
    {
      id: 1,
      name: "John Developer",
      role: "Developer",
      status: "Verified",
      joined: "2 days ago"
    },
    {
      id: 2,
      name: "Sarah Client",
      role: "Client",
      status: "Pending",
      joined: "1 day ago"
    },
    {
      id: 3,
      name: "Mike Contractor",
      role: "Developer",
      status: "Verified",
      joined: "3 days ago"
    }
  ];

  const systemStats = [
    {
      label: "Total Users",
      value: "12,847",
      change: "+12%",
      icon: Users
    },
    {
      label: "Active Projects",
      value: "1,234",
      change: "+8%",
      icon: TrendingUp
    },
    {
      label: "Total Revenue",
      value: "₦45.2M",
      change: "+15%",
      icon: DollarSign
    },
    {
      label: "System Uptime",
      value: "99.9%",
      change: "Stable",
      icon: Shield
    }
  ];

  const handleNavigation = (itemId: string) => {
    switch (itemId) {
      case "dashboard":
        setActiveTab(itemId);
        break;
      case "users":
        navigate('/admin/users');
        break;
      case "messages":
        navigate('/admin/messages');
        break;
      case "analytics":
        navigate('/admin/analytics');
        break;
      case "reports":
        navigate('/admin/reports');
        break;
      case "settings":
        navigate('/admin/settings');
        break;
      case "support":
        navigate('/admin/support');
        break;
      default:
        navigate('/super-admin-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        <div className="p-6 border-b">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SA</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Super Admin</h2>
              <p className="text-sm text-gray-500">BuildTrust</p>
            </div>
          </button>
        </div>
        <nav className="p-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeTab === item.id
                  ? "bg-red-50 text-red-700 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, Super Admin</h1>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">System Status:</span>
                <Badge className="bg-green-600">All Systems Operational</Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-red-600">Super Admin</Badge>
            <Badge variant="outline">
              <Shield className="w-3 h-3 mr-1" />
              Full Access
            </Badge>
            <Button
              variant="outline"
              onClick={() => navigate('/admin/settings')}
            >
              System Settings
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* System Stats Overview */}
            <div>
              <h2 className="text-lg font-semibold mb-4">System Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                {systemStats.map((stat, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className={`text-sm ${stat.change.includes('+') ? 'text-green-600' : 'text-gray-600'}`}>
                            {stat.change}
                          </p>
                        </div>
                        <stat.icon className="h-8 w-8 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent User Registrations */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent User Registrations</h2>
                <Badge className="bg-blue-600">
                  {recentUsers.length} New
                </Badge>
              </div>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <Card key={user.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{user.name}</h3>
                            <p className="text-sm text-gray-600">{user.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={user.status === "Verified" ? "default" : "secondary"}>
                            {user.status}
                          </Badge>
                          <span className="text-sm text-gray-500">{user.joined}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* System Alerts */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        alert.type === 'error' ? 'bg-red-500' :
                        alert.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                      }`} />
                      <span className="text-sm">{alert.message}</span>
                    </div>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/admin/support')}
                >
                  View All Alerts
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => navigate('/admin/users')}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Manage Users
                </Button>
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => navigate('/admin/analytics')}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => navigate('/admin/reports')}
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Generate Reports
                </Button>
                <Button
                  className="w-full justify-start"
                  variant="outline"
                  onClick={() => navigate('/admin/settings')}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  System Settings
                </Button>
              </CardContent>
            </Card>

            {/* Platform Health */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Platform Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Server Load</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Database</span>
                    <Badge className="bg-green-600 text-xs">Healthy</Badge>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">API Response</span>
                    <Badge className="bg-green-600 text-xs">Fast</Badge>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Payment Gateway</span>
                    <Badge variant="destructive" className="text-xs">Issues</Badge>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/admin/support')}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>New user registration</span>
                    <span className="text-gray-500">2 min ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project completed</span>
                    <span className="text-gray-500">15 min ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment processed</span>
                    <span className="text-gray-500">1 hour ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>System backup</span>
                    <span className="text-gray-500">2 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;