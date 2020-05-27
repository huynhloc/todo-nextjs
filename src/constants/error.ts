export const ERROR_MESSAGE = {
  SERVER_ERROR: 'Server error, please try again.',
  REQUIRED: '*Required field',
  INVALID_EMAIL: 'Invalid email address',
  TAKEN_EMAIL: 'Email already exists',
  PASSWORD_NO_MATCH: "Password doesn't match",
  INVALID_PASSWORD:
    'Must contain at least 8 characters with upper and lower case and numbers',
  USER_NOT_EXIST:
    "Sorry, we couldn't find an account with that email. Please enter another email or sign up for a new account.",
};

const AUTH_FORM_ERROR_FIRSTNAME_PROVIDE = 'Auth.form.error.firstName.provide';
const AUTH_FORM_ERROR_LASTNAME_PROVIDE = 'Auth.form.error.lastName.provide';
const AUTH_FORM_ERROR_EMAIL_PROVIDE = 'Auth.form.error.email.provide';
const AUTH_FORM_ERROR_EMAIL_TAKEN = 'Auth.form.error.email.taken';
const AUTH_FORM_ERROR_EMAIL_FORMAT = 'Auth.form.error.email.format';
const AUTH_FORM_ERROR_PASSWORD_PROVIDE = 'Auth.form.error.password.provide';
const AUTH_FORM_ERROR_PASSWORD_FORMAT = 'Auth.form.error.password.format';
const AUTH_FORM_ERROR_USER_NOT_EXIST = 'Auth.form.error.user.not-exist';
const AUTH_FORM_ERROR_PASSWORD_CONFIRMATION_PROVIDE =
  'Auth.form.error.passwordConfirmation.provide';
const AUTH_FORM_ERROR_CODE_PROVIDE = 'Auth.form.error.code.provide';
const AUTH_FORM_ERROR_PASSWORD_MATCHING = 'Auth.form.error.password.matching';
const AUTH_FORM_ERROR_PARAMS_PROVIDE = 'Auth.form.error.params.provide';

export type ServerErrorID =
  | typeof AUTH_FORM_ERROR_FIRSTNAME_PROVIDE
  | typeof AUTH_FORM_ERROR_LASTNAME_PROVIDE
  | typeof AUTH_FORM_ERROR_EMAIL_PROVIDE
  | typeof AUTH_FORM_ERROR_EMAIL_TAKEN
  | typeof AUTH_FORM_ERROR_EMAIL_FORMAT
  | typeof AUTH_FORM_ERROR_PASSWORD_PROVIDE
  | typeof AUTH_FORM_ERROR_PASSWORD_CONFIRMATION_PROVIDE
  | typeof AUTH_FORM_ERROR_CODE_PROVIDE
  | typeof AUTH_FORM_ERROR_PASSWORD_MATCHING
  | typeof AUTH_FORM_ERROR_PARAMS_PROVIDE
  | typeof AUTH_FORM_ERROR_PASSWORD_FORMAT;

export const SERVER_ERROR_MAP = {
  [AUTH_FORM_ERROR_FIRSTNAME_PROVIDE]: {
    field: 'firstName',
    message: ERROR_MESSAGE.REQUIRED,
  },
  [AUTH_FORM_ERROR_LASTNAME_PROVIDE]: {
    field: 'lastName',
    message: ERROR_MESSAGE.REQUIRED,
  },
  [AUTH_FORM_ERROR_EMAIL_PROVIDE]: {
    field: 'email',
    message: ERROR_MESSAGE.REQUIRED,
  },
  [AUTH_FORM_ERROR_EMAIL_TAKEN]: {
    field: 'email',
    message: ERROR_MESSAGE.TAKEN_EMAIL,
  },
  [AUTH_FORM_ERROR_EMAIL_FORMAT]: {
    field: 'email',
    message: ERROR_MESSAGE.INVALID_EMAIL,
  },
  [AUTH_FORM_ERROR_PASSWORD_PROVIDE]: {
    field: 'password',
    message: ERROR_MESSAGE.REQUIRED,
  },
  [AUTH_FORM_ERROR_PASSWORD_FORMAT]: {
    field: 'password',
    message: ERROR_MESSAGE.INVALID_PASSWORD,
  },
  [AUTH_FORM_ERROR_USER_NOT_EXIST]: {
    field: 'form', // will show on top of form
    message: ERROR_MESSAGE.USER_NOT_EXIST,
  },
  [AUTH_FORM_ERROR_PASSWORD_CONFIRMATION_PROVIDE]: {
    field: 'passwordConfirmation',
    message: ERROR_MESSAGE.REQUIRED,
  },
  [AUTH_FORM_ERROR_PASSWORD_MATCHING]: {
    field: 'passwordConfirmation',
    message: ERROR_MESSAGE.PASSWORD_NO_MATCH,
  },
  [AUTH_FORM_ERROR_CODE_PROVIDE]: {
    field: 'form',
    message: '',
  },
  [AUTH_FORM_ERROR_PARAMS_PROVIDE]: {
    field: 'form',
    message: '',
  },
};
