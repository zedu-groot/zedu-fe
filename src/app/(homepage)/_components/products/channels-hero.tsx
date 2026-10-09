import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Megaphone, Play, Sparkles, Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import { appStoreUrl, playStoreUrl } from "~/lib/env-urls";
import { cn } from "~/lib/utils";

const AVATARS = {
  adeyemi: "/images/homepage/products/channels/avatar-adeyemi.jpg",
  chiamaka: "/images/homepage/products/channels/avatar-chiamaka.jpg",
};

const channels = [
  { name: "cs-101", active: true },
  { name: "announcements", unread: 2 },
  { name: "cohort-7" },
  { name: "design-lab" },
  { name: "study-group" },
];

const ratings = [
  { score: "4.9", store: "the App Store", href: appStoreUrl() },
  { score: "4.7", store: "Google Play", href: playStoreUrl() },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFF]";

const Stars = () => (
  <span className="flex gap-0.5 text-[#E8A317]" aria-hidden="true">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
    ))}
  </span>
);

const ratingClass =
  "flex items-center gap-2.5 rounded-md text-[15px] text-[#5A6170]";

const Rating = ({ score, store }: { score: string; store: string }) => (
  <>
    <Stars />
    <span>
      <strong className="font-bold text-[#1F2530]">{score}</strong> on {store}
    </span>
  </>
);

const Message = ({
  avatar,
  name,
  meta,
  text,
  small,
  children,
}: {
  avatar: string;
  name: string;
  meta: string;
  text: string;
  small?: boolean;
  children?: ReactNode;
}) => (
  <div className={cn("flex", small ? "gap-2.5" : "gap-3")}>
    <Image
      src={avatar}
      alt={name}
      width={small ? 36 : 44}
      height={small ? 36 : 44}
      className={cn(
        "shrink-0 object-cover",
        small ? "h-9 w-9 rounded-[10px]" : "h-11 w-11 rounded-xl"
      )}
    />
    <div className="flex flex-col gap-1 text-sm">
      <p>
        <strong className="font-bold">{name}</strong>{" "}
        <span className="text-xs text-[#5A6170]">{meta}</span>
      </p>
      <p className="leading-normal text-[#344054]">{text}</p>
      {children}
    </div>
  </div>
);

