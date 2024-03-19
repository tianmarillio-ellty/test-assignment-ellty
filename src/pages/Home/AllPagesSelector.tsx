import CustomCheckbox from '@/components/CustomCheckbox';
import { FC } from 'react';

interface AllPagesSelectorProps {
  isChecked: boolean;
  onClick: () => void;
}

const AllPagesSelector: FC<AllPagesSelectorProps> = ({
  isChecked,
  onClick,
}) => {
  return (
    <div
      className="group flex h-[42px] w-full cursor-pointer items-center justify-between py-[8px] pl-[22px] pr-[15px]"
      onClick={onClick}
    >
      <label>All pages</label>
      <CustomCheckbox isChecked={isChecked} />
    </div>
  );
};

export default AllPagesSelector;
