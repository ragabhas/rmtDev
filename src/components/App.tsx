import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import Logo from "./Logo";
import BookmarksButton from "./BookmarksButton";
import SearchForm from "./SearchForm";
import Sidebar, { SidebarTop } from "./Sidebar";
import JobItemContent from "./JobItemContent";
import Sorting from "./SortingControls";
import ResultsCount from "./ResultsCount";
import Pagination from "./PaginationControls";
import JobList from "./JobList";
import { useJobItems } from "../lib/hooks";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [jobItems, isLoading] = useJobItems(searchText);
  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>
        <SearchForm
          searchText={searchText}
          onSearchTextChange={setSearchText}
        />
      </Header>
      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount />
            <Sorting />
          </SidebarTop>
          <JobList jobItems={jobItems} isLoading={isLoading} />
          <Pagination />
        </Sidebar>
        <JobItemContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;
