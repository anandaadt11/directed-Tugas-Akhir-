import classNames from "classnames";
import Link from "next/link";

interface MenuFooterProps {
  title: string;
  active?: boolean;
  textColor?: boolean;
  btnLight?: boolean;
  href: string;
}
export default function MenuFooter(props: Partial<MenuFooterProps>) {
  const { title, active, href = "/", textColor, btnLight } = props;
  const classTitle = classNames({
    "nav-link": true,
    active,
    "text-primary": textColor,
    "btn-light": btnLight,
  });

  return (
    <li className={`nav-item  ${btnLight} mb-2`}>
      <Link className={classTitle} aria-current="page" href={href}>
        {title}
      </Link>
    </li>
  );
}
