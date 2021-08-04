import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import "../css/Tracking.css";

function Tracking() {
  const [trackingData, setTrackingData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
      );
      const data = await response.json();
      setTrackingData(data.data);
    };
    getData();
  }, []);

  return (
    <div className="tracking">
      <table id="tracking_table">
        <thead>
          <tr>
            <th>Keywords</th>
            <th className="tracking_search"></th>
            <th>Goal</th>
            <th className="tracking_matches">Matches</th>
            <th>Search Status</th>
            <th>Delete keyword</th>
          </tr>
        </thead>
        <tbody>
          {trackingData.map((element) => (
            <tr key={element.id}>
              <td>{element.keyword}</td>
              <td className="tracking_search">
                <MdSearch className="tracking_searchIcon" />
              </td>
              <td>{element.goal}</td>
              <td className="tracking_matches">{element.matches}</td>
              <td>{element.search_status}</td>
              <td>
                <span className="tracking_deleteBtn" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tracking;
