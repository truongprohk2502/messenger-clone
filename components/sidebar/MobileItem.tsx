import Link from "next/link";
import clsx from "clsx";

interface Props {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem: React.FC<Props> = ({ href, icon: Icon, active, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx([
        "group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100",
        { "bg-gray-100 text-black": active },
      ])}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
