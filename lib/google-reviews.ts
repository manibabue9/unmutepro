const GOOGLE_REVIEW_LINK =
  "https://www.google.com/maps/place//data=!4m3!3m2!1s0x3bcb91aac74d8503:0xb6ae1d7bb701050b!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2";

const GOOGLE_PLACE_QUERY =
  "UnmutePro, Subhash Chandra Bose Nagar, Kukatpally, Hyderabad, Telangana 500055";

type GoogleLocalizedText = {
  text?: string;
  languageCode?: string;
};

type GoogleAuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type GooglePlaceReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: GoogleLocalizedText;
  originalText?: GoogleLocalizedText;
  authorAttribution?: GoogleAuthorAttribution;
  publishTime?: string;
  googleMapsUri?: string;
  flagContentUri?: string;
};

type GooglePlaceResponse = {
  id?: string;
  displayName?: GoogleLocalizedText;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GooglePlaceReview[];
};

type GoogleTextSearchResponse = {
  places?: Array<{ id?: string }>;
};

export type GoogleReview = {
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  relativePublishTimeDescription?: string;
  text: string;
  googleMapsUri: string;
};

export type GoogleReviewsData = {
  configured: boolean;
  displayName: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri: string;
  writeReviewUri: string;
  reviews: GoogleReview[];
};

const fallbackData: GoogleReviewsData = {
  configured: false,
  displayName: "UnmutePro",
  googleMapsUri: GOOGLE_REVIEW_LINK,
  writeReviewUri: GOOGLE_REVIEW_LINK,
  reviews: [],
};

async function findPlaceId(apiKey: string) {
  const response = await fetch(
    "https://places.googleapis.com/v1/places:searchText",
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "places.id",
      },
      body: JSON.stringify({
        textQuery: GOOGLE_PLACE_QUERY,
        languageCode: "en",
        regionCode: "IN",
      }),
      signal: AbortSignal.timeout(5000),
    }
  );

  if (!response.ok) {
    throw new Error(`Google place search failed with status ${response.status}`);
  }

  const data = (await response.json()) as GoogleTextSearchResponse;
  return data.places?.[0]?.id;
}

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();

  if (!apiKey) return fallbackData;

  try {
    const placeId =
      process.env.GOOGLE_PLACES_PLACE_ID?.trim() ||
      (await findPlaceId(apiKey));

    if (!placeId) return fallbackData;

    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`,
      {
        cache: "no-store",
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "id,displayName,rating,userRatingCount,googleMapsUri,reviews.rating,reviews.relativePublishTimeDescription,reviews.text,reviews.originalText,reviews.authorAttribution,reviews.publishTime,reviews.googleMapsUri,reviews.flagContentUri",
        },
        signal: AbortSignal.timeout(5000),
      }
    );

    if (!response.ok) {
      throw new Error(`Google place details failed with status ${response.status}`);
    }

    const place = (await response.json()) as GooglePlaceResponse;
    const googleMapsUri = place.googleMapsUri || GOOGLE_REVIEW_LINK;
    const reviews = (place.reviews ?? [])
      .filter((review) => Boolean(review.text?.text))
      .slice(0, 5)
      .map((review) => ({
        authorName: review.authorAttribution?.displayName || "Google Maps reviewer",
        authorUri: review.authorAttribution?.uri,
        authorPhotoUri: review.authorAttribution?.photoUri,
        rating: Math.max(0, Math.min(5, review.rating ?? 0)),
        relativePublishTimeDescription:
          review.relativePublishTimeDescription,
        text: review.text?.text ?? "",
        googleMapsUri: review.googleMapsUri || googleMapsUri,
      }));

    return {
      configured: true,
      displayName: place.displayName?.text || "UnmutePro",
      rating: place.rating,
      userRatingCount: place.userRatingCount,
      googleMapsUri,
      writeReviewUri: GOOGLE_REVIEW_LINK,
      reviews,
    };
  } catch (error) {
    console.error("Google reviews are temporarily unavailable", error);
    return fallbackData;
  }
}
