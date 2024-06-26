/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Saree() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nooraniboardctg.com/public/js/noorani.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ background: "url(https://nooraniboardctg.com/public/bg.jpg)" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Header />

      <div className="container">
        <section>
          <div className="row">
            <div className="col-md-8">
              <div className="pb-3 card event_card event_card_details">
                <div className="ribbon">
                  <span className="cursive_font line_height_1">
                    28<sup>th</sup> Oct 2023
                  </span>
                </div>
                <div className="card-body p-4 mt-4">
                  <h5 className="card-title text-center">
                    <Link className="text-center" to="#">
                      2023 সালের -প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির
                      পরীক্ষার রুটিন
                    </Link>
                  </h5>
                  <p className="card-text text-justify" />
                  <p>
                    <span style={{ fontFamily: "Poppins, sans-serif" }}>
                      নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ&nbsp;
                    </span>
                    <font
                      face="Poppins, sans-serif"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      কর্তৃক আয়োজিত 2023 ইংরেজী সনের
                    </font>
                    <font
                      face="Poppins, sans-serif"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      &nbsp;প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির পরীক্ষার
                      রুটিন
                    </font>
                    <br />
                  </p>
                  <p />
                </div>
                <Link to="#">
                  <img
                    className="mw-75 card-img-top"
                    src="../public/storage/notice/2023-saler-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin.jpg"
                    alt="Card image cap"
                  />
                </Link>
                <br />
                <Link
                  to="../public/storage/notice/2023-saler-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin.jpg"
                  download="2023 সালের -প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির পরীক্ষার রুটিন"
                  className="mt-2 btn btn-danger"
                >
                  ডাউনলোড করুন
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5 className="card-header custom_header">
                  <i className="fas fa-camera-retro" /> সাম্প্রতিক নোটিশ
                  <span className="float-right right_header">
                    <Link to="/notice">
                      সকল নোটিশ <i className="fas fa-external-link-alt" />
                    </Link>
                  </span>
                </h5>
                <div className="card-body p-0">
                  <ul className="list-group event_list">
                    <Link
                      to="/notice/1m-samyik-preeksha-rutin-2023ing"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="ribbon-wrapper">
                        <div className="notice_ribbon">15th Mar-24</div>
                      </div>
                      <div className="title d-inline-block notice_title_link">
                        ১ম সাময়িক পরীক্ষা রুটিন: ২০২৪ইং
                      </div>
                    </Link>
                    <Link
                      to="/notice/1443-hijree-trriteey-srenir-preekshar-rutin"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="ribbon-wrapper">
                        <div className="notice_ribbon">24th Jan-24</div>
                      </div>
                      <div className="title d-inline-block notice_title_link">
                        ১৪৪৫ হিজরী -তৃতীয় শ্রেণির পরীক্ষার রুটিন
                      </div>
                    </Link>
                    <Link
                      to="/notice/hijree-1445-sner-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="ribbon-wrapper">
                        <div className="notice_ribbon">24th Jan-24</div>
                      </div>
                      <div className="title d-inline-block notice_title_link">
                        হিজরী ১৪৪৫ সনের -প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির
                        পরীক্ষার রুটিন
                      </div>
                    </Link>
                    <Link
                      to="/notice/1443-hijree-preekshar-fi-sngkrant"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="ribbon-wrapper">
                        <div className="notice_ribbon">23rd Jan-24</div>
                      </div>
                      <div className="title d-inline-block notice_title_link">
                        ১৪৪৫ হিজরী পরীক্ষার ফি সংক্রান্ত
                      </div>
                    </Link>
                    <Link
                      to="/notice/kendreey-snd-trriteey-preekshar-rutin"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="ribbon-wrapper">
                        <div className="notice_ribbon">29th Oct-23</div>
                      </div>
                      <div className="title d-inline-block notice_title_link">
                        কেন্দ্রীয় সনদ (তৃতীয়) পরীক্ষার রুটিন
                      </div>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <div
        className="modal fade"
        id="phone_modal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form
            onsubmit="return check_data_poridorshok()"
            action="institute-register-online"
            method="get"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  প্রশিক্ষক ও পরিদর্শক এর ফরম
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="font-weight-bold">
                    প্রশিক্ষক ও পরিদর্শক এর মোবাইল নম্বর
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        880
                      </span>
                    </div>
                    <input
                      id="p_phone"
                      type="number"
                      name="phone"
                      className="form-control"
                      placeholder="মোবাইল নম্বর দিন"
                    />
                  </div>
                </div>
                <div className="form-group" id="p_phone_err"></div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  বাতিল
                </button>
                <button type="submit" className="btn btn-primary">
                  সাবমিট
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Saree;