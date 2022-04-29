export default function validateEmail(email) {
  // eslint-disable-next-line
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return email.match(emailRegex);
}
