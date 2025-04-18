const API_URL = 'https://cash-track-api-production.up.railway.app';
//const API_URL = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', async () => {
    const messageModal = document.getElementById('messageModal');
    const messageText = document.getElementById('modalMessage');
    const messageCloseBtn = messageModal.querySelector('.close');

    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    function deleteAccessToken() {
        sessionStorage.removeItem('accessToken');
    }

    const accessToken = sessionStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = 'index.html';
        return;
    }

    // Seleciona todos os botões de fechar
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            // Encontra o modal mais próximo e o esconde
            const modal = closeBtn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        deleteAccessToken();
        window.location.href = 'index.html';
    });

    // When the burger button is clicked, activates the hidden nav menu
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // GET request for the user account data
    try {
        const accountDataResponse = await fetch(`${API_URL}/users/account`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        });

        if (accountDataResponse.ok) {
            const usernameData = await accountDataResponse.json();
            const usernameElement = document.getElementById('userNameValue');
            const userEmailElement = document.getElementById('userEmailValue');
            if (usernameElement) {
                usernameElement.textContent = usernameData.username;
            }
            if (userEmailElement) {
                userEmailElement.textContent = usernameData.email;
            }
        } else {
            showMessage('Erro ao obter os dados do usuário. Tente recarregar a página ou fazer login novamente.');
        }
    } catch (error) {
        showMessage('Erro ao obter os dados do usuário. Tente recarregar a página ou fazer login novamente.');
    }

    document.querySelectorAll('.edit-btn, .edit-btn-desktop').forEach(button => {
        button.addEventListener('click', (event) => {
            const target = event.target.closest('button');
            const type = target.getAttribute('data-id');
    
            const usernameModal = document.getElementById('editUsernameModal');
            const emailModal = document.getElementById('editEmailModal');
    
            // Fecha todos os modais antes de abrir o correto
            usernameModal.style.display = 'none';
            emailModal.style.display = 'none';
    
            if (type === 'username') {
                usernameModal.style.display = 'flex';
            } else if (type === 'email') {
                emailModal.style.display = 'flex';
            }
    
            // Fechar ao clicar no botão "x"
            const modal = type === 'username' ? usernameModal : emailModal;
            const closeBtn = modal.querySelector('.close');
            closeBtn.onclick = () => modal.style.display = 'none';
    
            // Fechar ao clicar fora do conteúdo
            window.onclick = (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        });
    });

    // Exibe mensagem no modal existente
    function showMessage(message, isSuccess = true) {
        messageText.textContent = message;
        messageText.style.color = isSuccess ? '#00d26a' : '#ff5555';
        messageModal.style.display = 'flex';

        // Quando o usuário clicar no botão de fechar
        messageCloseBtn.onclick = function () {
            messageModal.style.display = 'none';
            if (isSuccess) {
                location.reload(); // Recarrega a página após mensagem de sucesso
            }
        };

        // Também fecha ao clicar fora do modal
        window.onclick = function (event) {
            if (event.target == messageModal) {
                messageModal.style.display = 'none';
                if (isSuccess) {
                    location.reload();
                }
            }
        };
    }

    // Atualização de nome de usuário
    document.getElementById('editUsernameForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById('newUsername').value;

        // Fecha o modal de edição
        document.getElementById('editUsernameModal').style.display = 'none';

        const data = {
            username: username || null,
            email: null
        };

        try {
            const response = await fetch(`${API_URL}/users`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showMessage('Nome de usuário atualizado com sucesso!', true);
            } else {
                showMessage('Erro ao atualizar nome de usuário.', false);
            }
        } catch (error) {
            showMessage('Erro na requisição.', false);
        }
    });

    // Atualização de e-mail
    document.getElementById('editEmailForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById('newEmail').value;

        // Fecha o modal de edição
        document.getElementById('editEmailModal').style.display = 'none';

        const data = {
            username: null,
            email: email || null
        };

        try {
            const response = await fetch(`${API_URL}/users`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showMessage('E-mail atualizado com sucesso!', true);
            } else {
                showMessage('Erro ao atualizar e-mail.', false);
            }
        } catch (error) {
            showMessage('Erro na requisição.', false);
        }
    });
});