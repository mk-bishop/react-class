export const validateCommentForm = (values) => {
    const errors = {};

    if (!values.rating) {
        errors.rating = 'Required';
    }

    if (values.author.length < 2) {
        errors.author = 'Must be at least 2 characters';
    } else if (values.author.length > 20) {
        errors.author = 'Name must be shorter than 20 characters';
    }

    return errors;
};