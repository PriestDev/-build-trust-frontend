import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BarChart3, TrendingUp, TrendingDown, Clock, CheckCircle, AlertTriangle, Users, MessageSquare, Shield, Download } from "lucide-react";

const AdminSupportAnalytics = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState("30d");

  // Mock analytics data
  const analytics = {
    overview: {
      totalTickets: 245,
      resolvedTickets: 189,
      averageResponseTime: "4.2 hours",
      averageResolutionTime: "24.8 hours",
      customerSatisfaction: 4.6
    },
    ticketTrends: [
      { month: "Jan", tickets: 45, resolved: 38 },
      { month: "Feb", tickets: 52, resolved: 41 },
      { month: "Mar", tickets: 48, resolved: 42 },
      { month: "Apr", tickets: 61, resolved: 48 },
      { month: "May", tickets: 39, resolved: 20 }
    ],
    categoryBreakdown: [
      { category: "Technical", count: 67, percentage: 27.3 },
      { category: "Payment", count: 32, percentage: 13.1 },
      { category: "Account", count: 45, percentage: 18.4 },
      { category: "Project", count: 28, percentage: 11.4 },
      { category: "Verification", count: 15, percentage: 6.1 },
      { category: "General", count: 58, percentage: 23.7 }
    ],
    priorityDistribution: [
      { priority: "Low", count: 89, color: "bg-green-500" },
      { priority: "Medium", count: 123, color: "bg-yellow-500" },
      { priority: "High", count: 28, color: "bg-orange-500" },
      { priority: "Urgent", count: 5, color: "bg-red-500" }
    ],
    agentPerformance: [
      { agent: "Alice Johnson", ticketsResolved: 45, avgResponseTime: "3.2h", satisfaction: 4.8 },
      { agent: "Bob Smith", ticketsResolved: 38, avgResponseTime: "4.1h", satisfaction: 4.5 },
      { agent: "Carol Davis", ticketsResolved: 52, avgResponseTime: "3.8h", satisfaction: 4.7 },
      { agent: "David Wilson", ticketsResolved: 29, avgResponseTime: "5.2h", satisfaction: 4.2 }
    ],
    statusOverview: {
      open: 23,
      inProgress: 18,
      resolved: 189,
      closed: 15
    }
  };

  const handleExportReport = () => {
    // In a real app, this would generate and download a report
    alert("Report export functionality would be implemented here");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-red-500";
      case "inProgress": return "bg-yellow-500";
      case "resolved": return "bg-green-500";
      case "closed": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Low": return "text-green-600";
      case "Medium": return "text-yellow-600";
      case "High": return "text-orange-600";
      case "Urgent": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/admin/support')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Support</span>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Support Analytics</h1>
                <p className="text-sm text-gray-500">Monitor support performance and trends</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleExportReport} variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-red-600" />
                <span className="text-sm font-medium text-gray-700">Super Admin</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Tickets</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.overview.totalTickets}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Resolved</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.overview.resolvedTickets}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Response</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.overview.averageResponseTime}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Resolution</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.overview.averageResolutionTime}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Satisfaction</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.overview.customerSatisfaction}/5</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Ticket Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Ticket Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.ticketTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{trend.month}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <span className="text-sm text-gray-600">{trend.tickets} created</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded"></div>
                        <span className="text-sm text-gray-600">{trend.resolved} resolved</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Status Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Ticket Status Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span className="text-sm">Open</span>
                  </div>
                  <span className="font-medium">{analytics.statusOverview.open}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <span className="text-sm">In Progress</span>
                  </div>
                  <span className="font-medium">{analytics.statusOverview.inProgress}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-sm">Resolved</span>
                  </div>
                  <span className="font-medium">{analytics.statusOverview.resolved}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gray-500 rounded"></div>
                    <span className="text-sm">Closed</span>
                  </div>
                  <span className="font-medium">{analytics.statusOverview.closed}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Category Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Category Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.categoryBreakdown.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{category.category}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">{category.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Priority Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Priority Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.priorityDistribution.map((priority, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded ${priority.color}`}></div>
                      <span className={`text-sm font-medium ${getPriorityColor(priority.priority)}`}>
                        {priority.priority}
                      </span>
                    </div>
                    <span className="font-medium">{priority.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agent Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Agent Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4 font-medium text-gray-700">Agent</th>
                    <th className="text-left py-2 px-4 font-medium text-gray-700">Tickets Resolved</th>
                    <th className="text-left py-2 px-4 font-medium text-gray-700">Avg Response Time</th>
                    <th className="text-left py-2 px-4 font-medium text-gray-700">Satisfaction</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.agentPerformance.map((agent, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-3 px-4 font-medium">{agent.agent}</td>
                      <td className="py-3 px-4">{agent.ticketsResolved}</td>
                      <td className="py-3 px-4">{agent.avgResponseTime}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-1">
                          <span>{agent.satisfaction}</span>
                          <span className="text-yellow-500">★</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSupportAnalytics;