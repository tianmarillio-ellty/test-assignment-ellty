import CustomCheckbox from '@/components/CustomCheckbox';
import { FC, useState } from 'react';

interface PageSelectorProps {
  pageId: number;
  title: string;
  isChecked: boolean;
  toggleChecked: (id: number) => void;
}

const PageSelectorItem: FC<PageSelectorProps> = ({
  pageId,
  title,
  isChecked,
  toggleChecked,
}) => {
  const [showShadow, setShowShadow] = useState(false);

  return (
    <div
      className="group flex h-[42px] w-full cursor-pointer items-center justify-between py-[8px] pl-[22px] pr-[15px]"
      onMouseDown={() => setShowShadow(true)}
      onMouseUp={() => setShowShadow(false)}
      onMouseOut={() => setShowShadow(false)}
      onClick={() => toggleChecked(pageId)}
    >
      <p>{title}</p>
      <CustomCheckbox isChecked={isChecked} showShadow={showShadow} />
    </div>
  );
};

export default PageSelectorItem;
