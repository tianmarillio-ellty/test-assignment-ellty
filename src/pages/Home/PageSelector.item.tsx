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
      className="flex h-[42px] w-full cursor-pointer justify-between py-[8px] pl-[22px] pr-[15px]"
      onClick={() => toggleChecked(pageId)}
    >
      <p>{title}</p>
      <input
        type="checkbox"
        className="size-[23px] rounded-md border-[1px] border-[#CDCDCD] accent-[#2469F6]"
        checked={isChecked}
      />
    </div>
  );
};

export default PageSelectorItem;
