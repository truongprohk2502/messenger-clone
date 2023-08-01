import clsx from "clsx";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<Props> = ({ icon: Icon, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "inline-flex w-full justify-center rounded-md px-4 py-2 ",
        "bg-white text-gray-500 shadow-sm",
        "ring-1 ring-inset ring-gray-300",
        "hover:bg-gray-50 focus:outline-offset-0"
      )}
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
