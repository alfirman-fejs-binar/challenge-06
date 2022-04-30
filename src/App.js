import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Routes from "./Routes";

function App() {
  const navigate = useNavigate();
  const { carId } = useParams();
  const { pathname } = useLocation();
  const { isLogin, userData } = useSelector((state) => state.auth);

  useEffect(() => {
    const replace = (to) => navigate(to, { replace: true });

    const isUserAuthorize = isLogin && userData.role === "user";
    const isAdminAuthorize = isLogin && userData.role === "admin";

    if (pathname === "/" && !isUserAuthorize) return replace("/login");
    if (pathname === `/${carId}` && !isUserAuthorize) return replace("/login");
    if (pathname === "/admin" && !isAdminAuthorize) return replace("/login");
    if (pathname === "/login" && isUserAuthorize) return replace("/");
    if (pathname === "/login" && isAdminAuthorize) return replace("/admin");
    if (pathname === "/register" && isUserAuthorize) return replace("/");
    if (pathname === "/register" && isAdminAuthorize) return replace("/admin");
  }, [pathname, isLogin, navigate, carId, userData.email]);

  return <Routes />;
}

export default App;
