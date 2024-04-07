export const serverMessage = (payload: any, toast: any) => {
  if (payload.message === "Network Error") {
    toast.error(
      `${payload.message}! Please, check your network and reload page!`
    );
  } else {
    toast.error(payload.response.data.message);
  }
};
