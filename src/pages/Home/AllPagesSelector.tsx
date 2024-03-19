import CustomCheckbox from '@/components/CustomCheckbox';
import { FC, useState } from 'react';

interface AllPagesSelectorProps {
  isChecked: boolean;
  onClick: () => void;
}

const AllPagesSelector: FC<AllPagesSelectorProps> = ({
  isChecked,
  onClick,
}) => {
  const [showShadow, setShowShadow] = useState(false);
  return (
    <div
      className="group flex h-[42px] w-full cursor-pointer items-center justify-between py-[8px] pl-[22px] pr-[15px]"
      onMouseDown={() => setShowShadow(true)}
      onMouseUp={() => setShowShadow(false)}
      onClick={onClick}
    >
      <p>All pages</p>
      <CustomCheckbox isChecked={isChecked} showShadow={showShadow} />
    </div>
  );
};

export default AllPagesSelector;
