export const UserFeedbackComponent = () => {
  const userFeedbackComponent = document.querySelector(
    ".user-feedback-component"
  );
  const allRatesTiles = userFeedbackComponent.querySelectorAll(
    ".user-feedback-component__single-rate-tile"
  );

  addListenersToAllRatesTiles();

  function addListenersToAllRatesTiles() {
    allRatesTiles.forEach((singleRateTile) => {
      singleRateTile.addEventListener("click", () => {
        singleRateTile.toggleAttribute("data-selected");

        disselectOtherRatings(singleRateTile);
      });
    });
  }

  function disselectOtherRatings(clickedTile) {
    allRatesTiles.forEach((singleRateTile) => {
      if (singleRateTile != clickedTile) {
        singleRateTile.removeAttribute("data-selected");
      }
    });
  }
};
