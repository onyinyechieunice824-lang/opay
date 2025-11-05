// ===========================
// Moniepoint UI Interactions
// ===========================

// Toggle balance visibility
const toggleBalanceBtn = document.getElementById('toggleBalance');
const balanceElement = document.getElementById('balance');
let balanceVisible = true;

if (toggleBalanceBtn && balanceElement) {
  toggleBalanceBtn.addEventListener('click', () => {
    balanceVisible = !balanceVisible;

    if (balanceVisible) {
      balanceElement.textContent = '125,450.00';
      toggleBalanceBtn.innerHTML = '<i class="fas fa-eye"></i>';
    } else {
      balanceElement.textContent = '••••••';
      toggleBalanceBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
  });
}

// Quick action handlers
const actionItems = document.querySelectorAll('.action-item');
actionItems.forEach(item => {
  item.addEventListener('click', () => {
    const actionName = item.querySelector('span').textContent;
    showNotification(`${actionName} feature coming soon!`);
  });
});

// Transaction item click effect
const transactionItems = document.querySelectorAll('.transaction-item');
transactionItems.forEach(item => {
  item.style.transition = 'background-color 0.2s ease';
  item.addEventListener('click', () => {
    item.style.backgroundColor = '#F9FAFB';
    setTimeout(() => {
      item.style.backgroundColor = '';
    }, 200);
  });
});

// Bottom navigation
const navItems = document.querySelectorAll('.nav-item, .nav-btn');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');

    const navName = item.querySelector('span').textContent;
    if (navName !== 'Home') {
      showNotification(`${navName} section coming soon!`);
    }
  });
});

// Action buttons (optional placeholders)
const addMoneyBtn = document.querySelector('.action-btn.primary');
const sendMoneyBtn = document.querySelector('.action-btn.secondary');

// Notification system
function showNotification(message) {
  const note = document.createElement('div');
  note.textContent = message;
  note.style.position = 'fixed';
  note.style.bottom = '70px';
  note.style.left = '50%';
  note.style.transform = 'translateX(-50%)';
  note.style.background = '#007bff';
  note.style.color = 'white';
  note.style.padding = '10px 15px';
  note.style.borderRadius = '8px';
  note.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  note.style.fontSize = '14px';
  note.style.zIndex = '999';
  note.style.opacity = '0';
  note.style.transition = 'opacity 0.3s ease';
  document.body.appendChild(note);

  // Fade in
  setTimeout(() => (note.style.opacity = '1'), 50);

  // Fade out and remove
  setTimeout(() => {
    note.style.opacity = '0';
    setTimeout(() => note.remove(), 300);
  }, 2000);
}

console.log('✅ Moniepoint App initialized successfully!');
