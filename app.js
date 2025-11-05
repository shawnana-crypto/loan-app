// 模拟借款数据
const data = {
  totalTerms:12,
  paidTerms:3,
  remainingPrincipal:6106.25,
  currentTerm:4,
  currentAmount:757.22,
  settlementAmount:5895.48
};

const settleBtn = document.getElementById('settleNow');
const loanStatus = document.getElementById('loanStatus');
const paidInstallments = document.getElementById('paidInstallments');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const remainingPrincipalEl = document.getElementById('remainingPrincipal');
const toast = document.getElementById('toast');

function formatCurrency(n){ return Number(n).toFixed(2); }
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=> toast.classList.remove('show'),1600);
}

// 结清操作
settleBtn.addEventListener('click',()=>{
  settleBtn.disabled=true;
  settleBtn.textContent='结清中...';
  setTimeout(()=>{
    // 更新状态
    loanStatus.textContent='已结清';
    loanStatus.style.background='#dcfce7'; loanStatus.style.color='#10b981';
    paidInstallments.textContent=data.totalTerms+'期';
    progressText.textContent=`${data.totalTerms}/${data.totalTerms}期 (100%)`;
    progressBar.style.width='100%';
    remainingPrincipalEl.textContent='¥0';
    settleBtn.textContent='已结清';
    showToast('结清成功！');
  },1200);
});
