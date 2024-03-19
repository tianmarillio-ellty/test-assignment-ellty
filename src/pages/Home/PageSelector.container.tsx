import { FC, ReactNode } from 'react';

interface PageSelectorContainerProps {
  children: ReactNode;
}

const PageSelectorContainer: FC<PageSelectorContainerProps> = ({
  children,
}) => {
  return <div className="h-[164px] overflow-scroll">{children}</div>;
};

export default PageSelectorContainer;
