const authHeader = () => {
  const token = localStorage.getItem('jwtToken');
  console.log(token);
  if (token) {
    return { 'x-auth-token': token };
  } else {
    return {};
  }
}

export default authHeader
