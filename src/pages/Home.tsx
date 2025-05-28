import { useState } from "react";
import { 
  BarChart3, 
  User, 
  Settings, 
  Home as HomeIcon, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 transform bg-white shadow-lg w-64 transition-transform duration-200 ease-in-out z-40 lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="px-6 py-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">My App</h2>
          </div>
          
          {/* Sidebar Content */}
          <div className="flex-grow px-4 py-6 space-y-1">
            <SidebarItem icon={<HomeIcon />} label="Home" active />
            <SidebarItem icon={<BarChart3 />} label="Dashboard" />
            <SidebarItem icon={<User />} label="Profile" />
            <SidebarItem icon={<Settings />} label="Settings" />
          </div>
          
          {/* Sidebar Footer */}
          <div className="p-4 border-t">
            <button className="flex items-center w-full px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
              <LogOut className="mr-3" size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-64 transition-all duration-200">
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Home</h1>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full hover:bg-gray-100">
                <User size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard 
              title="Analytics" 
              icon={<BarChart3 size={24} className="text-blue-500" />} 
              value="1,234" 
              description="Total views this month" 
            />
            <DashboardCard 
              title="Profile" 
              icon={<User size={24} className="text-green-500" />} 
              value="Complete" 
              description="Your profile is up to date" 
            />
            <DashboardCard 
              title="Settings" 
              icon={<Settings size={24} className="text-purple-500" />} 
              value="3" 
              description="Pending configuration items" 
            />
          </div>

          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to Your Dashboard</h2>
            <p className="text-gray-600">
              This is your home page with quick access to your dashboard and profile information.
              Use the sidebar to navigate between different sections of the application.
            </p>
          </div>
        </main>
      </div>
      
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

function SidebarItem({ icon, label, active = false }) {
  return (
    <button 
      className={cn(
        "flex items-center w-full px-4 py-3 rounded-md transition-colors",
        active 
          ? "bg-blue-100 text-blue-600" 
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      <span className="mr-3">{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
}

function DashboardCard({ title, icon, value, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {icon}
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
}