import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { NoteNews } from "../page/note-news";
import { Navbar, Footer } from "../components";
import LayoutContent from "../layout/LayoutContent";
import LayoutGrid from "../layout/LayoutGrid";
import { AuthContext } from "../context/auth-context";
import { Search } from '../page/search';

export const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);

  interface ProtectProps {
    children?: React.ReactNode;
  }

  const ProtectedRoute: React.FC<ProtectProps> = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return <>{children};</>;
  };
  return (
    <>
      <Navbar />
      <LayoutContent>
        <LayoutGrid>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route
              path="note/:id"
              element={
                <ProtectedRoute>
                  <NoteNews />
                </ProtectedRoute>
              }
            />
            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </LayoutGrid>
      </LayoutContent>
      <Footer />
    </>
  );
};
