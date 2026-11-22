
function openTab(event, tabName) {

    // Sembunyikan semua informasi
    const contents = document.querySelectorAll('.tab-content');

    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Hapus status aktif tombol
    const buttons = document.querySelectorAll('.tab-btn');

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Tampilkan informasi yang dipilih
    document.getElementById(tabName).classList.add('active');

    // Aktifkan tombol
    event.currentTarget.classList.add('active');

}
