import CookieManagement from "./cookieManagement";

export default function hasLogin() {
    return new CookieManagement().getItem('login') === "true";
}