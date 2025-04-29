document.addEventListener('DOMContentLoaded', async () => {
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
});