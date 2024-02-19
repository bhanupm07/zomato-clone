const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  type: String,
  info: {
    resId: Number,
    name: String,
    image: {
      url: String,
    },
    o2FeaturedImage: {
      url: String,
    },
    rating: {
      has_fake_reviews: Number,
      aggregate_rating: String,
      rating_text: String,
      rating_subtitle: String,
      rating_color: String,
      votes: String,
      subtext: String,
      is_new: Boolean,
    },
    ratingNew: {
      newlyOpenedObj: Object,
      suspiciousReviewObj: Object,
      ratings: {
        DINING: {
          rating_type: String,
          rating: String,
          reviewCount: String,
          reviewTextSmall: String,
          subtext: String,
          color: String,
          ratingV2: String,
          subtitle: String,
          sideSubTitle: String,
          bgColorV2: {
            type: String,
            tint: String,
          },
          newOnDining: Boolean,
        },
        DELIVERY: {
          rating_type: String,
          rating: String,
          reviewCount: String,
          reviewTextSmall: String,
          subtext: String,
          color: String,
          ratingV2: String,
          subtitle: String,
          sideSubTitle: String,
          bgColorV2: {
            type: String,
            tint: String,
          },
          newOnDelivery: Boolean,
        },
      },
    },
    cft: {
      text: String,
    },
    cfo: {
      text: String,
    },
    locality: {
      name: String,
      address: String,
      localityUrl: String,
    },
    timing: {
      text: String,
      color: String,
    },
    cuisine: [
      {
        deeplink: String,
        url: String,
        name: String,
      },
    ],
    should_ban_ugc: Boolean,
    costText: {
      text: String,
    },
  },
  order: {
    deliveryTime: String,
    isServiceable: Boolean,
    hasOnlineOrdering: Boolean,
    actionInfo: {
      text: String,
      clickUrl: String,
    },
  },
  gold: Array,
  takeaway: Array,
  cardAction: {
    text: String,
    clickUrl: String,
    clickActionDeeplink: String,
  },
  distance: String,
  isPromoted: Boolean,
  promotedText: String,
  trackingData: [
    {
      table_name: String,
      payload: String,
      event_names: {
        tap: String,
        impression: String,
      },
    },
  ],
  allCTA: Array,
  promoOffer: String,
  checkBulkOffers: Boolean,
  bulkOffers: [
    {
      text: String,
      color: {
        tint: String,
        type: String,
      },
    },
  ],
  isDisabled: Boolean,
  bottomContainers: [
    {
      image: {
        url: String,
        aspect_ratio: Number,
      },
      text: String,
    },
  ],
});

const Delivery = mongoose.model("delivery", deliverySchema);

module.exports = Delivery;
