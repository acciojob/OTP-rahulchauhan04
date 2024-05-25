document.addEventListener('DOMContentLoaded', () => {
    const codes = document.querySelectorAll('.code');
    
    codes.forEach((code, index) => {
        code.addEventListener('input', () => {
            if (code.value.length === code.maxLength) {
                if (index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            }
        });

        code.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && code.value === '') {
                if (index > 0) {
                    codes[index - 1].focus();
                }
            }
        });
    });
});