const ChannelsHero = () => {
  return (
    <section className="overflow-hidden bg-[#FAFAFF] text-[#1F2530]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-14 px-6 py-20">
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-7">
          <p className="flex items-center gap-2 self-start rounded-full border border-[#E2E8F0] bg-white px-3.5 py-2 text-sm font-bold text-primary-500">
            <span
              className="h-2 w-2 rounded-full bg-[#1F9D6B]"
              aria-hidden="true"
            />
            Built for schools, universities &amp; bootcamps
          </p>

          <h1 className="text-[length:clamp(2.5rem,5vw,4.1rem)] font-black leading-[1.04] tracking-[-0.035em]">
            Every class conversation,{" "}
            <span className="text-primary-500">right where it belongs.</span>
          </h1>

          <p className="max-w-[520px] text-[19px] leading-[1.6] text-[#5A6170]">
            Organise discussions by course, cohort or topic. Threaded replies
            keep talk focused, and announcements land in the right channel, so
            no student misses what matters.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <Button
              asChild
              className={cn(
                "group h-auto gap-2.5 rounded-full bg-primary-500 px-7 py-[17px] text-base font-bold text-white shadow-[0_10px_24px_rgba(113,65,248,0.28)] hover:bg-blue-100",
                focusRing
              )}
            >
              <Link href="/auth/sign-up">
                Start using channels
                <ArrowRight
                  className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </Link>
            </Button>
            <Button
              type="button"
              variant="outline"
              className={cn(
                "h-auto min-w-[233px] gap-2.5 rounded-full border-[#D6D6F5] bg-white px-6 py-[17px] text-base font-bold text-[#1F2530] hover:bg-[#EEF0FF] hover:text-[#1F2530]",
                focusRing
              )}
            >
              <span
                className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#EEF0FF] text-primary-500"
                aria-hidden="true"
              >
                <Play className="h-3 w-3" fill="currentColor" />
              </span>
              Watch a demo
            </Button>
          </div>

          <ul className="flex flex-wrap items-center gap-5 border-t border-[#E2E8F0] pt-2">
            {ratings.map(({ score, store, href }, i) => (
              <li key={store} className="flex items-center gap-5 pt-[18px]">
                {i > 0 && (
                  <span
                    className="hidden h-[22px] w-px bg-[#D6D6F5] sm:block"
                    aria-hidden="true"
                  />
                )}
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      ratingClass,
                      "hover:text-blue-100",
                      focusRing
                    )}
                  >
                    <Rating score={score} store={store} />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <span className={ratingClass}>
                    <Rating score={score} store={store} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative min-w-0 flex-[1_1_520px] px-2 pb-10 pt-7">
          <figcaption className="sr-only">
            Example of a Zedu channel: an instructor posts a lab deadline, a
            student asks a question, and the answer stays in its thread.
          </figcaption>
          <div
            className="absolute inset-y-0 left-10 right-0 rounded-[32px] bg-[#EAEAFE]"
            aria-hidden="true"
          />

          <div className="relative flex min-h-[400px] overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white shadow-[0_30px_60px_rgba(31,37,48,0.14)]">
            <div className="hidden w-[190px] shrink-0 flex-col gap-1.5 bg-blue-500 px-3 py-[18px] text-sm text-[#D9D9F5] sm:flex">
              <p className="px-2 pb-3 text-[15px] font-bold text-white">
                Lagos Tech Academy
              </p>
              <p className="px-2 py-1 text-[11px] font-bold tracking-[0.08em] text-[#A9A9E0]">
                CHANNELS
              </p>
              <ul className="flex flex-col gap-1.5">
                {channels.map(({ name, active, unread }) => (
                  <li
                    key={name}
                    className={cn(
                      "flex justify-between rounded-lg px-2.5 py-2",
                      active && "bg-primary-500 font-bold text-white"
                    )}
                  >
                    <span># {name}</span>
                    {unread && (
                      <span className="rounded-full bg-[#D43F2A] px-[7px] py-px text-[11px] font-bold text-white">
                        {unread}
                        <span className="sr-only"> unread</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-4 px-5 py-[18px]">
              <div className="flex items-center justify-between gap-3 border-b border-[#EEF0FF] pb-3">
                <p className="text-base font-bold">
                  # cs-101{" "}
                  <span className="text-[13px] font-normal text-[#5A6170]">
                    · Intro to Programming
                  </span>
                </p>
                <p className="shrink-0 text-[13px] text-[#5A6170]">
                  128 members
                </p>
              </div>

              <Message
                avatar={AVATARS.adeyemi}
                name="Mr. Adeyemi"
                meta="Instructor · 9:02"
                text="Week 4 lab is live. Submit your loops exercise by Friday 5pm."
              >
                <p className="text-[13px] font-bold text-primary-500">
                  14 replies in thread
                </p>
              </Message>
              <Message
                avatar={AVATARS.chiamaka}
                name="Chiamaka"
                meta="Student · 9:15"
                text="Can we use while loops for question 3, or only for loops?"
              />
              <div className="ml-12 border-l-2 border-[#E2E8F0] pl-3.5">
                <Message
                  small
                  avatar={AVATARS.adeyemi}
                  name="Mr. Adeyemi"
                  meta="Instructor · 9:18 · replied in thread"
                  text="Great question, Chiamaka. Both are allowed for Q3. Just explain in a comment why you chose it."
                />
              </div>

              <p className="mt-auto rounded-xl border border-[#E2E8F0] px-3.5 py-3 text-sm text-[#667085]">
                Message #cs-101
              </p>
            </div>
          </div>

          <div className="absolute right-2 top-0 flex w-[220px] items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3.5 shadow-[0_18px_40px_rgba(31,37,48,0.16)] motion-safe:animate-[bounce-gentle_5s_ease-in-out_infinite] sm:-right-1 sm:w-[250px]">
            <span
              className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#EAEAFE] text-primary-500"
              aria-hidden="true"
            >
              <Megaphone className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-bold">Announcement pinned</p>
              <p className="text-xs text-[#5A6170]">Seen by all 128 students</p>
            </div>
          </div>

          <div className="relative mt-4 flex flex-col gap-2 rounded-2xl bg-[#1F2530] px-[18px] py-4 text-white shadow-[0_18px_40px_rgba(31,37,48,0.25)] motion-safe:animate-[bounce-gentle_6s_ease-in-out_1s_infinite] sm:absolute sm:-left-2 sm:bottom-0 sm:mt-0 sm:w-[280px]">
            <p className="flex items-center gap-2 text-[13px] font-bold text-blue-50">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              AI thread summary
            </p>
            <p className="text-sm leading-normal text-[#EEF0FF]">
              Students asked about loop types. Instructor confirmed both are
              allowed for Q3.
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default ChannelsHero;
