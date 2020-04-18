{
  /* <div class="example-1 card">
  <div class="wrapper">
    <div class="date">
      <span class="day">12</span>
      <span class="month">Aug</span>
      <span class="year">2016</span>
    </div>
    <div class="data">
      <div class="content">
        <span class="author">Jane Doe</span>
        <h1 class="title">
          <a href="#">Boxing icon has the will for a couple more fights</a>
        </h1>
        <p class="text">
          The highly anticipated world championship fight will take place at
          10am and is the second major boxing blockbuster in the nation after 43
          years.
        </p>
        <label for="show-menu" class="menu-button">
          <span></span>
        </label>
      </div>
      <input type="checkbox" id="show-menu" />
      <ul class="menu-content">
        <li>
          <a href="#" class="fa fa-bookmark-o"></a>
        </li>
        <li>
          <a href="#" class="fa fa-heart-o">
            <span>47</span>
          </a>
        </li>
        <li>
          <a href="#" class="fa fa-comment-o">
            <span>8</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>; */
}

import styled from "styled-components";
import react from "react";

export const cardRow = styled.div`
  * {
    box-sizing: border-box;
  }
  body {
    background-image: linear-gradient(to right, $regal-blue, $san-juan);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    font-family: $open-sans;
  }
  a {
    text-decoration: none;
  }

  h1 {
    font-family: $open-sans;
    font-weight: 300;
  }
  max-width: 900px;
  margin: 50px auto 0;
`;

export const cardContainer = styled.div`
  float: left;
  padding: 0 1.7rem;
  width: 50%;
`;

export const cardWrapper = styled.div`
  background-color: $white;
  min-height: 540px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 19px 38px rgba($black, 0.3), 0 15px 12px rgba($black, 0.2);
  /* background: url(https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg)
    center / cover no-repeat; */
`;

export const cardHeader = styled.div`
  @include cf;
  color: $white;
  padding: 1em;
  /* .date {
    float: left;
    font-size: 12px;
  } */
`;
export const cardDate = styled.div`
  float: left;
  font-size: 12px;
`;
export const carData = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(calc(70px + 1em));
  transition: transform 0.3s;
  color: $white;
  transform: translateY(calc(70px + 4em));
  .content {
  }
`;

export const cardContent = styled.div`
  padding: 1em;
  position: relative;
  z-index: 1;
`;

export const cardAuthor = styled.span`
  font-size: 12px;
`;

export const cardTitle = styled.h1`
  margin-top: 10px;
`;
