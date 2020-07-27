import React, { createContext, useReducer } from "react";

export const CampaignContext = createContext();

const initialState = {
  campaigns: [
    {
      id: 1,
      name: "Fourth of July Promo",
      text:
        "Hi {first_name}, it's {shop_name}! This 4th of July celebrate with our Freedom Sale!",
      status: "Sent",
      segment_id: 1,
      media: "https://images.unsplash.com/photo-1556804335-2fa563e93aae",
      stats: {
        sent: 6506,
        clicked: 6137,
      },
    },
    {
      id: 2,
      name: "Labor Day Sale",
      text:
        "Hey {first_name}, it's {shop_name}! We have a HUGE sale on Labor Day, get up to 30% off with LABOR30. {shop_link}",
      status: "Sent",
      segment_id: 1,
      media: null,
      stats: {
        sent: 7228,
        clicked: 6883,
      },
    },
    {
      id: 3,
      name: "Cotton Candy Palette Announcement",
      text:
        "Hi {first_name}! Here at {shop_name} we just got our NEW Cotton Candy Palette! {shop_link}",
      status: "Sent",
      segment_id: 2,
      media: "https://images.unsplash.com/photo-1544220828-1becb7f7b284",
      stats: {
        sent: 7246,
        clicked: 7080,
      },
    },
    {
      id: 4,
      name: "Fall Decor Updates",
      text:
        "Hey {first_name}! Back at {shop_name} we've gotten a WILD amount of home updates you NEED this Fall. 👀 {shop_link}",
      status: "Preview",
      segment_id: 3,
      media: "https://images.unsplash.com/photo-1568485248685-019a98426c14",
      stats: null,
    },
    {
      id: 5,
      name: "Great Halloween Sale",
      text:
        "It's the Great Halloween Sale, {first_name}! Things are getting pretty spooky here at {shop_name}. Take up to 20% off with SCARE20",
      status: "Preview",
      segment_id: 1,
      media: "https://images.unsplash.com/photo-1537800534001-f3e01aa1c34c",
      stats: null,
    },
  ],
  // segments: [
  //   { id: 1, name: "All Subscribers", subscribers_count: 8920 },
  //   { id: 2, name: "Beauty Purchases", subscribers_count: 7108 },
  //   { id: 3, name: "Decor Purchases", subscribers_count: 1204 }
  // ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CAMPAIGN":
      return {
        campaigns: [...state.campaigns, action.payload],
      };

    // case "EDIT_CAMPAIGN":
    //   return {
    //     campaigns: [...state.campaigns, action.payload],
    //   }
    case "DELETE_CAMPAIGN":
      return {
        campaigns: state.campaigns.filter(
          (campaign) => campaign.id !== action.payload
        ),
      };
    case "START":
      return {
        loading: true,
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const CampaignContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CampaignContext.Provider value={[state, dispatch]}>
      {props.children}
    </CampaignContext.Provider>
  );
};
