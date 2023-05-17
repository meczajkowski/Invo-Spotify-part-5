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
  const opinionContainer = userFeedbackComponent.querySelector(
    ".user-feedback-component__opinion-container"
  );
  const opinionInput = userFeedbackComponent.querySelector(
    ".user-feedback-component__opinion-input"
  );
  let currentRating;
  let isClickedProceedBtn = false;

  addListenersToAllRatesTiles();
  sendRate();

  console.log(null < 3);
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
    setOpinionContainerState(currentRating);
  }

  function setProperButtonState() {
    if (!currentRating) {
      confirmButton.setAttribute("disabled", true);
      return;
    }

    if (currentRating > 2 && currentRating <= 6) {
      confirmButton.removeAttribute("disabled");
      return;
    }

    if (currentRating < 3 && currentRating >= 1) {
      const opinionChangeHandler = () => {
        opinionInput.value
          ? confirmButton.removeAttribute("disabled")
          : confirmButton.setAttribute("disabled", true);
      };

      opinionInput.addEventListener("change", opinionChangeHandler);
      opinionInput.addEventListener("input", opinionChangeHandler);
    }
  }

  function sendRate() {
    confirmButton.addEventListener("click", () => {
      isClickedProceedBtn = true;
      allRatesTiles.forEach((singleRateTile) => {
        singleRateTile.setAttribute("data-disabled", 1);
      });
      opinionInput.setAttribute("disabled", true);
      confirmButton.setAttribute("data-loading", 1);
      confirmButton.setAttribute("disabled", true);
    });
  }

  function setOpinionContainerState(currentRating) {
    if (currentRating < 3 && currentRating >= 1) {
      opinionInput.value = "";
      opinionInput.focus();
      opinionContainer.setAttribute("data-opinion-container-expanded", true);
    } else {
      opinionContainer.removeAttribute("data-opinion-container-expanded");
    }
  }
};
