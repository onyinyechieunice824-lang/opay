// Toggle balance visibility
const toggleBalanceBtn = document.getElementById('toggleBalance');
const balanceElement = document.getElementById('balance');
let balanceVisible = true;

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

// Quick action handlers
const actionItems = document.querySelectorAll('.action-item');
actionItems.forEach(item => {
  item.addEventListener('click', () => {
    const actionName = item.querySelector('span').textContent;
    showNotification(`${actionName} feature coming soon!`);
  });
});

// Transaction item handlers
const transactionItems = document.querySelectorAll('.transaction-item');
transactionItems.forEach(item => {
  item.addEventListener('click', () => {
    item.style.backgroundColor = '#F9FAFB';
    setTimeout(() => {
      item.style.backgroundColor = '';
    }, 200);
  });
});

// Bottom navigation
const navItems = document.querySelectorAll('.nav-item');
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

// Action buttons
const addMoneyBtn = document.querySelector('.action-btn.primary');
const sendMoneyBtn = document.querySelector('.action-btn.secondary');

console.log('OPay Banking App initialized successfully!');