const authHeader = () => {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    return { 'x-auth-token': token };
  } else {
    return {};
  }
}

export default authHeader
