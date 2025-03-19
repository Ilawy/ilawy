import { useEffect, useState } from "react";
export default function MobileHeader({
  links,
}: {
  links: {
    label: string;
    href: string;
  }[];
}) {
  const [open, setOpen] = useState(true);
  useEffect(()=>{
    document.addEventListener('astro:before-swap', ()=>{
        setOpen(false)
    })
    return ()=>{}
  }, [])
  return (
    <>
      <div className={`mobile-overlay lg:hidden ${open && "open"}`} onPointerDown={()=>setOpen(false)}></div>
      <header className="flex flex-col lg:hidden p-3 sticky top-0 left-0 z-50 pointer-events-none">
        <button
          onClick={() => setOpen(!open)}
          className="dark:bg-white bg-black !pointer-events-auto  w-12 h-12 flex items-center justify-center px-3 self-end"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className={`toggle-icon ${open && "open"}`}
          >
            <line
              x1="10"
              y1="50"
              x2="90"
              y2="50"
              className="line line1 dark:stroke-black stroke-white"
            />
            <line
              x1="50"
              y1="10"
              x2="50"
              y2="90"
              className="line line2 dark:stroke-black stroke-white"
            />
          </svg>
        </button>
        <div
          className={`
        mobile-menu ${open && "open"}
        
        `}
        >
          {links.map((link, i) => {
            return (
              <a
                key={link.href + Math.random()}
                href={link.href}
                className="item"
                style={{
                  //@ts-ignore
                  "--i": i
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </header>
    </>
  );
}
