import { navigateTo } from "../routes";
import { validateEmail } from "../helper";
import { authenticateUser } from "../ApiCalls";
import Header from "./header";
// New component
class Login extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = /* HTML */ ` <form id="login-form">
      <div class="mb-6">
        <label
          id="email-address-label"
          for="email-address"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your email</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              id="email-address-icon"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="email-address"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
        </div>
        <p
          id="email-address-error"
          class="hidden mt-2 text-sm text-red-600 dark:text-red-500"
        >
          <span id="email-address-error-text" class="font-medium"></span>
        </p>
      </div>
      <div class="mb-6">
        <label
          id="password-label"
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        />
        <p
          id="password-error"
          class="hidden mt-2 text-sm text-red-600 dark:text-red-500"
        >
          <span id="password-error-text" class="font-medium"></span>
        </p>
      </div>
      <button
        type="submit"
        class="w-64 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          id="login-btn-loading"
          role="status"
          class="hidden inline w-4 h-4 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        <span id="login-btn-text">Login</span>
      </button>
    </form>`;

    // Styles
    const labelErrorCss =
      "block mb-2 text-sm font-medium text-red-700 dark:text-red-500";
    const labelCss =
      "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300";
    const inputErrorCss =
      "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400";
    const inputCss =
      "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    const textErrorCss = "text-sm text-red-600 dark:text-red-500";
    const textCss = "text-gray-500 dark:text-gray-400";

    // State
    const validateForm = ({ email, password }) => {
      var flag = true;

      if (email == "") {
        setError("email-address", "Empty field", true);
        flag = false;
      } else {
        if (!validateEmail(email)) {
          setError("email-address", "Entre a valid email adress", true);
          flag = false;
        }
      }
      if (password == "") {
        setError("password", "Empty field", false);
        flag = false;
      }

      return flag;
    };

    const setError = (elementId, text, icon = false) => {
      $("#" + elementId).removeClass(inputCss);
      $("#" + elementId).addClass(inputErrorCss + (icon ? " pl-10" : ""));
      $("#" + elementId + "-label").removeClass(labelCss);
      $("#" + elementId + "-label").addClass(labelErrorCss);
      $("#" + elementId + "-error").toggleClass("hidden");
      $("#" + elementId + "-error-text").text(text);
      if (icon) {
        $("#" + elementId + "-icon").removeClass(textCss);
        $("#" + elementId + "-icon").addClass(textErrorCss);
      }
    };

    const setNormal = (elementId, icon = false) => {
      $("#" + elementId).removeClass(inputErrorCss);
      $("#" + elementId).addClass(inputCss + (icon ? " pl-10" : ""));
      $("#" + elementId + "-label").removeClass(labelErrorCss);
      $("#" + elementId + "-label").addClass(labelCss);
      $("#" + elementId + "-error").toggleClass("hidden");
      $("#" + elementId + "-error-text").text("");
      if (icon) {
        $("#" + elementId + "-icon").removeClass(textErrorCss);
        $("#" + elementId + "-icon").addClass(textCss);
      }
    };

    const setLoading = () => {
      $("#login-btn-text").toggleClass("hidden");
      $("#login-btn-loading").toggleClass("hidden");
    };

    $("#login-form").submit(async (e) => {
      e.preventDefault();
      setLoading();

      setNormal("email-address", true);
      setNormal("password", false);
      const email = $("#email-address").val();
      const password = $("#password").val();

      if (validateForm({ email, password })) {
        const res = await authenticateUser({ user: { email, password } });
        if (res.status != 200) {
          $("#login-alert").first().toggle("hidden");
        } else {
          const user = await res.json();
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user.user));
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(user.refreshToken)
          );
          const newHeader = await new Header().render();
          $("#header").html($(newHeader));
          navigateTo("/");
        }
      }
      setLoading();
    });
  }
}

customElements.define("login-form", Login);
