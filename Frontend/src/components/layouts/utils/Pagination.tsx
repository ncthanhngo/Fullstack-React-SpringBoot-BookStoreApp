import React from "react";

interface PaginationInterface {
    currentPage: number;
    totalPages: number;
    pagination: any;
}

export const Pagination: React.FC<PaginationInterface> = (props) => {
    const pages = [];
    if(props.currentPage === 1){
        pages.push(props.currentPage);
        if(props.totalPages >=2){
            pages.push(props.currentPage+1);
        }
        if(props.totalPages >=3){
            pages.push(props.currentPage+2);
        }
        
    }else if(props.currentPage >1){
        //Trang -2
        if(props.currentPage >=3)  pages.push(props.currentPage-2);
        //Trang -1
        if(props.currentPage >=2) pages.push(props.currentPage-1);
        //Trang hien tai
        pages.push(props.currentPage);
        //Trang +1
        if(props.totalPages>props.currentPage+1) pages.push(props.currentPage+1);
        //Trang +2
        if(props.totalPages>props.currentPage+2) pages.push(props.currentPage+2);
    }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={props.pagination(1)}>
          <button className="page-link"  >
            First page
          </button>
        </li>
        {
            pages.map((page) => (
                <li className="page-item" key={page} onClick={props.pagination(page)}>
                    <button className={"page-link "+ (props.currentPage===page?"active":"")}>
                        {page}
                    </button>
                </li>
            ))
        }
        <li className="page-item" onClick={props.pagination(props.totalPages)}>
          <button className="page-link" >
            Last page
          </button>
        </li>
      </ul>
    </nav>
  );
};
