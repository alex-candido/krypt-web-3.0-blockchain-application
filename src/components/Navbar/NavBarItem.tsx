interface NavBarItemProps {
  title: string;
  classprops?: string;
}

const NavBarItem = ({ title, classprops }: NavBarItemProps) => {
  return (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
  )
}

export default NavBarItem;

