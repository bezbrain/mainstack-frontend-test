import { BsLink } from "react-icons/bs";
import { FaRegWindowRestore } from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import styled from "styled-components";

const SideIcons = () => {
  return (
    <SideIconsWrapper className="fixed top-1/2 -translate-y-1/2 z-50  flex-col gap-4 border-[1px] p-1 rounded-3xl shadow-xl bg-white hidden 2xl:flex">
      <div className="relative">
        <BsLink className="link__icon cursor-pointer text-4xl hover:bg-gradient-to-r from-[#fcfc1c] to-[#FF9D0A] rounded-full p-2 hover:text-[#f5f5f7]" />
        <p
          className={`link__text absolute left-12 top-0 text-sm bg-[#141417] p-2 rounded-md text-[#f5f5f7] w-[75px]`}
        >
          Link in Bio
        </p>
      </div>

      <div className="relative">
        <FaRegWindowRestore className="store__icon cursor-pointer text-4xl hover:bg-gradient-to-r from-[#03FFE5] to-[#14B348] rounded-full p-2 hover:text-[#f5f5f7]" />
        <p
          className={`store__text absolute left-12 top-0 text-sm bg-[#141417] p-2 rounded-md text-[#f5f5f7]`}
        >
          Store
        </p>
      </div>

      <div className="relative">
        <GrMultimedia className="media__icon cursor-pointer text-4xl hover:bg-gradient-to-r from-[#03FFE5] to-[#14B348] rounded-full p-2 hover:text-[#f5f5f7]" />
        <p
          className={`media__text absolute left-12 top-0 text-sm bg-[#141417] p-2 rounded-md w-[72px] text-[#f5f5f7]`}
        >
          Media Kit
        </p>
      </div>

      <div className="relative">
        <LiaFileInvoiceSolid className="invoice__icon cursor-pointer text-4xl hover:bg-gradient-to-r from-[#E7CFFF] to-[#870FFF] rounded-full p-2 hover:text-[#f5f5f7]" />
        <p
          className={`invoice__text absolute left-12 top-0 text-sm bg-[#141417] p-2 rounded-md text-[#f5f5f7]`}
        >
          Invoicing
        </p>
      </div>
    </SideIconsWrapper>
  );
};

export default SideIcons;

const SideIconsWrapper = styled.div`
  .link__text,
  .store__text,
  .media__text,
  .invoice__text {
    display: none;
  }
  .link__icon:hover + .link__text,
  .store__icon:hover + .store__text,
  .media__icon:hover + .media__text,
  .invoice__icon:hover + .invoice__text {
    display: block;
  }

  .link__text::before,
  .store__text::before,
  .media__text::before,
  .invoice__text::before {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 12px;
    bottom: 0;
    right: 60px;
    margin: 0 auto;
    transform: rotate(45deg);
    background-color: #000;
  }
  .link__text::before {
    left: -10px;
  }
  .store__text::before {
    left: -2px;
  }

  .media__text::before {
    left: -6px;
  }
  .invoice__text::before {
    left: -3px;
  }
`;
