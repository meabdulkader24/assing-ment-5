document.getElementById('history-btn').addEventListener('click', function(){
    showSection('history')
    this.classList.add('bg-[#B4F461]');
    document.getElementById('donate-btn').classList.remove('bg-primary')

})
document.getElementById('donate-btn').addEventListener('click', function(){
    showSection('donate');
    this.classList.add('bg-primary');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]')
})

