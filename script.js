
const tabs = ['earningsTab', 'expensesTab', 'saveGoalsTab', 'savesTab'];

function showTab(tabId, index) {
  tabs.forEach(id => document.getElementById(id).classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');

  const buttons = document.querySelectorAll('.nav-bar button');
  buttons.forEach(btn => btn.classList.remove('active'));
  if (buttons[index]) buttons[index].classList.add('active');
}
