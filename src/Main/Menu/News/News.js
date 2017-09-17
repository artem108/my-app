import React, { Component } from 'react'
import './News.css'

class News extends Component {

  render() {

    return (
      <div className="wrapper">
        <header className="header-title">
          <h1>a minute of self-expression with me</h1>
          <article className="aboute-news">
                <p>I think,  it would be nice for everyone, to learn something new for themselves,
                   or to repeat already familiar material about the world in which we live.
                   I deal with such terrible things in my free time and if you are a space lover like me,
                  I would like to share this with you.</p>
          </article>
        </header>
        <section className="main-news">
            <section className="main-news-box">
                <header className="header-news-title">
                  <p>Cassini the grand finale</p>
                </header>
                <section className="news-image">
                </section>
                <section className="short-description">
                  <p>The Cassini–Huygens mission was a collaboration between NASA,
                     and the Italian Space Agency (ASI) to send a probe to study the planet Saturn completed his mission and
                     burned in the atmosphere of Saturn.</p>
                </section>
                <div  className="read-more">
                  <a href="#">Read more...</a>
                </div>
              </section>
            <section className="main-news-box">
                <header className="header-news-title">
                  <p>Little about Spacetime</p>
                </header>
                <section className="news-image news-image-2">
                </section>
                <section className="short-description">
                  <p>In physics, spacetime is any mathematical model that fuses the three dimensions of space and the one
                    dimension of time into a single 4‑dimensional continuum. Today, let's talk about this. </p>
                </section>
                <div  className="read-more">
                  <a href="#">Read more...</a>
                </div>
            </section>
            <section className="main-news-box">
                <header className="header-news-title">
                  <p>New flashes on the Sun. WHY?</p>
                </header>
                <section className="news-image news-image-3">
                </section>
                <section className="short-description">
                  <p> It lasts for several minutes, releasing billions of megatons of energy in the TNT equivalent.
                    Let's find out why this is happening and why humanity will not die from this yet.</p>
                </section>
                <div  className="read-more">
                  <a href="#">Read more...</a>
                </div>
            </section>
          </section>
          <section className="main-news">
              <section className="main-news-box">
                  <header className="header-news-title">
                    <p>Cassini the grand finale</p>
                  </header>
                  <section className="news-image">
                  </section>
                  <section className="short-description">
                    <p>The Cassini–Huygens mission was a collaboration between NASA,
                       and the Italian Space Agency (ASI) to send a probe to study the planet Saturn completed his mission and
                       burned in the atmosphere of Saturn.</p>
                  </section>
                  <div  className="read-more">
                    <a href="#">Read more...</a>
                  </div>
                </section>
              <section className="main-news-box">
                  <header className="header-news-title">
                    <p>Little about Spacetime</p>
                  </header>
                  <section className="news-image news-image-2">
                  </section>
                  <section className="short-description">
                    <p>In physics, spacetime is any mathematical model that fuses the three dimensions of space and the one
                      dimension of time into a single 4‑dimensional continuum. Today, let's talk about this. </p>
                  </section>
                  <div  className="read-more">
                    <a href="#">Read more...</a>
                  </div>
              </section>
              <section className="main-news-box">
                  <header className="header-news-title">
                    <p>New flashes on the Sun. WHY?</p>
                  </header>
                  <section className="news-image news-image-3">
                  </section>
                  <section className="short-description">
                    <p> It lasts for several minutes, releasing billions of megatons of energy in the TNT equivalent.
                      Let's find out why this is happening and why humanity will not die from this yet.</p>
                  </section>
                  <div  className="read-more">
                    <a href="#">Read more...</a>
                  </div>
              </section>
            </section>
          </div>


    );
  }
}

export default News
