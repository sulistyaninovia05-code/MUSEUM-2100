
document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("comparisonRange");

    const overlay = document.getElementById("overlay");

    const divider = document.getElementById("divider");


    function updateComparison() {

        const value = slider.value;

        // Mengubah lebar gambar Hari Ini
        overlay.style.width = value + "%";

        // Menggeser garis pembatas
        divider.style.left = value + "%";

    }


    // Saat slider digeser
    slider.addEventListener("input", updateComparison);


    // Tampilan awal
    updateComparison();

});
