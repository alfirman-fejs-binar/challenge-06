import { useLocation } from "react-router-dom";
import "../../../style/dashboard.css";
import { HeaderDashboard } from "../../header";

export default function LayoutDashboard({ children }) {
  const { pathname } = useLocation();

  return (
    <div id="root-dashboard">
      <div id="layout-dashboard">
        <aside>
          <a href="/">
            <div></div>
          </a>
          <a href="/" class={pathname === "/" ? "activeSideNav" : ""}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 22V12H15V22"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Dashboard</span>
          </a>
          <a
            href="/cars"
            class={pathname.includes("cars") ? "activeSideNav" : ""}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 8H20L23 11V16H16V8Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 3H1V16H16V3Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Cars</span>
          </a>
        </aside>
        <div>
          <HeaderDashboard />
          <div>
            <aside>
              <nav>
                <h6>DASHBOARD</h6>
                <ul>
                  <li>
                    <a href="#tes">Dashboard</a>
                  </li>
                </ul>
              </nav>
            </aside>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
