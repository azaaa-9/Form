export const validateCard = () => {

    let isvalid = true;
    let newErrors = {
        firstName: 'firstName oruul!',
        LastName: 'lastName oruul!',
        UserName: 'userName oruul!',
    };

    if(form.firstName) {
        isvalid = false
        newErrors.firstName = 'firstName oruul!'
    }
    if(form.LastName) {
        isvalid = false
        newErrors.LastName = 'LastName oruul!'
    }
    if(form.UserName) {
        isvalid = false
        newErrors.UserName = 'UserName oruul!'
    }
   
}