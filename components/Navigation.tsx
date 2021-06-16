import { useRouter } from "next/dist/client/router";
import Link from "next/link";
export default function Navigation({
  pages,
}: {
  pages: { href: string; name: string }[];
}) {
  const router = useRouter();
  return (
    <div className="navigation">
      {pages.map((page) => {
        return (
          <Link href={page.href} key={page.href}>
            <a className={router.route === page.href ? "selected" : ""}>
              {page.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
