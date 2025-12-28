import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

type SmartLinkProps = {
  to: string;
  scrollId?: string;
  children: React.ReactNode;
};

export function SmartLink({ to, scrollId, children }: SmartLinkProps) {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const isHomeTarget = to.startsWith("/#");

  if (isHome && scrollId) {
    return (
      <ScrollLink to={scrollId} smooth duration={500}>
        {children}
      </ScrollLink>
    );
  }

  return <Link to={to}>{children}</Link>;
}
