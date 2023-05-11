/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import { UserFeedbackModal } from "./components/user-feedback-modal/user-feedback-modal";
import { UserFeedbackComponent } from "./components/user-feedback-component/user-feedback-component";
import "./home-page.scss";

// setTimeout(() => {
//   // show UserFeedbackModal 1s after page has been loaded
//   UserFeedbackModal();
// }, 1000);

UserFeedbackComponent();
