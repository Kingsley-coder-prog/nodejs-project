import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm';
// https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm

const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    console.log(res);

    // if (res.data.status === 'success') {
    //   console.log(res);
    //   alert('Logged in successfully');
    //   window.setTimeout(() => {
    //     location.assign('/');
    //   }, 1500);
    // }
  } catch (err) {
    console.log(err.response.data);
    alert(err.response.data.message);
  }
};

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
  console.log(email, password);
});
