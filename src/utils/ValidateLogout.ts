import { navigateToUrl } from "single-spa";

export function ValidateLogout() {
  localStorage.removeItem("@token");

  navigateToUrl("http://localhost:9000/LoginPage");
}
