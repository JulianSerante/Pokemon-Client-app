import style from './Pagination.module.css';

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.floor(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className={style.ulPage}>
        <li>
          <button className={style.pageButton} onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
        </li>
        <li className="active">
          <h2 className={style.currentPage}>{currentPage}</h2>
        </li>
        <li>
          <button className={style.pageButton} onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
