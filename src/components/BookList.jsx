import React from "react";
import { Link } from "react-router-dom";

function BookList() {
  return (
    <div className="col-md-4">
      <div className="card">
        <h5 className="card-header custom_header">
          <i className="fas fa-book-open" /> অন্যান্য শ্রেণী-সমূহের পাঠ্যপুস্তক
        </h5>
        <div className="card-body p-0">
          <ul className="list-group event_list">
            <Link
              to="/books/play"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div text-center"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <i className="fas fa-book-reader nav-icon" />
              </div>
              <div className="title d-inline-block">প্লে</div>
            </Link>
            <Link
              to="/books/nursery"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div text-center"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <i className="fas fa-book-reader nav-icon" />
              </div>
              <div className="title d-inline-block">নার্সারী</div>
            </Link>
            <Link
              to="/books/class-1"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div text-center"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <i className="fas fa-book-reader nav-icon" />
              </div>
              <div className="title d-inline-block">প্রথম শ্রেণি</div>
            </Link>
            <Link
              to="/books/class-2"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div text-center"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <i className="fas fa-book-reader nav-icon" />
              </div>
              <div className="title d-inline-block">দ্বিতীয় শ্রেণি</div>
            </Link>
            <Link
              to="/books/class-3"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div text-center"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <i className="fas fa-book-reader nav-icon" />
              </div>
              <div className="title d-inline-block">তৃতীয় শ্রেণি</div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookList;
