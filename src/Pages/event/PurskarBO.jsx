/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function PurskarBO() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div
      style={{ background: "url(https://nooraniboardctg.com/public/bg.jpg)" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Header />

      <div className="container">
        <section>
          <div className="row">
            <div className="col-md-8">
              <div className="card event_card event_card_details">
                <div className="ribbon">
                  <span className="cursive_font line_height_1">
                    02<sup>nd</sup> Feb 2021
                  </span>
                </div>
                <Link to="#">
                  <img
                    className="card-img-top"
                    src="../public/storage/event/purskar-bitrn-onushtan-2020.jpg"
                    alt="Card image cap"
                  />
                </Link>
                <div className="card-body p-2 mt-4">
                  <h5 className="card-title text-center">
                    <Link className="text-center" to="#">
                      পুরষ্কার বিতরনী অনুষ্ঠান 2020
                    </Link>
                  </h5>
                  <p className="card-text" />
                  <p>
                    নূরানী কেন্দ্রীয় সনদ পরীক্ষার পুরস্কার বিতরণী সভায় মাননীয়
                    অতিথী মহোদয়ের কাছ থেকে পুরস্কার গ্রহণের ছবি।
                  </p>
                  <p>
                    নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ কর্তৃক আয়োজিত
                    ২০২০ ইং সালের
                    <br />
                    পুরস্কার বিতরণী সভায় (সভাপতির পক্ষ হতে) প্রদত্ব
                    <br />
                    <br />
                    স্বাগত ভাষণ
                    <br />
                    نحمده ونصل علي رسوله الكريم ـ امابعد
                    <br />
                    নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ এর তত্বাবধানে
                    পরিচালিত মাদ্রাসা সমূহের ২০২০ইং সালের কেন্দ্রীয় সনদ পরীক্ষায়
                    সর্বোচ্চ মেধা তালিকায় উত্তীর্ণ ছাত্র-ছাত্রীদের পুরস্কার
                    বিতরণী ও আলোচনা সভার সম্মানিত সভাপতি মঞ্চে উপস্থিত আজকের
                    অনুষ্ঠানের সম্মানিত প্রধান অতিথি, বিশেষ অতিথি, বিভিন্ন
                    মাদ্রাসা সমূহ হতে আগত পরিচালক মহোদয়, ও বাংলাদেশের বিভিন্ন
                    জেলা থেকে আগত নূরানী বোর্ডের সম্মানিত জেলা প্রতিনিধি
                    মহোদয়গণ, সুযোগ্য শিক্ষকবৃন্দ, স্নেহের ছাত্র-ছাত্রী ও
                    সুধীবৃন্দ আলোচনা শুরু করার পূর্বে মহান প্রতিপালকের দরবারে
                    অশেষ শুকরিয়া জ্ঞাপন করছি, যিনি আমাদেরকে তা’লীমে কুরআনের
                    শিক্ষার উন্নয়ন ও অগ্রগতির প্রয়াস নিয়ে আজকের এই মহতী সভার
                    আয়োজন করার তৌফিক দান করেছেন। সাথে সাথে আজকের সভায় আগত সকলের
                    কৃতজ্ঞতা প্রকাশ করছি যারা আজকের এই মহতী সভায় উপস্থিত হয়ে যে
                    মহানুভবতা স্বহৃদ্যতা ও আন্তরিকতার পরিচয় দিয়েছেন তজ্জন্য আমরা
                    সকলেই কৃতজ্ঞ। আল্লাহ পাক সকলকেই কবুল করুন। ...আমিন।
                    <br />
                    <br />
                    সম্মানিত মেহমান ও সূধীবৃন্দ!
                    <br />
                    আজকের পুরস্কার বিতরণী সভা গতানুগতিক প্রচলিত কোন পুরস্কার
                    বিতরণী সভা নয়। বরং দ্বীন ও আধুনিক শিক্ষার সমন্বিত প্রয়াসের
                    একটি বাস্তব সম্মত সু-শিক্ষার আন্দোলন মাত্র। কারন আল্লাহপাক
                    কুরআনে কারীমে ইরশাদ করেন: تعا ونواعلي البر والتقوي ولا
                    تعاونوا علي الاثم والعدوان অর্থাৎ- “তোমরা সৎ কাজ ও তাক্বওয়ার
                    ব্যাপারে মানুষকে উৎসাহিত কর এবং অসৎ কাজ ও গুনাহের ব্যাপারে
                    মানুষকে উৎসাহিত করিও না”। এরই ধারাবাহিকতায় আজকের এই আয়োজন।
                    বন্ধুগণ! আপনারা জানেন আমাদের এ দেশ মুসলিম সংখ্যাগরিষ্ঠ দেশ
                    হলেও অন্যান্য মুসলিম দেশের পটভূমির চেয়ে ভিন্ন। যেমন, সমস্ত
                    আরব বিশ্বসহ অন্যান্য মুসলিম দেশে দ্বীনি শিক্ষা, যাহা শিক্ষা
                    করা ফরজ, তার সমন্বয়ে স্কুল-কলেজের পাঠ্য-পুস্তক রচনা করা হয়ে
                    থাকে। এবং সরকারীভাবে সকল শিক্ষা প্রতিষ্ঠানে দ্বীনি শিক্ষার
                    সু-ব্যবস্থা করা হয়ে থাকে। আমরা উদাহরণ স্বরূপ আপনাদের সামনে
                    মুসলিম দেশ হিসাবে মালয়েশিয়ার শিক্ষা ব্যবস্থার কথা উপস্থাপন
                    করতে পারি। বর্তমান মুসলিম বিশ্বের অধিনায়ক ড. মহাতির মুহাম্মদ
                    বিগত ২০০৫ইং সালে পাকিস্তান কলেজ-ইউনিভার্সিটির শিক্ষক ও
                    অধ্যাপক মহোদয়গণদের আমন্ত্রনে দু’দিন ব্যাপি এক আলোচনা সভায়
                    যোগদেন। উক্ত সভায় ড. মহাতির মুহাম্মদ তাঁর সারগর্ব আলোচনা
                    করতে গিয়ে বললেন: সর্বপ্রথম আমি যখন মালেশিয়ার প্রেসিডেন্ট
                    নির্বাচিত হই তখন দেশটি ছিল বিশ্বের অনুন্নত দেশগুলির মধ্যে
                    একটি। এই অনুন্নত দেশটিকে বিশ্বের উন্নত দেশের কাতারে কিভাবে
                    নিয়ে আসা যায় সে জন্য বেশ কিছুদিন পর্যন্ত পূর্বের
                    রাজা-বাদশাদের জীবনী অধ্যায়ন করতে থাকলাম। আমি দেখতে পেলাম
                    পূর্বের রাজা-বাদশাদের অনেকেই উন্নয়নের হাতিয়ার হিসাবে তারা
                    শিক্ষাকেই অধিক গুরুত্ব প্রদান করেছেন। অত:পর আমি কুরআনে কারীম
                    অধ্যায়ন করতে আরম্ভ করলাম। তখন দেখতে পেলাম মহান রাব্বুল
                    আলামীন রাসূলে কারীম (সা.) এর উপর প্রথম যে আয়াত নাজিল করেন,
                    সে আয়াতের প্রথম শব্দ হচ্ছে “ইক্বরা” অর্থাৎ পড়। তখন আমি
                    অনুধাবন করলাম, যে জাতির ধর্মের সূচনা শিক্ষা নিয়ে সে ধর্মের
                    অনুসারীরা শিক্ষা ব্যাতীত উন্নতি লাভ করতে পারে না। কাজেই দেশ
                    ও জাতির উন্নতি নির্ভর করছে সু-শিক্ষার উপর। তখন আমি তৎকালীন
                    বিশ্বের সবচাইতে শিক্ষা খাতে বড় ধরণের বাজেট উপস্থাপন করলাম
                    এবং শিক্ষার উপর গুরুত্ব প্রদান করলাম। অত:পর উনাকে প্রশ্ন করা
                    হলো, মাননীয় ড. সাহেব! আপনার দেশে ধর্মের অবস্থা কোন পর্যায়ে?
                    তখন উনি বললেন: আলহামদুলিল্লাহ, মালয়েশিয়াতে শতকরা প্রায় ৪০
                    ভাগ মানুষ জামাতের সহিত নামাজ আদায় করেন। অত:পর অন্য একজন
                    প্রশ্ন করলেন,
                    <br />
                    <br />
                    জনাব! আপনার দেশের ধর্মীয় শিক্ষার অবস্থা কোন পর্যায়ে? তখন উনি
                    মুচকি হেসে প্রশ্ন করলেন: আপনারা বলুন, দু’জন ডাক্তারের মধ্যে
                    একজন ডাক্তার হাফেজে কুরআন, অন্যজন হাফেজে কুরআন নন, তাহারা
                    দু’জনের মধ্যে কোন ডাক্তার উত্তম? উপস্থিত শ্রোতারা বললেন:
                    অবশ্যই যিনি হাফেজে কুরআন তিনি উত্তম। তখন তিনি বললেন বর্তমানে
                    মালয়েশিয়াতে শত শত ডাক্তার আছেন যারা হাফেজে কুরআন। অত:পর
                    জিজ্ঞেস করলেন: দু’জন মুফ্তী সাহেবের একজন কম্পিউটারের মাধ্যমে
                    ফতোয়া প্রদান করেন, অন্য জন হাতে লিখে ফতোয়া প্রদান করেন।
                    আপনারা বলুন উনাদের মধ্যে কোন মুফ্তী সাহেব উন্নত? উনারা বললেন
                    যিনি কম্পিউটারের সাহায্যে ফতোয়া প্রদান করেন। তখন তিনি বললেন:
                    বর্তমানে মালয়েশিয়াতে শত শত মুফ্তী সাহেব আছেন, যারা
                    কম্পিউটারের সাহায্যে ফতোয়া প্রদান করেন। দ্বীন ও আধুনিক
                    শিক্ষায় গুরুত্ব প্রদান করার কারণে বর্তমানে মালয়েশিয়া উন্নত
                    দেশের তালিকায় এসে পৌঁছেছে।
                    <br />
                    <br />
                    সম্মানিত উপস্থিতি,
                    <br />
                    এখন আপনারাই বলুন, যে দেশে ফতোয়া প্রদান করা, মুফ্তী তৈরী করা,
                    হাফেজে কুরআন তৈরী করার ব্যাপারে মালয়েশিয়ার প্রেসিডেন্ট ড.
                    মহাতির মুহাম্মদের মত বীর পুরুষের কত বড় উদ্যোগ। আল্লাহপাক
                    তাকে কবুল করুন, ... আমীন।
                    <br />
                    <br />
                    কিন্তু ভাগ্যের নির্মম পরিহাস আমাদের দেশ চলছে তার পুরো উল্টো।
                    আমাদের দেশে সরকারী প্রাথামিক বিদ্যালয়গুলিতে দ্বীনি শিক্ষার
                    ব্যবস্থা ও গুরুত্ব না থাকায় মুসলমানদের অধিকাংশই দ্বীনি
                    শিক্ষা-দীক্ষায় অজ্ঞ ও উদাসীন এবং ধর্মীয় অনুশাসন পালন করতে
                    গিয়ে ভুল-ভ্রান্তি ও ইচ্ছা অনুযায়ী পালন করছে। এমনকি মহাগ্রন্থ
                    কুরআনে কারীমের তেলাওয়াত পর্যন্ত নির্ভুল তেলাওয়াত করতে সক্ষম
                    এমন লোক খুবই কম পাওয়া যাবে। তদুপরি ওলামা হযরাত ও হক্কানী পীর
                    মশায়েখগণদের অক্লান্ত প্রচেষ্টা ত্যাগ ও কুরবানীর বদৌলতে এদেশে
                    এককালে হাজার হাজার সকাল বেলার মক্তব প্রতিষ্ঠার মাধ্যমে
                    সুন্দর ভাবে তা’লীমে কুরআনের কাজ আঞ্জাম দিয়ে আসছিলেন। কিন্তু
                    হঠাৎ করে মক্তবের তা’লীমকে নস্যাৎ করার এক পরিকল্পনা ইসলামের
                    দুশমনরা হাতে নিয়েছে আর তা হচ্ছে কে.জি. বা কিন্ডার গার্টেনের
                    নামে প্রতিষ্ঠান গড়ে এবং তাদের পাঠ দানের সময়টা মক্তব পড়ার
                    সময়ের সাথে সামঞ্জস্যতা করে মুসলমানদের কচি-কাঁচা শিশুদের
                    শুধুমাত্র জাগতিক ও আধুনিক শিক্ষার দিকে উদ্ভোদ্ধ করার
                    মাধ্যমে। ফলে মক্তবগুলোর মধ্যে ছাত্র-ছাত্রী হ্রাস পেতে থাকলে
                    দ্বীনের তা’লীমে ধস নামে। অতঃপর মুসলমানদের ছেলে সন্তানদের
                    বদ-দ্বীনি থেকে রক্ষা করার জন্য ওলামায়ে ক্বেরামগণ ফিকির করতে
                    আরম্ভ করেন এবং এরই ফলশ্রুতিতে আজ থেকে প্রায় ১৫ বছর পূর্বে
                    দ্বীনি শিক্ষাকে সর্বাধিক গুরুত্ব দিয়ে পাশাপাশি আধুনিক
                    শিক্ষার সমন্বিত প্রয়াসে বাস্তব সম্মত এক শিক্ষার সু-ব্যবস্থা
                    করনই নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ
                    প্রতিষ্ঠার মূল কারণ। বিশেষ করে যেখানে প্রাথমিক শিক্ষা থেকে
                    দ্বীনি শিক্ষা সমূলে উৎপাটনের চেষ্টা চলছে সেখানে দ্বীনি
                    শিক্ষার প্রয়োজনীয়তাকে ধরে রাখা এবং কোমল মতি শিশু-কিশোরদের
                    অন্তর থেকে ধর্মীয় ভাবধারাকে দূরীভূত করার যে কুট-কৌশল আঁটছে
                    তা থেকে পরিত্রাণের অন্যতম পন্থা হিসাবে এই বোর্ড প্রতিষ্ঠার
                    পটভূমি। এবং এর মাধ্যমে বাংলাদেশে হাজার হাজার মাদ্রাসা
                    প্রতিষ্ঠা লাভ করে। এই বোর্ডের তত্ত্ববধানে পরিচালিত নূরানী
                    মোয়াল্লীম প্রশিক্ষণ কোর্সের মাধ্যমে হাজার হাজার মোয়াল্লিম
                    প্রশিক্ষণ গ্রহণ করে যোগ্যতার সাথে শিক্ষকতা করে মুসলমানদের
                    ঘরে ঘরে সু-শিক্ষার আলো প্রজ্জ্বলন করে এক উজ্জ্বল নমূনা
                    স্থাপন করে জাতির খেদমত আঞ্জাম দিয়ে যাচ্ছেন। তারপরও এদেশের
                    এখনো শত শত এলাকা অন্ধকারে নিমজ্জিত, যেখানে দ্বীনি শিক্ষার
                    আলো এখনো পৌঁছেনি ঐ সমস্ত এলাকায়ও নূরানী মাদ্রাসা প্রতিষ্ঠা
                    করে দ্বীনি শিক্ষার আলো প্রজ্জ্বলন করে ভবিষ্যতে সমস্ত
                    মুসলমানদের শিশুদেরকে দ্বীনি তা’লীম ও ত্বরবীয়তের মাধ্যমে
                    যুগোপযোগী শিক্ষায় শিক্ষিত করে উত্তম জাতি গঠন করা এই বোর্ডের
                    প্রধান লক্ষ্য ও উদ্দেশ্য। মহান রাব্বুল আলামীন যদি তাওফিক দান
                    করেন এই উদ্দেশ্যের কিঞ্চিৎ যদি বাস্তবায়ন করতে পারি তাহলে
                    আমাদের শ্রম, মেধা ও অর্থের যে যোগান দেওয়া হয়েছে তা স্বার্থক
                    হবে বলে মনে করি। আল্লাহপাক এই বোর্ডের সফলতার ধারা অব্যাহত
                    রাখুন এই প্রার্থনা জানাই .... আমিন।
                    <br />
                    <br />
                    অত্র নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশের
                    তত্ত্বাবধানে পরিচালিত মাদ্রাসা সমূহের সংখ্যা ও ছাত্র-ছাত্রীর
                    সংখ্যা সংক্ষিপ্ত আকারে নিম্নে উপস্থাপন করা যাচ্ছে।
                    <br />
                    <br /> বর্তমানে নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ কর্তৃক পরিচালিত
                    <br />
                    &nbsp;&nbsp; &nbsp;মাদ্রাসা সমূহের সংখ্যা:
                    &nbsp;&nbsp;&nbsp; = ৩,১৪৮টি।
                    <br /> উক্ত মাদ্রাসা সমূহের বর্তমান সর্বমোট ছাত্র-ছাত্রীর
                    সংখ্যা ঃ &nbsp;&nbsp;&nbsp; = ৩,৭৭,৮৬০
                    <br /> ২০০৯ইং সালে সনদ পরীক্ষায় অংশগ্রহণকারী পরীক্ষার্থীদের
                    সংখ্যা সর্বমোট: &nbsp;&nbsp;&nbsp; = ২০,৫৫৭ জন
                    <br /> উত্তীর্ণ ছাত্র-ছাত্রীদের মধ্যে অ, অ-, ই, ঈ ব্যাতিত
                    শুধুমাত্র “অ+” গ্রেড প্রাপ্ত অর্থাৎ (এ- প্লাস) প্রাপ্ত
                    ছাত্র-ছাত্রীর সর্বমোট সংখ্যা:&nbsp;&nbsp;&nbsp; = ২,২৮৫ জন
                    <br /> শুধুমাত্র হাটহাজারী আঞ্চলিক কার্যালয়ের আওতায়
                    পরীক্ষায় অংশগ্রহণকারী মাদ্রাসার সংখ্যা:&nbsp; = ১৬৪টি
                    <br /> হাটহাজারী আঞ্চলিক কার্যালয়ের আওতায় সর্বমোট নূরানী
                    সনদ পরীক্ষার্থীর সংখ্যা: ৪,৭৫৮ জন, এর মধ্যে “অ+” গ্রেড
                    প্রাপ্ত ছাত্র-ছাত্রীর সংখ্য: &nbsp;&nbsp;&nbsp; = ৪৫৭ জন।
                    <br /> এদের মধ্য হতে সর্বোচ্চ মেধা তালিকায় উত্তীর্ণ
                    পুরস্কার প্রাপ্ত ছাত্র-ছাত্রীর সংখ্যা মোট &nbsp;&nbsp;&nbsp;
                    = ১৫৭ জন
                    <br />
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; তম্মধ্যে সর্বোচ্চ মেধা
                    তালিকায় সর্বোচ্চ নম্বর পেয়ে উত্তীর্ণ হয়
                    সর্বমোট&nbsp;&nbsp;&nbsp; = ২৩ জন
                    <br />
                    <br />
                    প্রিয় বন্ধুগন!
                    <br />
                    এখানে যারা সমবেত হয়েছেন তাদের মধ্যে বিভিন্ন মাদ্রাসার
                    পরিচালক, পৃষ্ঠপোষক মহোদয়গণ ও সদস্য বৃন্দরা রয়েছেন, আজকে
                    আপনাদের কাছে বিনয়ের সহিত নিবেদন থাকবে, যে যে স্থানে আছেন
                    সেখানে থেকে ইসলামী তাহ্জীব তামাদ্দুন রক্ষায় সাধ্যাতীত
                    প্রচেষ্টা চালিয়ে যাওয়ার। আজকে ইসলামের। বৈরী শক্তিগুলো
                    বিভিন্ন আদলে বিভিন্ন পন্থায় ইসলামের সব কৃষ্টি-কালচার মুছে
                    দেওয়ার পরিকল্পনায় ব্যস্ত। আমরা যদি এর মোকাবেলায় নিজস্ব
                    অবস্থানকে মজবুত করে আকড়ে ধরে রাখতে না পারি তাহলে আমাদের
                    বিপর্যয় অবশ্যম্ভাবী, আল্লাহ আমাদের এর থেকে হেফাজত করুন।
                    আল্লামা ইক্বালের ভাষায়-
                    <br />
                    <br />
                    “ঝাঞ্চা বিক্ষুদ্ধ রাত্রে আদর্শের একটি মাটির চেরাগ জ্বালিয়ে
                    পথের পাশে দাঁড়িয়ে থাকা নেহায়ত জেহাদী চেতনারই আলামত।”
                    <br />
                    আমাদের ক্ষুদ্র ক্ষুদ্র প্রচেষ্টাগুলো বৃহৎ কর্মের প্রেরণা
                    যোগাবে ইনশা আল্লাহ।
                    <br />
                    <br />
                    আপনাদেরকে দ্বীনের জন্য অনেক ত্যাগী ও কর্মঠু হতে হবে। কারণ
                    হাদীস শরীফে আছে- لكل شلئ&nbsp; افة وللعلم افاة&nbsp; অর্থাৎ-
                    “প্রতিটি বস্তুর জন্য আপদ-বিপদ বা ঝুকি রয়েছে”। আর ইলমে
                    দ্বীনের জন্য অনেক বিপদ রয়েছে। প্রত্যেকটি বস্তুর ক্ষেত্রে এক
                    বচন আর ইলমের ক্ষেত্রে বহু বচন ব্যবহার করা হয়েছে। কাজেই
                    প্রতিষ্ঠান গড়তে গেলে অনেক সমস্যার সম্মুখীন হওয়ার সম্ভাবনা
                    থাকতে পারে। আপনাদেরকে সব প্রতিকুল অবস্থাকে অনুকুলে আনার
                    চেষ্ঠা করে অবিরাম মেহনত করে যেতে হবে। মাদ্রাসা পরিচালনা করতে
                    গিয়ে অনেক বাঁধার সম্মুখীন হওয়ার সম্ভাবনাও থাকতে পারে।
                    আপনাদেরকে ঐ বাঁধা ডিঙ্গিয়ে সামনে অগ্রসর হতে হবে। ইসলামী
                    রেঁনেসার কবি র্ফরুখ আহমদের ভাষায়-
                    <br />
                    <br />
                    “দূর্গম গিরী কান্তারমরু দুস্তর পারাবার,
                    <br />
                    লঙ্গিতে হবে রাত্রি নিশিতে যাত্রীরা হুঁশিয়ার॥”
                    <br />
                    <br />
                    অতএব, পরিস্থিতির এই প্রেক্ষাপটে বর্তমান দ্বীনি শিক্ষার এই
                    দূর্যোগ অবস্থায় আপনাদের যার যা আছে অর্থাৎ অর্থ, সম্পদ, শ্রম
                    ও সু-পরামর্শ সবকিছু নিয়ে ময়দানে ঝাঁফিয়ে পড়তে হবে। কারণ মহান
                    রাব্বুল আলামীন কাল কেয়ামতের ময়দানে যদি জিজ্ঞেস করেন: “আমি
                    তোমাকে অর্থ প্রতিপত্তি এবং মেধা ও জ্ঞান দিয়েছিলাম। এবং
                    এলাকার মধ্যে সবার উপরস্থ সম্মানী ব্যক্তি হিসাবে দাঁড়
                    করেছিলাম। এমতাবস্থায় তোমার সামনে দ্বীনের তা’লীমের শিক্ষা
                    প্রতিষ্ঠানগুলো বন্ধ হওয়ার উপক্রম হলে তোমার ভূমিকা কি ছিল”?
                    তখন আপনারাই বলুন: জবাব দেওয়ার মত কোন উত্তর আপনাদের সামনে
                    থাকবে বলে আমার মনে হয় না।
                    <br />
                    প্রিয় বন্ধুগণ!
                    <br />
                    আপনারা তা’লীমের কাজে যদি আত্মনিয়োগ করেন, তাহলে দুনিয়া ও
                    আখেরাতে সফলতা ও কামিয়াবী অবশ্যম্ভাবী। কারন হাদীস শরীফে আছে:
                    الدال علي الخير كفا عله অর্থাৎ “যে কোন ভাল কাজের পথ দেখায়,
                    সে ঐ ভাল কাজ করার মত সওয়াব পায়।” অতএব, আপনার সহযোগীতায় যদি
                    মাদ্রাসার ঘর নিমার্ণ, শিক্ষকদের থাকা-খাওয়ার ব্যবস্থা ও
                    অজিফার ব্যবস্থা হয়, মাদ্রাসার সকল সমস্যা সমাধানের
                    সু-ব্যবস্থা হয়ে সুষ্ঠুভাবে তা’লীম বা শিক্ষা-দীক্ষার কাজ
                    অব্যাহত গতিতে চলতে থাকে তাহলে এর সমস্ত সওয়াব অবশ্যই আপনারাই
                    পাবেন ইনশাআল্লাহ। মহান রাব্বুল আলামীন সকল পরিচালক, পরিচালনা
                    পরিষদ ও সহযোগীতাকারীদের কবুল করুন ... আমীন।
                    <br />
                    <br />
                    প্রিয় মুয়াল্লিমীন সাহেবান!
                    <br />
                    আপনারা পুরা জাতির কান্ডারী, তাই আপনাদেরকে বলব একটি জাতির
                    ভবিষ্যৎ নির্ভর করছে আপনাদের উপর। আপনারা শিক্ষকতাকে পেশা মনে
                    না করে আদর্শ হিসাবে গ্রহণ করে জাতিকে একটি সম্মান জনক স্থানে
                    নিয়ে যাওয়ার ক্ষেত্রে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করতে
                    হবে। সাথে সাথে এটাও বলব প্রতিটি ছাত্র-ছাত্রীর ইহকালীন ও
                    পরকালীন পথ প্রশস্ত করার ক্ষেত্র তৈরীর দায়িত্ব আপনাদের হাতেই।
                    ছাত্র-ছাত্রীদের পাঠ দানের নিত্য নতুন কৌশল উদ্ভাবন, তাদের মন
                    মানষিকতা বুঝে আন্তরিকতা দিয়ে তাদেরকে পড়া আদায়ের চেষ্টা করা।
                    মাদ্রাসায় আসার ক্ষেত্রে তারা উৎসাহ পায়, আনন্দ পায় সে রকম
                    একটা অবস্থা আপনাদেরকেই তৈরী করতে হবে। কথায় আছে, শাসন করা
                    তারই সাজে, সোহাগ করে যে। শিক্ষার পাশাপাশি ছাত্র-ছাত্রীদের
                    নৈতিকতা, আদর্শ, শৃঙ্খলা, নিয়মানুবর্তিতা শিক্ষা দেওয়া আপনাদের
                    অন্যতম কর্তব্য। আজকে সমাজ ব্যবস্থার কলুষতার যে সয়লাব চলছে
                    তার জন্য শিক্ষা ব্যবস্থাই একমাত্র দায়ী। সঠিক ও আদর্শ শিক্ষার
                    অভাবের কারনেই সমাজ ব্যবস্থায় এই ধস। আপনারা যখন মেহনত করার
                    জন্য শিক্ষার মাঠে নেমেছেন, মেহনততো করতেই হবে, কারন আপনারা
                    দুনিয়ার লোভ-লালসা, কাদার মত অন্যদিকে নিক্ষেপ করে সামান্য
                    পারিশ্রমিক নিয়ে রাত-দিন মেহনত করে যাচ্ছেন। আমরা আপনাদের জন্য
                    আন্তরিকভাবে দু’আ করি যাতে আল্লাহপাক আপনাদের সামান্য
                    পারিশ্রমিকের মধ্যে পাহাড়সম বরকত দান করে আপনাদের জরুরত পুরা
                    করার তাওফিক দান করেন।
                    <br />
                    আপনারাতো হাদীসের ভাষায়: العلماءور ثة الانبياء অর্থাৎ
                    “আলেমগণই পয়গাম্বরগণের উত্তরসূরী।” আপনারা নবী ও রাসূলদের
                    এতায়াতের মাধ্যমে যখন তা’লীমের কাজ আঞ্জাম দিয়ে যাবেন তখন
                    অবশ্যই সমস্ত জাহান আপনাদের পদচুম্বন করতে বাধ্য হবে ...
                    ইনশাআল্লাহ।
                    <br />
                    <br />
                    প্রিয় মুয়াল্লিমীন হযরাত!
                    <br />
                    আপনাদেরকে বর্তমান যুগের ছিদ্দিকে আকবর (রাযি.) ও ফারুকে আজম
                    (রাযি.) এর ভূমিকায় অবতীর্ণ হতে হবে। আপনারা ইমাম বোখারী
                    (রাহ.), তারেক বিন যিয়াদ (রাহ.), কাছেম নানুতুবী (রাহ.), থানবী
                    (রাহ.) এবং মুফ্তীয়ে আজম মুফ্তী ফয়জুল্লাহ (রাহ.) এর ভূমিকায়
                    অবতীর্ণ হয়ে দ্বীনের কাজ আঞ্জাম দিলে অন্ধকারাচ্ছন্ন জাতি আবার
                    আলোর দিশা পাবে। কারণ, আপনারাতো ইহকাল ও পরকালের সর্বোত্তম
                    ব্যক্তি। আপনাদের ব্যাপারে রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি
                    ওয়াছাল্লাম ইরশাদ করেন: “তোমাদের মধ্যে সর্বোত্তম ঐ ব্যক্তি
                    যে কুরআন মজীদ শিক্ষা করে এবং শিক্ষা দেয়।” আল্লাহপাক সকল
                    মুয়াল্লিমীন হযরতাদের মেহনতকে কবুল করুন ... আমীন।
                    <br />
                    <br />
                    সম্মানিত অভিভাবক বৃন্দ!
                    <br />
                    &nbsp;&nbsp; &nbsp;শিক্ষা অর্জন, শিক্ষা বিতরণ ব্যতিত সবকিছু
                    অন্ধকার। অন্ধকারআবৃত জাতিকে আলোর দিশা দানের লক্ষ্যে সকলের
                    ঐক্যবদ্ধ প্রচেষ্টা থাকতে হবে। অভিভাবকদের খেয়াল রাখতে হবে
                    জাতে ছাত্র-ছাত্রী নিয়মিত মাদ্রাসায় আসা-যাওয়া করে পাঠদানে
                    মনোযোগী হয় এবং শিক্ষক মহোদয়গণদের পরামর্শ অনুযায়ী
                    ছাত্র-ছাত্রীদের পরিচালিত করার চেষ্টা অত্যাবশ্যক।
                    <br />
                    <br />
                    আমাদের ভবিষ্যত পরিকল্পনা ঃ<br />
                    ০১। আমাদের পরিকল্পনাধীন রয়েছে যে, আগামীতে ৫ম শ্রেণী পর্যন্ত
                    বোর্ডের কার্যক্রম সম্প্রসারন করা।
                    <br />
                    ০২। সময়োপযোগী পাঠ্য-পুস্তক প্রণয়ন ও সংস্কার করে
                    ছাত্র-ছাত্রীদের যুগোপযোগী শিক্ষার ব্যবস্থা করন।
                    <br />
                    ০৩। মুয়াল্লিমীন সাহেবানদেরকে বার বার প্রশিক্ষণের মাধ্যমে
                    যোগ্যতার বিকাশ ঘটানো, যাতে উপযুক্ত পাঠদানে সক্ষম হন।
                    <br />
                    ০৪। এছাড়াও ভবিষ্যতে সমগ্র বাংলাদেশের যে সমস্ত এলাকায় এখনো
                    দ্বীনী শিক্ষার ব্যবস্থা হয় নাই সে সমস্ত এলাকায় মাদ্রাসা
                    প্রতিষ্ঠার মাধ্যমে দ্বীনী শিক্ষার প্রচার ও প্রসারের ক্ষেত্রে
                    প্রয়োজনীয় পদক্ষেপ গ্রহন করে তা বাস্তবায়ন করার জন্য আল্লাহর
                    দরবারে দু’আ ও আপনারদের আন্তরিক সহযোগিতা কামনা করে আজকের
                    সংক্ষিপ্ত বক্তব্য এখানে শেষ করলাম। আল্লাহপাক সকলের সহায় হোন
                    .... আমীন।
                    <br />
                  </p>
                  <p />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5 className="card-header custom_header">
                  <i className="fas fa-camera-retro" /> সাম্প্রতিক সভা/অনুষ্ঠান
                  <span className="float-right right_header">
                    <Link to="/event">
                      সকল অনুষ্ঠান <i className="fas fa-external-link-alt" />
                    </Link>
                  </span>
                </h5>
                <div className="card-body p-0">
                  <ul className="list-group event_list">
                    <Link
                      to="/event/purskar-bitrnee-sva-2020ing"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/purskar-bitrnee-sva-2020ing.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        কেন্দ্রীয় সনদ পরীক্ষার ফলাফল অনুষ্ঠান সভা- 2023 ইং
                        <small className="badge badge-pill badge-info text-white">
                          25th Dec 2023
                        </small>
                      </div>
                    </Link>
                    <Link
                      to="/event/serpur-kendreey-karzzalyer-doya-oo-iftar-mahfile-ekangs"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/serpur-kendreey-karzzalyer-doya-oo-iftar-mahfile-ekangs.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        শেরপুর কেন্দ্রীয় কার্যালয়ে দোয়া ও ইফতার মাহফিলের একাংশ
                        <small className="badge badge-pill badge-info text-white">
                          01st May 2022
                        </small>
                      </div>
                    </Link>
                    <Link
                      to="/event/kendreey-snd-preekshar-kendr-pridrsn-2020ing"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/kendreey-snd-preekshar-kendr-pridrsn-2020ing.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        কেন্দ্রীয় সনদ পরীক্ষার কেন্দ্র পরিদর্শণ- ২০২০ইং
                        <small className="badge badge-pill badge-info text-white">
                          01st Apr 2022
                        </small>
                      </div>
                    </Link>
                    <Link
                      to="/event/prsikshne-kuran"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/prsikshne-kuran.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        প্রশিক্ষণে কুরআন মাজীদের মাশক
                        <small className="badge badge-pill badge-info text-white">
                          28th Jul 2021
                        </small>
                      </div>
                    </Link>
                    <Link
                      to="/event/preekshar-fl-prkas"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/preekshar-fl-prkas.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        পরীক্ষার ফল প্রকাশ
                        <small className="badge badge-pill badge-info text-white">
                          16th Jan 2021
                        </small>
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
            action="/institute-register-online"
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

export default PurskarBO;
