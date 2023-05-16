export const UserFeedbackComponent = () => {
  const userFeedbackComponent = document.querySelector(
    ".user-feedback-component"
  );
  const allRatesTiles = userFeedbackComponent.querySelectorAll(
    ".user-feedback-component__single-rate-tile"
  );
  const confirmButton = userFeedbackComponent.querySelector(
    ".user-feedback-component__confirm-button"
  );
  let currentRating;
  let isClickedProceedBtn = false;

  addListenersToAllRatesTiles();
  sendRate();

  //////////////////////////////////////////////////////////////////////////////////

  function addListenersToAllRatesTiles() {
    allRatesTiles.forEach((singleRateTile) => {
      singleRateTile.addEventListener("click", () => {
        if (isClickedProceedBtn) return;

        singleRateTile.toggleAttribute("data-selected");
        disselectOtherRatings(singleRateTile);

        if (singleRateTile.hasAttribute("data-selected")) {
          currentRating = singleRateTile.getAttribute("data-rate");
        } else {
          currentRating = null;
        }

        afterRatingChanged(singleRateTile);
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

  function afterRatingChanged(singleRateTile) {
    disselectOtherRatings(singleRateTile);
    setProperButtonState(currentRating);
  }

  function setProperButtonState() {
    if (currentRating) {
      confirmButton.removeAttribute("disabled");
    } else {
      confirmButton.setAttribute("disabled", true);
    }
  }

  function sendRate() {
    confirmButton.addEventListener("click", () => {
      isClickedProceedBtn = true;
      allRatesTiles.forEach((singleRateTile) => {
        singleRateTile.setAttribute("data-disabled", 1);
      });
      confirmButton.setAttribute("data-loading", 1);
      confirmButton.setAttribute("disabled", true);
    });
  }
};
