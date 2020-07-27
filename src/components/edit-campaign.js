import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../contexts/global-state";

export const EditCampaign = (route) => {
  let history = useHistory();
  const { campaigns, editCampaign } = useContext(GlobalContext);
  const [selectedCampaign, setSeletedCampaign] = useState({
    id: null,
    name: "",
    designation: "",
    location: "",
  });
  const currentCampaignId = route.match.params.id;

  useEffect(() => {
    const campaignId = currentCampaignId;
    const selectedCampaign = campaigns.find(
      (camp) => camp.id === parseInt(campaignId)
    );
    setSeletedCampaign(selectedCampaign);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    editCampaign(selectedCampaign);
    history.push("/");
  };

  const handleOnChange = (campaignKey, value) =>
    setSeletedCampaign({ ...selectedCampaign, [campaignKey]: value });

  // if (!selectedCampaign || !selectedCampaign.id) {
  //   alert("Id dont match !");
  // }

  return (
    <Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of campaign
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedCampaign.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedCampaign.location}
              onChange={(e) => handleOnChange("location", e.target.value)}
              type="text"
              placeholder="Enter location"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedCampaign.designation}
              onChange={(e) => handleOnChange("designation", e.target.value)}
              type="text"
              placeholder="Enter designation"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit Campaign
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
