import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Activities", path: "/activities" },
    { name: "Reading", path: "/reading" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
          Portfolio
        </Link>
        <div className="flex items-center gap-4 sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Toggle dark mode"
            title="Toggle theme"
          >
            <Sun className="w-5 h-5 dark:hidden" />
            <Moon className="w-5 h-5 hidden dark:block" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
