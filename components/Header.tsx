"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { Search } from "lucide-react";
import Logo from "@/public/ACR-Logo.png";
import { MenuItem } from "@/interface";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems: MenuItem[] = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    {
      id: "services",
      label: "Services",
      hasMegaMenu: true,
      megaMenuItems: [
        {
          title: "Our Services",
          items: [
            {
              id: "accounting-bookkeeping",
              bgColor: "bg-amber-100",
              dotColor: "bg-amber-400",
              title: "Accounting & Bookkeeping",
              description: "Expert bookkeeping for businesses.",
              href: "/services/accounting-bookkeeping",
            },
            {
              id: "tax-preparation-planning",
              bgColor: "bg-violet-100",
              dotColor: "bg-violet-400",
              title: "Tax Preparation & Planning",
              description: "Stay tax-compliant & maximize savings.",
              isNew: true,
              href: "/services/tax-preparation-planning",
            },
            {
              id: "it-solutions",
              bgColor: "bg-fuchsia-100",
              dotColor: "bg-fuchsia-400",
              title: "IT Solutions",
              description: "Certified QuickBooks & Microsoft CSP consulting.",
              href: "/services/it-solutions",
            },
            {
              id: "training",
              bgColor: "bg-sky-100",
              dotColor: "bg-sky-400",
              title: "Training",
              description: "Professional training in finance & IT.",
              href: "/services/training",
            },
            {
              id: "outsourcing-accounting",
              bgColor: "bg-stone-100",
              dotColor: "bg-stone-400",
              title: "Outsourcing Accounting",
              description: "Efficient outsourced accounting solutions.",
              href: "/services/outsourcing-accounting",
            },
            {
              id: "consulting-advisory",
              bgColor: "bg-slate-100",
              dotColor: "bg-slate-400",
              title: "Business Consulting",
              description: "Expert guidance to grow your business.",
              href: "/services/consulting-advisory",
            },
          ],
        },
        {
          title: "IT Solutions Offered",
          items: [
            {
              id: "miclient",
              bgColor: "bg-red-100",
              dotColor: "bg-red-400",
              title: "MiClient",
              description: "Manage sales pipelines & contracts.",
              href: "/services/it-solutions/miclient",
            },
            {
              id: "quickbooks",
              bgColor: "bg-lime-100",
              dotColor: "bg-lime-400",
              title: "QuickBooks",
              description: "Certified QuickBooks setup & support.",
              href: "/services/it-solutions/quickbooks",
            },
            {
              id: "zoho-finance",
              bgColor: "bg-cyan-100",
              dotColor: "bg-cyan-400",
              title: "Zoho Finance",
              description: "Cloud-based finance & accounting tools.",
              href: "/services/it-solutions/zoho-finance",
            },
            {
              id: "microsoft",
              bgColor: "bg-cyan-100",
              dotColor: "bg-cyan-400",
              title: "Microsoft",
              description: "Business solutions with Microsoft 365 & Azure.",
              href: "/services/it-solutions/microsoft",
            },
          ],
        },
        {
          title: "Trainings Offered",
          items: [
            {
              id: "accounting-training",
              bgColor: "bg-purple-100",
              dotColor: "bg-purple-400",
              title: "Accounting Training",
              description: "Learn professional accounting practices.",
              href: "/services/accounting-training",
            },
            {
              id: "tax-training",
              bgColor: "bg-green-100",
              dotColor: "bg-green-400",
              title: "Tax Training",
              description: "Master tax preparation & compliance.",
              href: "/services/tax-training",
            },
            {
              id: "quickbooks-training",
              bgColor: "bg-blue-100",
              dotColor: "bg-blue-400",
              title: "QuickBooks Training",
              description: "Certified QuickBooks courses for professionals.",
              href: "/services/quickbooks-training",
            },
            {
              id: "microsoft-training",
              bgColor: "bg-orange-100",
              dotColor: "bg-orange-400",
              title: "Microsoft Training",
              description: "Master Microsoft 365 & Azure tools.",
              href: "/services/microsoft-training",
            },
          ],
        },
      ],
    },
    {
      id: "resource",
      label: "Resource",
      hasMegaMenu: true,
      megaMenuItems: [
        {
          title: "Learning Center",
          items: [
            {
              id: "blog",
              bgColor: "bg-zinc-100",
              dotColor: "bg-zinc-400",
              title: "News",
              description: "Latest insights and updates.",
              href: "/resources/news",
            },
            {
              id: "guides",
              bgColor: "bg-yellow-100",
              dotColor: "bg-yellow-400",
              title: "Guides",
              description: "Step-by-step tutorials and guides.",
              isNew: true,
              href: "/resources/guides",
            },
            {
              id: "webinars",
              bgColor: "bg-pink-100",
              dotColor: "bg-pink-400",
              title: "Webinars",
              description: "Access recorded and live sessions.",
              href: "/resources/webinars",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              id: "faq",
              bgColor: "bg-teal-100",
              dotColor: "bg-teal-400",
              title: "Frequently Asked Questions",
              description: "Find answers to common questions",
              href: "/resources/faq",
            },
            {
              id: "privacy-policy",
              bgColor: "bg-rose-100",
              dotColor: "bg-rose-400",
              title: "Privacy Policy",
              description: "Collaborate & share knowledge.",
              href: "/resources/privacy-policy",
            },
            {
              id: "support-center",
              bgColor: "bg-lime-100",
              dotColor: "bg-lime-400",
              title: "Support Center",
              description: "Get help & assistance.",
              href: "/resources/support-center",
            },
          ],
        },
        {
          title: "Case Studies",
          items: [
            {
              id: "small-business-success",
              bgColor: "bg-indigo-100",
              dotColor: "bg-indigo-400",
              title: "Small Business Success",
              description: "How we helped small businesses grow.",
              href: "/resources/small-business-success",
            },
            {
              id: "tax-optimization",
              bgColor: "bg-red-100",
              dotColor: "bg-red-400",
              title: "Tax Optimization",
              description: "Reducing tax burdens for clients.",
              href: "/resources/tax-optimization",
            },
            {
              id: "it-solution-impact",
              bgColor: "bg-blue-100",
              dotColor: "bg-blue-400",
              title: "IT Solution Impact",
              description: "Boosting efficiency with our IT solutions.",
              href: "/resources/it-solution-impact",
            },
          ],
        },
      ],
    },
    { id: "contact", label: "Contact", href: "/contact" },
    { id: "resources", label: "Resources", href: "/resources" },
  ];

  return (
    <header>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={100} height={100} />
          </Link>

          <div className="hidden md:flex items-center space-x-6" ref={menuRef}>
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() =>
                  item.hasMegaMenu ? setActiveMegaMenu(item.id) : null
                }
              >
                {item.hasMegaMenu ? (
                  <button
                    className="flex items-center text-gray-600 hover:text-primary bg-transparent hover:bg-transparent font-normal p-0"
                    onClick={() =>
                      setActiveMegaMenu(
                        activeMegaMenu === item.id ? null : item.id
                      )
                    }
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1 transition-transform ${
                        activeMegaMenu === item.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="text-gray-600 hover:text-primary py-2"
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasMegaMenu && activeMegaMenu === item.id && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-[90vw] max-w-6xl min-w-[300px] px-4 sm:px-6">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <div className="relative grid grid-cols-1 gap-6 bg-white p-6 lg:grid-cols-3">
                        {item.megaMenuItems?.map((section, index) => (
                          <div key={index} className="p-4">
                            <h3 className="text-sm font-medium text-gray-500 mb-5">
                              {section.title}
                            </h3>
                            <div className="space-y-6">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  href={subItem.href}
                                  className="flex items-start gap-4 group"
                                  onClick={() => setActiveMegaMenu(null)}
                                >
                                  <div className="flex-shrink-0">
                                    <div
                                      className={`w-10 h-10 rounded-lg ${subItem.bgColor} flex items-center justify-center`}
                                    >
                                      <div
                                        className={`w-6 h-6 rounded-full ${subItem.dotColor}`}
                                      ></div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex items-center">
                                      <p className="text-base font-medium text-gray-900 group-hover:text-primary">
                                        {subItem.title}
                                      </p>
                                      {subItem.isNew && (
                                        <span className="ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white bg-primary">
                                          New
                                        </span>
                                      )}
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Type and hit enter"
              className="border rounded-full py-2 px-4 w-64 outline-none shadow-sm"
            />
            <Search
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <nav className="flex flex-col space-y-4 p-6">
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.hasMegaMenu ? (
                  <>
                    <button
                      className="flex items-center text-gray-600 hover:text-primary bg-transparent hover:bg-transparent font-normal pl-4"
                      onClick={() =>
                        setActiveMegaMenu(
                          activeMegaMenu === item.id ? null : item.id
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          activeMegaMenu === item.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeMegaMenu === item.id && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.megaMenuItems?.map((section) => (
                          <div key={section.title} className="mb-4">
                            <h3 className="text-sm font-medium text-gray-500 mb-2">
                              {section.title}
                            </h3>
                            <div className="space-y-2">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  href={subItem.href}
                                  className="block py-1 text-sm"
                                  onClick={() => {
                                    setActiveMegaMenu(null);
                                    setIsOpen(false);
                                  }}
                                >
                                  {subItem.title}
                                  {subItem.isNew && (
                                    <span className="ml-2 inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-indigo-800">
                                      New
                                    </span>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
