export const fetchInternships = async () => {
  const response = await fetch('/api/internships');
  return response.json();
};

export const applyForInternship = async (data) => {
  const response = await fetch('/api/apply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
