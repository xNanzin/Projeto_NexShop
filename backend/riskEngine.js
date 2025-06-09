function evaluate(data) {
    let score = 0;

    if (data.ip && data.ip.startsWith('192.168')) {
        score += 10;
    }

    if (data.device && data.device === 'unknown') {
        score += 30;
    }

    if (data.mouseActivity < 5) {
        score += 20;
    }

    const status = score < 30 ? 'allow' : (score < 60 ? 'review' : 'deny');

    return {
        score,
        status,
        timestamp: new Date().toISOString()
    };
}

module.exports = { evaluate };