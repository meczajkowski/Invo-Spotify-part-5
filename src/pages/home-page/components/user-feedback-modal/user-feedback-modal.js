import Swal from "sweetalert2";

export const UserFeedbackModal = () => {
  // Get the userFeedbackModalClosedTimestamp value from LocalStorage
  const userFeedbackModalClosedTimestamp = localStorage.getItem(
    "userFeedbackModalClosedTimestamp"
  );

  // Check if the user has seen the modal before and it has been less than 3 days since then
  if (userFeedbackModalClosedTimestamp) {
    // Define the number of milliseconds in 3 days - it is needed, because the getTime() method
    // of the Date object returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
    // This allows us to compare timestamps accurately
    const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;
    const currentDate = new Date();

    // Subtract the number of milliseconds in 3 days from the current date
    // to get the date 3 days ago
    const threeDaysAgo = currentDate.getTime() - threeDaysInMilliseconds;

    if (userFeedbackModalClosedTimestamp >= threeDaysAgo) {
      // If it has been less than 3 days, return to exit the function
      // without displaying the modal
      return;
    }
  }

  // If the user has not seen the modal recently, display it
  Swal.fire({
    template: "#user-feedback-modal",
    showConfirmButton: false,
    width: "492px",
    padding: 0,
    customClass: {
      container: "user-feedback-modal",
    },
    background: "var(--background-color)",
    color: "var(--on-background-color)",
    showCloseButton: true,
    allowEnterKey: false,
    closeButtonHtml: '<img src="/assets/icons/close-icon.svg" alt="X" />',
    didClose: () => {
      // Save the current timestamp when the modal is closed in LocalStorage
      localStorage.setItem("userFeedbackModalClosedTimestamp", Date.now());
    },
  });
};
