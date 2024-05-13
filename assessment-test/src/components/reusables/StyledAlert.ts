import Swal, { SweetAlertOptions } from "sweetalert2";

const StyledAlert = (messageType: string, message: string, customOptions: SweetAlertOptions = {}) => {
  const defaultOptions: SweetAlertOptions = {
    title: messageType,
    text: message,
    showCancelButton: false,
    confirmButtonText: "OKAY",
    cancelButtonText: "CANCEL",
    customClass: {
      popup: "rounded-xl",
      title: "font-semibold text-h-md 3xl:text-h-lg text-center theme-font-family2 text-black",
      htmlContainer: "text-center text-h-sm my-10 3xl:mt-16 3xl:mb-14 text-black theme-font-family2",
      confirmButton: "mx-auto block py-4 min-w-28 rounded-lg bg-primary text-primary-content theme-font-family2 mb-4",
      ...(customOptions.showCancelButton && {
        cancelButton:
          "mx-auto block py-4 min-w-28 rounded-lg !outline outline-1 outline-error bg-error-content text-error theme-font-family2 mb-8 ml-4",
      }),
    },
  };

  const options = { ...defaultOptions, ...customOptions };

  return Swal.fire(options);
};

export default StyledAlert;
