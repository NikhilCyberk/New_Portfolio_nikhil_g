import React from "react";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="loader">
      <div class="bg-1"></div>
      <section class="loading-data">
        <h2 class="loading-text text-center text-uppercase">
          <span class="char">L</span>
          <span class="char">o</span>
          <span class="char">a</span>
          <span class="char">d</span>
          <span class="char">i</span>
          <span class="char">n</span>
          <span class="char">g</span>
        </h2>
      </section>
    </div>
  );
}

export default Preloader;
