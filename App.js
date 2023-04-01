import React from "react";
import  ReactDOM  from "react-dom/client";
import logo from './public/image/logo.png'

/**
 * Header
 * - Logo
 * - Nav Items 
 * Body
 * - Search
 * - RestaurantContainer
 *   -  RestaurentCard
 *      - Image
 *      - Name of restaurant, Star Rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const restData = [
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "450663",
        "name": "Chaayos Chai+Snacks=Relax",
        "uuid": "e1c528dc-68d4-4f41-bac4-7704f8a09a52",
        "city": "1",
        "area": "Mahadevpura",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "0a6f66d75eb042123e34d89bef7189ce",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "chaayos-meri-wali-chai-bagmane-constellation-business-tech-park-blr-mahadevpura",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Unit No 01,GF & FF,South Tower, Block name Virgo at Bagmane Constellation Business Park, Doddanekundi Village, Municipal Ward No. 85, Bangalore",
        "locality": "Bagmane Constellation Business Park",
        "parentId": 281782,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "450663",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "22 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "680458",
        "name": "Bidadi Thatte Idli",
        "uuid": "d4b4653b-530d-4425-8ca0-5ff83ba88b7c",
        "city": "1",
        "area": "CV Raman Nagar",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "d5dec2566e278974bc2d40f4e3136164",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 2.9000000953674316,
        "slugs": {
          "restaurant": "bidadi-thatte-idli-cv-raman-nagar-cv-raman-nagar-2",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No.40, pragathi cultural and sports club, 40ft Main Road, K.G.F, 6th Cross Rd, Anjappa Layout, B Narayanapura, Mahadevapura, Bengaluru, Karnataka 560048, India",
        "locality": "Anjappa Layout",
        "parentId": 295155,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.9 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "680458",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 2.9000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 20,
        "new": true
      },
      "subtype": "basic",
      "scrubber": {
        "value": "22 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "27494",
        "name": "California Burrito",
        "uuid": "9b725d72-8809-4087-81f1-2ceb8f6ced06",
        "city": "1",
        "area": "Mahadevpura",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "u9wnckhszzzulzjwy0kh",
        "cuisines": [
          "Mexican",
          "American",
          "Salads",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "california-burrito-marathahalli-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Virgo Building, Bagmane Constellation Business Park",
        "locality": "Bagmane Constellation Business Park",
        "parentId": 1252,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "20% off",
          "shortDescriptionList": [
            {
              "meta": "20% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "20% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "20% off up to ₹50 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6353419~p=4~eid=00000187-3c0a-e9b6-0f74-0f9600110448",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "27494",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "136193",
        "name": "Kabab Souq",
        "uuid": "1be8762f-6839-4640-a823-8fef41239aca",
        "city": "1",
        "area": "Kaggadasapura",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "intyfalqayh6ueqssb9c",
        "cuisines": [
          "Chinese",
          "Arabian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "kabab-souq-test-prod-area",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No. 5, JM Complex, Kempanna Main Rd, 1st Block, Vignan Nagar, LBS Nagar, Kaggadasapura, Bengaluru, Karnataka 560037",
        "locality": "Vignan Nagar",
        "parentId": 21331,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "15% off",
          "shortDescriptionList": [
            {
              "meta": "15% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "15% off up to ₹45 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "15% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "15% off up to ₹45 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "136193",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "346487",
        "name": "Bhavani Sri Upahar",
        "uuid": "c7b59e7c-a6ec-4821-9279-ef30120ac669",
        "city": "1",
        "area": "Kaggadasapura",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "mqe4n8lw1lngw4isukuy",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Juices",
          "Chinese",
          "Biryani",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "bhavani-sri-upahara-cv-raman-nagar-cv-raman-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "No.83/32/1, MR Complex, 5th main road, Malleshpalya, kaggadasapura, Bengaluru, 560075",
        "locality": "Malleshpalya",
        "parentId": 44663,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "346487",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "289267",
        "name": "BOX8 - Desi Meals",
        "uuid": "2041162c-d650-46ab-a05b-e47a6da33c8c",
        "city": "1",
        "area": "Mahadevpura",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "rsxu075z6o0ynbltktpj",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Thalis",
          "Home Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "box8-desi-meals-mahadevpura-mahadevpura",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "18/2, AGNR Complex, 1st floor, Timaya Layout, Outer Ring Rd, Mahadevapura, Bengaluru",
        "locality": "Timaya Layout",
        "parentId": 10655,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "289267",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "390058",
        "name": "NH1 Bowls - Highway To North",
        "uuid": "7e901292-12c4-437b-858c-f5cf17ed57dd",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "xliwrcwpu0oicl3iylzk",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Home Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "nh1-bowls-highway-to-north-mahadevpura-mahadevpura",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "18/2, AGNR Complex, 1st floor, Timaya Layout, Outer Ring Rd, Mahadevapura, Bengaluru",
        "locality": "Timaya Layout",
        "parentId": 22452,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "390058",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "60269",
        "name": "Foodism.in",
        "uuid": "646665ef-ab52-4387-8311-a0a8ebf288de",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "myewxhc3ijwzpwoaxylr",
        "cuisines": [
          "Home Food",
          "North Indian",
          "Biryani",
          "Thalis",
          "Beverages",
          "Chinese",
          "Healthy Food",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.6000000238418579,
        "slugs": {
          "restaurant": "foodism-marathahalli-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "1st Floor, Opposit Auto Stand Near Rama Temple, Doddanekundi Main Rd, Pragathi Layout, Bengaluru - 560037",
        "locality": "Pragathi Layout",
        "parentId": 10875,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "60269",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.6000000238418579,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "574948",
        "name": "Veg Daawat by Behrouz",
        "uuid": "7400d506-7d9c-4470-b7ad-b70d80a9094f",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "bax5fpgkkhkdrqkrzhhj",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "North Indian",
          "Persian",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "veg-daawat-by-behrouz-doddanekundi-main-road-pragathi-layout-cv-raman-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "SNS PG, 652,1st floor,  Doddanekundi Main Road, Pragathi Layout,  opposite to spice pavilion restaurant, near V R R heritage apartment and BMA college, Kartik Nagar, Doddanekundi, Mahadevapura, Bengal",
        "locality": "Doddanekundi Main Road",
        "parentId": 344904,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT125 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "574948",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "156439",
        "name": "The Good Bowl",
        "uuid": "37744383-5293-419c-97b5-e3d330ea4940",
        "city": "1",
        "area": "Mahadevapura",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "iijl7gllq2oczt2fkofw",
        "cuisines": [
          "North Indian",
          "Punjabi",
          "Biryani",
          "Chinese",
          "Beverages",
          "Desserts",
          "Jain",
          "Indian",
          "Hyderabadi",
          "Mughlai"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "the-good-bowl-doddanekkundi-main-road-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "SNS PG, 652,1st floor,  Doddanekundi Main Road, Pragathi Layout,  opposite to spice pavilion restaurant, near V R R heritage apartment and BMA college, Kartik Nagar, Doddanekundi, Mahadevapura, Bengal",
        "locality": "Doddanekundi Main Road, Pragathi Layout",
        "parentId": 7918,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT125 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "156439",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "393582",
        "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
        "uuid": "d841808b-ac8d-40a0-b67e-a03dccf5e0b2",
        "city": "1",
        "area": "Mahadevapura",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "jfa3zn35omkc6uykbjfa",
        "cuisines": [
          "Ice Cream Cakes",
          "Desserts",
          "Ice Cream",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 2,
        "slugs": {
          "restaurant": "gourmet-ice-cream-cakes-by-baskin-robbins-next-to-dominos-pizza-cv-raman-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Baskin Robbins, Sherwood Residents Association, Survey No. 162/4 Next To Dominos Pizza, Basavanagar Main Road, Bangalore-560037",
        "locality": "Basavanagar Main Road",
        "parentId": 21932,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "30% off",
          "shortDescriptionList": [
            {
              "meta": "30% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹75 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "30% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "30% off up to ₹75 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "393582",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 2,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.7",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "391006",
        "name": "ZAZA Mughal Biryani",
        "uuid": "b3aa53bd-ffbb-4fc8-8d46-9d289d960ce9",
        "city": "1",
        "area": "Kaggadasapura",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "dsrlafeupac2x6vf4gat",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Awadhi"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "zaza-21-spice-biryani-mahadevpura-mahadevpura",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "18/2, AGNR Complex, 1st floor, Timaya Layout, Outer Ring Rd, Mahadevapura, Bengaluru",
        "locality": "Timaya Layout",
        "parentId": 22473,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "391006",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "681190",
        "name": "GLOBO Ice Creams Of The World",
        "uuid": "7b121a10-e800-4cf3-9397-fba1d2603ede",
        "city": "1",
        "area": "Mahadevpura",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "6a6aa5b55c2494fe25380dcd71dd54b9",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "globo-ice-creams-of-the-world-new-timaya-layout-mahadevpura",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "18/2, AGNR Complex, 1st floor, Timaya Layout, Outer Ring Rd, Mahadevapura, Bengaluru",
        "locality": "Timaya Layout",
        "parentId": 22303,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "681190",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": true
      },
      "subtype": "basic",
      "scrubber": {
        "value": "23 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "28027",
        "name": "Subway",
        "uuid": "48ff8229-a70d-4fec-a7cf-0e41d83eb540",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "0bf19a82b109b40c2f5c56d00f071a33",
        "cuisines": [
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 1.7999999523162842,
        "slugs": {
          "restaurant": "subway-cv-raman-nagar-cv-raman-nagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Onyx Food Court, Bagmane World Technology Center, ORR, Mahadevpura, Bangalore - 560037",
        "locality": "Garudacharpalya",
        "parentId": 2,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6388982~p=16~eid=00000187-3c0a-e9b6-0f74-0f9a00111066",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "28027",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 1.7999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "24 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "130342",
        "name": "Sri Udupi Park",
        "uuid": "444b169f-392a-47e5-8c74-6e7f5762185a",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "g7i1q1tqfsmmsb0dhbyy",
        "cuisines": [
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "sri-udupi-park-whitefield-whitefield-2",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Doddanekkundi karthik nagar Opp. Rainbow hospital next to HP petrol bunk, bangalore",
        "locality": "Doddanekundi",
        "parentId": 4284,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "15% off",
          "shortDescriptionList": [
            {
              "meta": "15% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "15% off up to ₹45 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "15% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "15% off up to ₹45 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "130342",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "24 MINS"
      }
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "18460",
        "name": "Biryani Paradise",
        "uuid": "8b53aa43-cf56-4dd0-9f93-05a74b8307ac",
        "city": "1",
        "area": "Hoodi Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "wfpryflxmhukg0tasg6f",
        "cuisines": [
          "North Indian",
          "Andhra"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 3.700000047683716,
        "slugs": {
          "restaurant": "biryani-paradise-marathahalli-marathahalli",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#31/8, new #552, Doddanakundhi, 2nd phase, Industrial area, Hoodi road",
        "locality": "2nd Phase",
        "parentId": 137,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "18460",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 3.700000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic",
      "scrubber": {
        "value": "24 MINS"
      }
    },
    "parentWidget": false
  }
]

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const  {restData} = props
  const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId} = restData?.data?.data
  return (
    <div className="rest-card">
      <img className="rest-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + cloudinaryImageId} alt="rest-logo"/>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>₹{costForTwo/100} For Two</h5>
        <h5>{deliveryTime} Mins</h5>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {/* RestaurantCard */}
        {
          restData.map(restaurant => (<RestaurantCard restData={restaurant} key={restaurant.data.data.id}/>)
          )
        }
        
        
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <ul>
          <li>&copy;</li>
          <li>Links</li>
          <li>Address</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)