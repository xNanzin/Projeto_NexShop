function initSDK() {
    const data = {
        ip: '192.168.0.1', // simulado
        device: navigator.userAgent,
        mouseActivity: 0
    };

    let moveCounter = 0;
    document.addEventListener('mousemove', () => {
        moveCounter++;
        data.mouseActivity = moveCounter;
    });

    setTimeout(() => {
        fetch('http://localhost:3000/identity/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(response => {
            console.log('Risco:', response);
            alert(`Risco: ${response.status} (Score: ${response.score})`);
        });
    }, 5000);
}