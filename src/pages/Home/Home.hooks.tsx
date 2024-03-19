import { useState } from 'react';

interface InitialPageState {
  id: number;
  title: string;
  isChecked: boolean;
}

const initialPageStates: InitialPageState[] = [
  {
    id: 1,
    title: 'Page 1',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Page 2',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Page 3',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Page 4',
    isChecked: false,
  },
  {
    id: 5,
    title: 'Page 5',
    isChecked: false,
  },
  {
    id: 6,
    title: 'Page 6',
    isChecked: false,
  },
];

const useHomeHooks = () => {
  const [pages, setPages] = useState(initialPageStates);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const setAllIsCheckedValue = (isChecked: boolean) => {
    const updatedPages = pages.map((page) => {
      return {
        ...page,
        isChecked,
      };
    });

    setPages(updatedPages);
  };

  const toggleChecked = (id: number) => {
    const foundPage = pages.find((page) => page.id === id);
    if (!foundPage) return;

    const updatedPages = pages.map((page) => {
      if (page.id !== id) return page;

      return {
        ...page,
        isChecked: !page.isChecked,
      };
    });

    const isAllSelected = updatedPages.every((page) => page.isChecked);

    setPages(updatedPages);
    setIsSelectAll(isAllSelected ? true : false);
  };

  const toggleIsSelectAll = () => {
    const currentValue = isSelectAll;

    setIsSelectAll(!currentValue);
    setAllIsCheckedValue(!currentValue);
  };

  return {
    pages,
    setPages,
    isSelectAll,
    setIsSelectAll,
    toggleChecked,
    toggleIsSelectAll,
  };
};

export default useHomeHooks;
