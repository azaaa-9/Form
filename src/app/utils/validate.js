export const validateCard = (data) => {
    const errors = {};
    if (!data.firstName) errors.firstName = "First Name is required.";
    if (!data.lastName) errors.lastName = "Last Name is required.";
    if (!data.userName) errors.userName = "User Name is required.";
    return errors;
  };
  