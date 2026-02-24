import { useLocation, useNavigate } from "react-router";
import { Outlet } from "react-router";

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { name: 'Home', path: '/', component: 'Home.tsx' },
    { name: 'Skills', path: '/skills', component: 'Skills.tsx' },
    { name: 'Projects', path: '/projects', component: 'Projects.tsx' },
    { name: 'Socials', path: '/socials', component: 'Socials.tsx' }
  ];

  const getCurrentTab = () => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
    return currentTab?.name || 'Home';
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center bg-[url(synthwave_bg.jpg)] p-8 sm:p-16">
      {/* div home */}
      <div className='bg-[#262334] flex flex-col items-center justify-center gap-4 w-full max-w-[800px]'>
        {/* navbar ish like vscode */}
        <div className="flex w-full bg-[#241b2f] text-[16px] overflow-x-auto">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`flex items-center gap-2 py-2 px-4 min-w-max cursor-pointer transition-colors ${
                getCurrentTab() === tab.name
                  ? 'bg-[#262334] text-white'
                  : 'bg-[#241b2f] text-[#7e8390] hover:bg-[#262334] hover:text-white'
              }`}
              onClick={() => navigate(tab.path)}
            >
              <img src="react.svg" className="w-[20px] h-[20px] shrink-0" alt="React Logo" />
              <span>{tab.component}</span>
            </div>
          ))}
        </div>

        {/* Content div */}
        <div className="h-[450px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;