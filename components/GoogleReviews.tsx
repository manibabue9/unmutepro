import {
  ArrowUpRight,
  ExternalLink,
  MessageSquareQuote,
  Star,
} from "lucide-react";
import { getGoogleReviews, type GoogleReview } from "@/lib/google-reviews";

function RatingStars({ rating, label }: { rating: number; label: string }) {
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={`h-5 w-5 ${
            index < filledStars
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-100 text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewerAvatar({ review }: { review: GoogleReview }) {
  if (review.authorPhotoUri) {
    return (
      // Google hosts the reviewer avatar returned by Places API.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={review.authorPhotoUri}
        alt=""
        className="h-12 w-12 rounded-full border border-slate-200 object-cover"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E4FFF3] text-sm font-extrabold text-[#007D4B]"
    >
      {review.authorName
        .split(/\s+/)
        .slice(0, 2)
        .map((name) => name[0])
        .join("")
        .toUpperCase()}
    </span>
  );
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();
  const hasReviews = data.configured && data.reviews.length > 0;

  return (
    <section id="reviews" className="bg-[#F4F8FC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-7 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00D97E]/30 bg-[#E8FFF5] px-4 py-2 text-sm font-bold text-[#007D4B]">
                <MessageSquareQuote className="h-4 w-4" aria-hidden="true" />
                Learner feedback
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#062B5C] sm:text-4xl lg:text-5xl">
                Real experiences. Real confidence.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                See what learners and families say about their experience with
                Unmute Pro on Google Maps.
              </p>
            </div>

            {typeof data.rating === "number" && (
              <a
                href={data.googleMapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                aria-label={`View ${data.displayName} reviews on Google Maps`}
              >
                <span className="text-4xl font-extrabold text-[#062B5C]">
                  {data.rating.toFixed(1)}
                </span>
                <span>
                  <RatingStars
                    rating={data.rating}
                    label={`${data.rating.toFixed(1)} out of 5 stars`}
                  />
                  <span className="mt-1 block text-sm text-slate-500">
                    {data.userRatingCount
                      ? `${data.userRatingCount} Google reviews`
                      : "Google reviews"}
                  </span>
                </span>
              </a>
            )}
        </div>

        {hasReviews ? (
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {data.reviews.slice(0, 3).map((review, index) => (
                <article key={`${review.authorName}-${index}`} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#00D97E] hover:shadow-lg sm:p-7">
                  <div className="flex items-center gap-3">
                    <ReviewerAvatar review={review} />
                    <div className="min-w-0">
                      {review.authorUri ? (
                        <a
                          href={review.authorUri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex max-w-full items-center gap-1 font-bold text-[#062B5C] hover:text-[#007D4B]"
                        >
                          <span className="truncate">{review.authorName}</span>
                          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      ) : (
                        <p className="truncate font-bold text-[#062B5C]">
                          {review.authorName}
                        </p>
                      )}
                      {review.relativePublishTimeDescription && (
                        <p className="mt-0.5 text-sm text-slate-500">
                          {review.relativePublishTimeDescription}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <RatingStars
                      rating={review.rating}
                      label={`${review.rating} out of 5 stars`}
                    />
                  </div>

                  <p className="mt-5 flex-1 leading-7 text-slate-700">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <a
                    href={review.googleMapsUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 border-t border-slate-100 pt-5 text-sm font-bold text-[#007D4B] hover:text-[#062B5C]"
                  >
                    View this review on Google Maps
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
            ))}
          </div>
        ) : (
            <div className="mt-10 overflow-hidden rounded-3xl bg-[#062B5C] px-6 py-8 text-white shadow-lg sm:px-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00D97E]">
                  Verified on Google Maps
                </p>
                <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Read the latest Unmute Pro learner reviews
                </h3>
                <p className="mt-3 leading-7 text-blue-100">
                  Open our Google Maps profile to explore public feedback before
                  choosing the right communication programme.
                </p>
              </div>
              <a
                href={data.googleMapsUri}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#00D97E] px-6 py-3.5 font-bold text-[#062B5C] transition hover:-translate-y-1 hover:bg-[#00C970] lg:mt-0"
              >
                See Google reviews
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
        )}

        <div className="mt-7 flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {hasReviews
              ? "Reviews shown above are selected by Google Maps and ordered by relevance. Google checks for and removes fake content when it is identified."
              : "Public review and rating information is provided by Google Maps."}
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <span
              translate="no"
              className="whitespace-nowrap font-normal text-[#5E5E5E]"
            >
              Google Maps
            </span>
            <a
              href={data.writeReviewUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#007D4B] hover:text-[#062B5C]"
            >
              Share your experience
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
