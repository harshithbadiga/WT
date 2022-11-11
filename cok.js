// document.cookie = "test1=Name of Course : WebTech Lab; SameSite=None; Secure";
document.cookie = "Name of Course : WebTech Lab & Name of Branch : DSE; SameSite=None; Secure";

const cookieValue = document.cookie
//   .split('; ')
//   .find((row) => row.startsWith('test2='))
//   ?.split('=')[1];
function showCookieValue() {
  const output = document.getElementById('cookie-value')
  output.textContent = `> ${cookieValue}`
}

function clearOutputCookieValue() {
  const output = document.getElementById('cookie-value')
  output.textContent = ''
}