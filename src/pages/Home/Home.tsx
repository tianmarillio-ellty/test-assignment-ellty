import useHomeHooks from './Home.hooks';
import AllPagesSelector from './AllPagesSelector';
import PageSelectorContainer from './PageSelector.container';
import PageSelectorItem from './PageSelector.item';
import SubmitSection from './SubmitSection';
import HorizontalStroke from '@/components/HorizontalStroke';

const Home = () => {
  const { pages, isSelectAll, toggleChecked, toggleIsSelectAll } =
    useHomeHooks();

  return (
    <main className="container mx-auto flex justify-center pt-[161px]">
      <article className="h-[326px] w-[370px] rounded-md border-[1px] border-[#EEEEEE] py-[10px] shadow-[0_8px_15px_#1414141F,0_0_4px_#1414141F]">
        <AllPagesSelector isChecked={isSelectAll} onClick={toggleIsSelectAll} />

        <HorizontalStroke />

        <PageSelectorContainer>
          {pages.map((page) => {
            return (
              <PageSelectorItem
                key={page.id}
                pageId={page.id}
                title={page.title}
                isChecked={page.isChecked}
                toggleChecked={toggleChecked}
              />
            );
          })}
        </PageSelectorContainer>

        <HorizontalStroke />

        <SubmitSection />
      </article>
    </main>
  );
};

export default Home;
