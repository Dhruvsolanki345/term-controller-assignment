import "../css/Keywords.css";
import Navbar from "./Navbar";
import { MdSearch } from "react-icons/md";
import Tracking from "./Tracking";

function Keywords() {
  return (
    <div className="keywords">
      <Navbar />
      <div className="keywords_body">
        <div className="keywords_section">
          <div className="keywords_sectionHeader">
            <div className="keywords_headerLeft">
              <h3 className="keywords_headerTitle">Add Another Keyword</h3>
              <p className="keywords_addCount">1/3</p>
              <p className="keywords_upgrade">Upgrade</p>
            </div>
            <p className="keywords_headerRight">Advance Search</p>
          </div>
          <div className="keywords_sectionBody">
            <div className="keywords_filter">
              <MdSearch className="keywords_filterIcon" />
              <input
                placeholder="Enter your filters here"
                type="text"
                className="keywords_filterInput"
              />
            </div>
            <button className="keywords_filterBtn">Save Filters</button>
          </div>
        </div>
        <div className="keywords_section">
          <div className="keywords_sectionHeader">
            <h3 className="keywords_headerLeft keywords_headerTitle">
              The terms you are tracking
            </h3>
            <p className="keywords_headerRight">
              The data will refresh every 5 min
            </p>
          </div>
          <div className="keywords_sectionBody keywords_tableBody">
            <Tracking />
          </div>
        </div>
        <div className="keywords_result">
          <button className="keywords_resultsBtn">View Results</button>
        </div>
      </div>
    </div>
  );
}

export default Keywords;
