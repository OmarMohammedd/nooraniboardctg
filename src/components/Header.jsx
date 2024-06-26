/* eslint-disable no-script-url */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nooraniboardctg.com/public/js/noorani.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header style={{ marginBottom: "1.2rem" }}>
      <div class="header_top_section">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mbl_hide">
              <ul class="header_top_link float-left h-100 mt-1">
                <li>
                  <Link to="">
                    <i class="fas fa-envelope-open"></i>{" "}
                    nooraniboardctg@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="" style={{ fontSize: "14px" }}>
                    <i className="fas fa-phone"></i> ০১৭৭১-৫৫৫০০০, ০১৩২২-৮৯১০২০,
                    ০১৩২২-৮৯১০৪০, ০১৩২২-৮৯১০৫০
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-12">
              <ul class="header_top_link float-right">
                <li>
                  <Link
                    style={{ padding: "4px 12px" }}
                    class="social_icon hvr-rectangle-out"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    target="_social"
                    to="https://www.facebook.com/%E0%A6%A8%E0%A7%82%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A7%80-%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A7%80%E0%A6%AE%E0%A7%81%E0%A6%B2-%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A6%86%E0%A6%A8-%E0%A6%AC%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%A1-%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6-106523684823684"
                    data-original-title="Facebook Page"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                </li>

                <li>
                  <Link
                    style={{ padding: "4px 14px" }}
                    class="social_icon hvr-rectangle-out"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    target="_social"
                    to="imo://send?phone=8801771555000"
                    data-original-title="Imo: ০১৭৭১৫৫৫০০০"
                  >
                    <i class="fas fa-info"></i>
                  </Link>
                </li>

                <li>
                  <Link
                    className="social_icon hvr-rectangle-out"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    target="_social"
                    to="https://web.whatsapp.com/send?phone=8801771555000"
                    data-original-title="Whatsapp: ০১৭৭১৫৫৫০০০"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                </li>

                <li className="login_link hvr-icon-pulse-grow">
                  <Link
                    to="/login"
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    className="hvr-rectangle-out"
                  >
                    <i className="fas fa-key hvr-icon"></i>&nbsp;প্রতিষ্ঠান
                    লগ-ইন
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="logo_section">
        <div class="container">
          <div class="row">
            <div class="col-12 m-auto text-center py-1 logo_portion">
              <Link to="/">
                <img
                  style={{
                    maxHeight: "125px",
                    width: "auto",
                    maxWidth: "100%",
                  }}
                  src="https://nooraniboardctg.com/public/main_cover.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="menu_bar" id="menu_bar">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav m-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    হোম{" "}
                  </Link>
                </li>
                <li class="nav-item dmenu dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    পরিচিতি
                  </Link>
                  <div
                    className="dropdown-menu sm-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ display: "none" }}
                  >
                    <Link className="dropdown-item" to="/page/bord-priciti">
                      বোর্ড পরিচিতি
                    </Link>
                    <Link className="dropdown-item" to="/page/amader-karzkrm">
                      আমাদের কার্যক্রম
                    </Link>
                    <Link className="dropdown-item" to="/message/1">
                      চেয়ারম্যান
                    </Link>
                    <Link className="dropdown-item" to="/message/2">
                      মহাসচিব
                    </Link>

                    <Link
                      className="dropdown-item"
                      to="javascript:void(0)"
                      data-toggle="modal"
                      data-target="#phone_modal"
                    >
                      মাদরাসা নিবন্ধন (পরিদর্শক)
                    </Link>
                  </div>
                </li>
                <li class="nav-item dmenu dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    সদস্যসমূহ
                  </Link>
                  <div
                    className="dropdown-menu sm-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ display: "none" }}
                  >
                    <Link className="dropdown-item" to="/members-list/1">
                      মজলিশে আমেলা (কার্যকরী পরিষদ)
                    </Link>
                    <Link className="dropdown-item" to="/members-list/2">
                      মজলিশে সূরা
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/members/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%95-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%95"
                    >
                      প্রশিক্ষক ও পরিদর্শক
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/members/%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BE"
                    >
                      অফিস কর্মকর্তা
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/members/%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%AC%E0%A7%83%E0%A6%A8%E0%A7%8D%E0%A6%A6"
                    >
                      কর্মচারীবৃন্দ
                    </Link>
                  </div>
                </li>

                {/* <li class="nav-item dmenu dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  আবেদন ফরম
                </Link>

                <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown" style={{ display: 'none' }}>
                  <Link class="dropdown-item" to="/institute-register-online">মাদরাসা
                    নিবন্ধন ফরম (অনলাইন)</Link>

                  <Link class="dropdown-item"
                    to="/form/madrasah-registration-form">মাদরাসা নিবন্ধন ফরম</Link>
                  <Link class="dropdown-item"
                    to="/form/muallem-recruitment-application-form">মুয়াল্লিম নিয়োগ
                    আবেদন ফরম</Link>

                  <Link class="dropdown-item"
                    to="/form/muallem-registration-form">মুয়াল্লিম ভর্তি ফরম</Link>

                  <Link class="dropdown-item"
                    to="/form/teacher-certificate-application-form-bangla">মুয়াল্লিম
                    সনদ আবেদন ফরম (বাংলা)</Link>

                  <Link class="dropdown-item"
                    to="/form/teacher-certificate-application-form-arabic">মুয়াল্লিম
                    সনদ আবেদন ফরম (আরবি)</Link>
                  <Link class="dropdown-item"
                    to="/form/kendreey-snd-preekshar-uttrptr-pun-nireekshner-abedn-frm">কেন্দ্রীয়
                    সনদ পরীক্ষার উত্তরপত্র পুণঃ নিরীক্ষণের আবেদন ফরম</Link>
                </div>


              </li> */}

                <li class="nav-item">
                  <Link class="nav-link" to="/application">
                    application
                  </Link>
                  {/* অ্যাপ্লিকেশন */}
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/result">
                    ফলাফল
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/notice">
                    নোটিশ
                  </Link>
                </li>
                <li class="nav-item dmenu dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    প্রশিক্ষণ
                  </Link>

                  <div
                    className="dropdown-menu sm-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ display: "none" }}
                  >
                    <Link
                      class="dropdown-item"
                      to="/moallem-training/%E0%A6%86%E0%A6%B0%E0%A6%AC%E0%A7%80"
                    >
                      মুয়াল্লিম প্রশিক্ষণ (আরবী)
                    </Link>
                    <Link
                      class="dropdown-item"
                      to="/moallem-training/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE"
                    >
                      মুয়াল্লিম প্রশিক্ষণ (বাংলা)
                    </Link>

                    <Link class="dropdown-item" to="/moallem-training-center">
                      সকল প্রশিক্ষণ কেন্দ্রের তালিকা
                    </Link>

                    <Link class="dropdown-item" to="/permanent-training-center">
                      স্থায়ী প্রশিক্ষণ কেন্দ্রসমূহ
                    </Link>
                    <Link
                      class="dropdown-item"
                      to="/page/prsikshne-ongsgrhner-niymablee"
                    >
                      প্রশিক্ষণের নিয়মাবলী
                    </Link>
                    <Link
                      class="dropdown-item"
                      to="/moallem-registration-forgot-form"
                    >
                      পূরণকৃত রেজিস্ট্রেশন ফরম ডাউনলোড
                    </Link>

                    <Link
                      class="dropdown-item"
                      to="/moallem-registration-admin-form"
                    >
                      প্রশিক্ষণার্থীর তালিকা (প্রশিক্ষক এডমিন)
                    </Link>
                  </div>
                </li>

                <li class="nav-item dmenu dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown_exam"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    পরীক্ষা সংক্রান্ত
                  </Link>
                  <div
                    className="dropdown-menu sm-menu"
                    aria-labelledby="navbarDropdown_exam"
                    style={{ display: "none" }}
                  >
                    <Link class="dropdown-item" to="/notice?is_exam=1">
                      নোটিশ
                    </Link>
                    <Link class="dropdown-item" to="/form/admit-card">
                      প্রবেশপত্র
                    </Link>
                  </div>
                </li>

                <li class="nav-item">
                  <Link class="nav-link " to="/payment-fee">
                    ফি প্রদান
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/retail-order">
                    বই ও স্টেশনারি
                  </Link>
                </li>

                <li class="nav-item dropdown megamenu-li dmenu">
                  <Link
                    class="nav-link dropdown-toggle"
                    to=""
                    id="dropdown01"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    অন্যান্য
                  </Link>
                  <div
                    className="dropdown-menu megamenu sm-menu border-top"
                    aria-labelledby="dropdown01"
                    style={{ display: "none" }}
                  >
                    <div class="row">
                      <div class="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>প্রকাশনা/পাঠ্যপুস্তক </h6>
                        <Link class="dropdown-item" to="/books/play">
                          <i class="fas fa-book-open"></i> প্লে
                        </Link>
                        <Link class="dropdown-item" to="/books/nursery">
                          <i class="fas fa-book-open"></i> নার্সারী
                        </Link>
                        <Link class="dropdown-item" to="/books/class-1">
                          <i class="fas fa-book-open"></i> প্রথম শ্রেণি
                        </Link>
                        <Link class="dropdown-item" to="/books/class-2">
                          <i class="fas fa-book-open"></i> দ্বিতীয় শ্রেণি
                        </Link>
                        <Link class="dropdown-item" to="/books/class-3">
                          <i class="fas fa-book-open"></i> তৃতীয় শ্রেণি
                        </Link>
                      </div>
                      <div class="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>সিলেবাস</h6>
                        <Link class="dropdown-item" to="/syllabus/play">
                          <i class="fas fa-book-reader"></i> প্লে
                        </Link>
                        <Link class="dropdown-item" to="/syllabus/nursery">
                          <i class="fas fa-book-reader"></i> নার্সারী
                        </Link>
                        <Link class="dropdown-item" to="/syllabus/class-1">
                          <i class="fas fa-book-reader"></i> প্রথম শ্রেণি
                        </Link>
                        <Link class="dropdown-item" to="/syllabus/class-2">
                          <i class="fas fa-book-reader"></i> দ্বিতীয় শ্রেণি
                        </Link>
                        <Link class="dropdown-item" to="/syllabus/class-3">
                          <i class="fas fa-book-reader"></i> তৃতীয় শ্রেণি
                        </Link>
                      </div>

                      <div class="col-sm-6 col-lg-3 border-right mb-4">
                        <h6>ছবি/ভিডিও</h6>

                        <Link class="dropdown-item" to="/photo-gallery">
                          <i class="fas fa-camera-retro"></i>ছবি
                        </Link>

                        <Link class="dropdown-item" to="/video-gallery">
                          <i class="fas fa-file-video"></i> ভিডিও
                        </Link>
                        <Link class="dropdown-item" to="/event">
                          <i class="fas fa-calendar-alt"></i>সভা / অনুষ্ঠান
                        </Link>
                      </div>
                      <div class="col-sm-6 col-lg-3 border-right mb-4">
                        <Link
                          class="dropdown-item"
                          to="/page/bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe"
                        >
                          <i class="fas fa-clipboard-check"></i>বিশেষ জরুরী
                          পরামর্শ
                        </Link>

                        <Link class="dropdown-item" to="/page/ovivabker-dayitw">
                          <i class="fas fa-atlas"></i>অভিভাবকের দায়িত্ব
                        </Link>

                        <Link
                          class="dropdown-item"
                          to="/page/chatr-chatreeder-krneey"
                        >
                          <i class="fas fa-clipboard-list"></i>ছাত্র-ছাত্রীদের
                          করণীয়
                        </Link>

                        <Link class="dropdown-item" to="/page/mene-clte-pari">
                          <i class="fas fa-calendar-check"></i>মেনে চলতে পারি
                        </Link>

                        <Link class="dropdown-item" to="/transaction">
                          <i class="fas fa-file-invoice-dollar"></i>অনলাইন
                          পেমেন্ট প্রুফ ডাউনলোড
                        </Link>
                        <Link class="dropdown-item" to="/contact">
                          <i class="fas fa-mail-bulk"></i>
                          যোগাযোগ
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto"></ul>
            </div>
          </nav>
        </div>
      </div>

      <div class="breaking_news">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-lg-1 col-2 pr-sm-0 pr-md-0">
              <div class="py-1 bg-danger text-white text-center breaking-caret">
                নোটিশ
              </div>
            </div>

            <div class="col-md-10 col-lg-11 col-10 pl-md-4 py-1">
              <div class="breaking-box">
                <div
                  id="carouselbreaking"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item">
                      <Link
                        class=""
                        to="/notice/1m-samyik-preeksha-rutin-2023ing"
                      >
                        ১ম সাময়িক পরীক্ষা রুটিন: ২০২৪ইং
                      </Link>
                    </div>
                    <div class="carousel-item">
                      <Link
                        class=""
                        to="/notice/1443-hijree-trriteey-srenir-preekshar-rutin"
                      >
                        ১৪৪৫ হিজরী -তৃতীয় শ্রেণির পরীক্ষার রুটিন
                      </Link>
                    </div>
                    <div class="carousel-item">
                      <Link
                        class=""
                        to="/notice/hijree-1445-sner-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin"
                      >
                        হিজরী ১৪৪৫ সনের -প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির
                        পরীক্ষার রুটিন
                      </Link>
                    </div>
                    <div class="carousel-item">
                      <Link
                        class=""
                        to="/notice/1443-hijree-preekshar-fi-sngkrant"
                      >
                        ১৪৪৫ হিজরী পরীক্ষার ফি সংক্রান্ত
                      </Link>
                    </div>
                    <div class="carousel-item active">
                      <Link
                        class=""
                        to="/notice/kendreey-snd-trriteey-preekshar-rutin"
                      >
                        কেন্দ্রীয় সনদ (তৃতীয়) পরীক্ষার রুটিন
                      </Link>
                    </div>
                    <div class="carousel-item">
                      <Link class="" to="/notice/onlaine-fi-prisodher-pddhti">
                        অনলাইনে ফি পরিশোধের পদ্ধতি
                      </Link>
                    </div>
                    <div class="carousel-item">
                      <Link
                        class=""
                        to="/notice/onlaine-bi-oo-shtesnaree-pnz-kryer-pddhti"
                      >
                        অনলাইনে বই ও ষ্টেশনারী পণ্য ক্রয়ের পদ্ধতি
                      </Link>
                    </div>
                    <div class="carousel-item">
                      <Link
                        class=""
                        to="/notice/kendreey-snd-preeksha-2023-er-cithi"
                      >
                        কেন্দ্রীয় সনদ পরীক্ষা- ২০২৩ এর চিঠি
                      </Link>
                    </div>
                  </div>

                  <div class="navigation-box p-2 d-none d-sm-block">
                    <Link
                      class="carousel-control-prev text-primary"
                      to="#carouselbreaking"
                      role="button"
                      data-slide="prev"
                    >
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                      <span class="sr-only">Previous</span>
                    </Link>

                    <Link
                      class="carousel-control-next text-primary"
                      to="#carouselbreaking"
                      role="button"
                      data-slide="next"
                    >
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                      <span class="sr-only">Next</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
