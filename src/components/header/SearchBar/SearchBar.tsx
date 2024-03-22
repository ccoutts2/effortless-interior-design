import styles from "./SearchBar.module.scss";
import React from "react";

interface Props {
  isVisible: boolean;
}

const SearchBar: React.FC<Props> = ({ isVisible }) => {
  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchForm} id="search" name="search">
        <input
          type="text"
          className={`${styles.searchBar} ${isVisible && styles.visible}`}
          placeholder="Search"></input>
      </form>
    </div>
  );
};

export default SearchBar;
