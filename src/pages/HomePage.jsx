import React from "react";
import "../index.css";
import Header from "../components/Header";
import FeatureMovie from "../components/FeaturMovie";
import MediaList from "../components/MediaList";
import { TRENDING_TABS, TOP_RATED } from "../libs/constants";

function HomePage() {
  return (
    <div>
   <FeatureMovie/>
    <MediaList title="Trending" tabs={TRENDING_TABS}/>
    <MediaList title="Top Rated" tabs={TOP_RATED}/>

    </div>
  );
}

export default HomePage;
