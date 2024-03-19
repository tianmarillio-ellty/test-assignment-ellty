import CustomCheckbox from '@/components/CustomCheckbox';
import { FC } from 'react';

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
  return (
    <div
      className="group flex h-[42px] w-full cursor-pointer items-center justify-between py-[8px] pl-[22px] pr-[15px]"
      onClick={() => toggleChecked(pageId)}
    >
      <label htmlFor={`page-${pageId}`}>{title}</label>
      <CustomCheckbox
        id={`page-${pageId}`}
        isChecked={isChecked}
       />
    </div>
  );
};

export default PageSelectorItem;
