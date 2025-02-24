import { useState } from "react";

import Article from "./Article"
import Netflix from "./Netflix"
import postsData from "../posts.json"

export default function Main() {
  const [posts, setPosts] = useState(postsData);

  
  return (
    <main>
      <section className="hero">
        <div className="hero__bg__image__container">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="BG hero image"
            className="hero__bg__image"
          />
        </div>
        <div className="hero__bg__overlay"></div>

        <div className="hero__card">
          <h1 className="hero__title">
            Unlimited Movies TV,<br />
            Shows and More.
          </h1>
          <p className="hero__subtitle">Watch anywhere and cancel anytime.</p>
          <p className="hero__description">
            Ready to watch? Enter your email to create or restart your
            membership .
          </p>

          <div className="email__form__container">
            <div className="form__container">
              <input type="email" className="email__input" placeholder=" " />
              <label className="email__label">Email Address</label>
            </div>
            <button className="primary__button">
              Get Started <i className="fal fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="features__container">

        {posts.map((props, index) => (
          <Article {...props} key={index} />
        ))}
       
      </section>

      <section className="FAQ__list__container">
        <h1 className="FAQ__heading">Frequently Asked Questions</h1>
        <div className="FAQ__list">
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={Netflix}>
              What is Netflix?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more -
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want, without a
                single ad - all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </p>
            </div>
          </div>
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={Netflix}>
              How much does netflix cost?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
              </p>
            </div>
          </div>
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={Netflix}>
              Where can i watch?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
                Watch anywhere, anytime, on an unlimited number of devices. Sign
                in with your Netflix account to watch instantly on the web at
                netflix.com from your personal computer or on any
                internet-connected device that offers the Netflix app, including
                smart TVs, smartphones, tablets, streaming media players and
                game consoles.
              </p>
              <p>
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app. Use downloads to watch while you're
                on the go and without an internet connection. Take Netflix with
                you anywhere.
              </p>
            </div>
          </div>
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={Netflix}>
              How do I cancel?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </div>
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={Netflix}>
              What can I watch from Netflix?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </div>
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={Netflix}>
              Is Netflix good for kids?<i className="fal fa-plus"></i>
            </button>
            <div className="FAQ__visible">
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
              </p>
              <p>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don't want kids to see.
              </p>
            </div>
          </div>
        </div>
        <div className="FAQ__get__started__email">
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="email__form__container">
            <div className="form__container">
              <input type="email" className="email__input" placeholder=" " />
              <label className="email__label">Email Address</label>
            </div>
            <button className="primary__button">
              Get Started <i className="fal fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}