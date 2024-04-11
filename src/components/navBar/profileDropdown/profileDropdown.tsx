import { useSelector } from "react-redux";
import { dropdown } from "../../../utils/data";
import { getFirstLetter } from "../../../utils/extractFirstCase";
import { RootState } from "../../../store";

const ProfileDropdown = () => {
  const { user } = useSelector((store: RootState) => store.navStore);

  const { first_name, last_name, email } = user;

  return (
    <div
      className="absolute right-[50%] translate-x-1/2 top-[72px] bg-[#fff] shadow-md rounded-xl w-[290px] py-4 iPad:right-[0%] iPad:translate-x-0 iPad:w-[350px]"
      data-testid="profile-dropdown"
    >
      <header className="flex items-center gap-3 px-4">
        <span className="bg-[#3b4147] text-[#f5f5f7] h-[35px] w-[35px] rounded-full flex items-center justify-center">
          {getFirstLetter(first_name)}
          {getFirstLetter(last_name)}
        </span>
        <div>
          <h3 className="font-semibold text-xl">
            {first_name} {last_name}
          </h3>
          <p>{email}</p>
        </div>
      </header>

      <ul>
        {dropdown.map((each) => {
          const { id, Icon, content } = each;
          return (
            <li key={id}>
              <a
                href=""
                className="flex items-center gap-3 mt-0 text-lg font-semibold hover:bg-[#edf0f5] px-4 py-1 iPad:py-2 iPad:mt-3"
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
