import { useState } from "react";
import { sidebarLinks } from "../constants";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  return (
    <div className="sidebar">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <h1 className="text-white text-xl not-italic font-bold tracking-tight ">
            HomePlay
          </h1>
          <img src="/assets/logo.svg" alt="logo" className="object-contain" />
        </div>
        <div>
          {sidebarLinks.map((link, index) => (
            <div key={index}>
              <h2 className="text-white text-[15px] font-bold uppercase">{link.category}</h2>
              {link.links.map((item, idx) => (
                <div key={idx}>
                  {"href" in item ? (
                    <a
                      href={item.href}
                      className={`flex items-center gap-4 text-white py-2 px-4 rounded-lg ${activeLink === idx ? "text-primary" : "text-white"}`}
                      onClick={() => setActiveLink(idx)}
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        width={14}
                        height={14}
                        className="object-contain"
                      />
                      <span className="font-medium ">{item.title}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-white py-2 px-4 rounded-lg">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="object-contain"
                      />
                      <span>{item.title}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
