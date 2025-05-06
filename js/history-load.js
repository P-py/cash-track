const API_URL = 'https://cash-track-api-production.up.railway.app';
//const API_URL = 'http://localhost:8080';


document.addEventListener('DOMContentLoaded', async () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    // Message modal for error or success messages
    const messageModal = document.getElementById('messageModal');
    const modalMessage = document.getElementById('modalMessage');

    function showMessage(message) {
        modalMessage.textContent = message;
        messageModal.style.display = 'flex';

        messageModal.querySelector('.close').addEventListener('click', () => {
            messageModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == messageModal) {
                messageModal.style.display = 'none';
            }
        });
    }

    function deleteAccessToken() {
        sessionStorage.removeItem('accessToken');
    }

    const accessToken = sessionStorage.getItem('accessToken');
    if (!accessToken) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('logout-btn').addEventListener('click', () => {
        deleteAccessToken();
        window.location.href = 'index.html';
    });

    // When the burger button is clicked, activates the hidden nav menu
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Função para buscar o histórico do usuário
    try {
        const accessToken = sessionStorage.getItem('accessToken');

        const response = await fetch(`${API_URL}/users/history`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const historyData = await response.json();
            const historyList = document.getElementById('history-list');

            historyData.forEach(item => {
                const listItem = document.createElement('li');
                listItem.classList.add('history-item');
                listItem.classList.add(item.source === 'expense' ? 'expense' : 'income');

                // Corrigir o formato da data
                const correctedDate = item.dateCreated.split('.')[0]; // Remove o que vem depois do ponto
                const dateObj = new Date(correctedDate);

                // Gerar data e hora no formato brasileiro
                const formattedDate = dateObj.toLocaleDateString('pt-BR');
                const formattedTime = dateObj.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            
                // Se for 'expense', coloca o sinal de menos antes do valor
                const formattedValue = item.source === 'expense' 
                    ? `- R$ ${item.value.toFixed(2)}` 
                    : `R$ ${item.value.toFixed(2)}`;
            
                listItem.innerHTML = `
                    <span class="label"><strong>${item.label}</strong></span>
                    <span class="value">${formattedValue}</span>
                    <span class="date"><strong>${formattedDate} ${formattedTime}</strong></span>
                `;
                historyList.appendChild(listItem);
            });                                            
        } else {
            showMessage('Erro ao obter os dados do usuário. Tente recarregar a página ou fazer login novamente.');
        }
    } catch (error) {
        console.error(error);
    }

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
            const usernameElement = document.getElementById('username');
            if (usernameElement) {
                usernameElement.textContent = usernameData.username;
            }
        } else {
            showMessage('Erro ao obter os dados do usuário. Tente recarregar a página ou fazer login novamente.');
        }
    } catch (error) {
        showMessage('Erro ao obter os dados do usuário. Tente recarregar a página ou fazer login novamente.');
    }

    try {
        const accessToken = sessionStorage.getItem('accessToken');

        const transactionsResponse = await fetch(`${API_URL}/users/balance`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
        });

        if (transactionsResponse.ok) {
            const transactionsData = await transactionsResponse.json();
            const balanceElement = document.getElementById('balance');
            balanceElement.textContent = `R$ ${transactionsData.balance.toFixed(2)}`;
        } else {
            showMessage('Erro ao obter as transações do usuário. Tente recarregar a página ou fazer login novamente.');
        }
    } catch (error) {
        showMessage('Erro ao obter as transações do usuário. Tente recarregar a página ou fazer login novamente.');
    }
});