
document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    const dots = document.querySelectorAll(".dot");

    tabs.forEach((tab, index) => {

        tab.addEventListener("click", function () {

            // Hilangkan status aktif dari semua tab
            tabs.forEach(item => {
                item.classList.remove("active");
            });

            // Sembunyikan semua materi
            contents.forEach(content => {
                content.classList.remove("active");
            });

            // Hilangkan status aktif semua indikator
            dots.forEach(dot => {
                dot.classList.remove("active");
            });

            // Aktifkan tab yang dipilih
            this.classList.add("active");

            // Tampilkan materi sesuai tab
            const target = this.dataset.tab;

            document.getElementById(target)
                .classList.add("active");

            // Aktifkan indikator yang sesuai
            dots[index].classList.add("active");

        });

    });

});
