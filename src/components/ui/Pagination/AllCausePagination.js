const FeaturedPagination = ({ featuredCardPerPage, allCampaign, paginate }) => {

  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(allCampaign / featuredCardPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="page-numbers">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabindex="-1">
            Previous
          </a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FeaturedPagination;
