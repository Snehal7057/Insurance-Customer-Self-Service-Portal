document.addEventListener("DOMContentLoaded", function() {
    const claims = [
        { number: 'CLM001', status: 'In Review', date: '09/05/2024' },
        { number: 'CLM002', status: 'Approved', date: '08/25/2024' }
    ];

    const tableBody = document.getElementById('claimsTableBody');
    
    claims.forEach(claim => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${claim.number}</td>
            <td>${claim.status}</td>
            <td>${claim.date}</td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById('fileClaim').addEventListener('click', function() {
        document.getElementById('claimFormSection').classList.remove('hidden');
        document.getElementById('chatbotSection').classList.add('hidden');
    });

    document.getElementById('trackClaims').addEventListener('click', function() {
        alert('Track Claims clicked');
    });

    document.getElementById('chatbot').addEventListener('click', function() {
        document.getElementById('claimFormSection').classList.add('hidden');
        document.getElementById('chatbotSection').classList.remove('hidden');
    });

    document.getElementById('knowledgeBase').addEventListener('click', function() {
        alert('Search Knowledge Base clicked');
    });

    document.getElementById('claimForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Claim Submitted!');
        // Add additional functionality to handle form submission, e.g., sending data to a server.
    });

    // Chatbot functionality
    const chatHistory = document.getElementById('chatHistory');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');

    function addChatMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${sender}: ${message}`;
        chatHistory.appendChild(messageElement);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    sendMessage.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addChatMessage('User', userMessage);
            userInput.value = '';
            // Simple chatbot logic
            let botResponse = 'I’m not sure how to respond to that.';
            if (userMessage.toLowerCase().includes('file a claim')) {
                botResponse = 'Please click on the "Submit a Claim" button.';
            } else if (userMessage.toLowerCase().includes('claim status')) {
                botResponse = 'Please track your claim using the dashboard.';
            }
            addChatMessage('Chatbot', botResponse);
        }
    });
});
