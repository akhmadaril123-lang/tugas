const userContainer = document.querySelector('#user-container');
const loading = document.querySelector('#loading');
const btnRefresh = document.querySelector('#refresh-btn');

const loadDataUser = async () => {
    try {
        userContainer.innerHTML = '';
        loading.style.display = 'block';
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw Error("HTTP Error! status: " + response.status );
        }

        const users = await response.json()
        users.forEach(({ name, email, company }) => {
            const card = document.createElement("div");
            card.className = "user-card";
            card.innerHTML = "<h4>" + name + "</h4><p>Email: " + email + "</p><small>Perusahaan: " + company.name + "</small>";
            userContainer.appendChild(card);
        });
}       catch(error) {
    console.error("gagal mengamnil data pengguna", error);
    userContainer.innerHTML ="<p class=\" error\">Gagal memuat data: "+ error.message + "</p>";

}   finally {
    loading.style.display = 'none';

            }
}

btnRefresh.addEventListener('click', loadDataUser);
loadDataUser();
