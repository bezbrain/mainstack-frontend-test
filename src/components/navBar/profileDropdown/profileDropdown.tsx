import { dropdown } from "../../../utils/data";

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 top-[72px] bg-[#fff] shadow-md rounded-xl w-[350px] py-4">
      <header className="flex items-center gap-3 px-4">
        <span className="bg-[#3b4147] text-[#f5f5f7] h-[35px] w-[35px] rounded-full flex items-center justify-center">
          OJ
        </span>
        <p>
          <h3 className="font-semibold text-xl">Oliver Jones</h3>
          <p>olivierjones@gmail.com</p>
        </p>
      </header>

      <ul>
        {dropdown.map((each) => {
          const { id, Icon, content } = each;
          return (
            <li key={id}>
              <a
                href=""
                className="flex items-center gap-3 mt-3 text-lg font-semibold hover:bg-[#edf0f5] px-4 py-2"
              >
                <Icon />
                <p>{content}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileDropdown;
