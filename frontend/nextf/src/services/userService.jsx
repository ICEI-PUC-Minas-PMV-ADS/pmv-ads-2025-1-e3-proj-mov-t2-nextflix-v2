export const updateUser = async (user) => {
  return fetch(`http://192.168.18.5:5075/api/users/${user.userId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
};

export const deleteUser = async (userId) => {
  return fetch(`http://192.168.18.5:5075/api/users/${userId}`, {
    method: 'DELETE',
  });
};