import { FC } from 'react';

interface AllPagesSelectorProps {
  checked: boolean;
  onClick: () => void;
}

const AllPagesSelector: FC<AllPagesSelectorProps> = ({ checked, onClick }) => {
  return (
    <div
      className="flex h-[42px] w-full cursor-pointer justify-between py-[8px] pl-[22px] pr-[15px]"
      onClick={onClick}
    >
      <p>All pages</p>
      <input
        type="checkbox"
        className="size-[23px] border-[1px] border-[#CDCDCD] accent-[#2469F6]"
        checked={checked}
      />
    </div>
  );
};

export default AllPagesSelector;
