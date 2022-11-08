import classNames from "classnames";
import Link from "next/link";

interface MenuNavbarProps {
  title: string;
  active?: boolean;
  textColor?: boolean;
  btnLight?: boolean;
  href: string;
}
export default function MenuNavbar(props: Partial<MenuNavbarProps>) {
  const { title, active, href = "/", textColor, btnLight } = props;
  const classTitle = classNames({
    "nav-link": true,
    active,
    "text-primary": textColor,
    "btn-light": btnLight,
  });

  return (
    <li className={`nav-item btn ${btnLight}`}>
      <Link className={classTitle} aria-current="page" href={href}>
        {title}
      </Link>
    </li>
  );
}
