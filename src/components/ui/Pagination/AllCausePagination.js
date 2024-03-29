
const FeaturedPagination = ({ featuredCardPerPage, allCampaign, paginate }) => {

  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(allCampaign / featuredCardPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="page-numbers">
      <ul className="pagination justify-content-center">   
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
       
      </ul>
    </nav>
  );
};

export default FeaturedPagination;
