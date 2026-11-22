
/* =====================================
   DATA MISI
===================================== */

const missions = {

    plastic: {
        label: "MISI 1",
        title: "Plastic Fighter",
        description: "Kurangi penggunaan plastik sekali pakai.",
        challenge: "Bawa botol minum sendiri (tumbler) dan hindari membeli minuman dengan botol plastik sekali pakai selama satu hari.",
        image: "tumbler.jpg"
    },

    ocean: {
        label: "MISI 2",
        title: "Ocean Protector",
        description: "Jaga kebersihan pantai dan lingkungan laut.",
        challenge: "Mulailah dengan tidak membuang sampah sembarangan. Jika memungkinkan, ikut kegiatan membersihkan pantai atau lingkungan sekitarmu.",
        image: "images/ocean.jpg"
    },

    marine: {
        label: "MISI 3",
        title: "Marine Guardian",
        description: "Dukung konservasi ekosistem laut.",
        challenge: "Pelajari pentingnya terumbu karang dan bagikan satu informasi tentang cara melindungi kehidupan laut.",
        image: "images/coral.jpg"
    },

    earth: {
        label: "MISI 4",
        title: "Earth Educator",
        description: "Edukasi orang sekitar tentang pentingnya menjaga bumi.",
        challenge: "Bagikan satu informasi mengenai pelestarian lingkungan kepada teman, keluarga, atau melalui media sosial.",
        image: "images/earth.jpg"
    }

};


// Menyimpan misi yang dipilih
let selectedMission = null;


/* =====================================
   PINDAH TAHAP
===================================== */

function keTahap(nomor) {

    document.querySelectorAll(".step").forEach(step => {
        step.classList.remove("active");
    });

    document.getElementById("step" + nomor)
        .classList.add("active");

    updateIndicator(nomor);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================
   INDIKATOR TAHAP
===================================== */

function updateIndicator(nomor) {

    for (let i = 1; i <= 3; i++) {

        const indicator = document.getElementById(
            "indicator" + i
        );

        indicator.classList.remove("active", "done");

        if (i < nomor) {
            indicator.classList.add("done");
        }

        if (i === nomor) {
            indicator.classList.add("active");
        }

    }

}


/* =====================================
   TAHAP 1 : PILIH MISI
===================================== */

function mulaiMisi() {

    const pilihan = document.querySelector(
        'input[name="mission"]:checked'
    );

    const message = document.getElementById("select-message");

    // Cek apakah misi sudah dipilih
    if (!pilihan) {

        message.textContent =
            "Silakan pilih satu misi terlebih dahulu!";

        message.style.color = "#ff9a9a";

        return;
    }

    // Simpan misi
    selectedMission = pilihan.value;

    const data = missions[selectedMission];

    // Tampilkan data misi
    document.getElementById("mission-label").textContent =
        data.label;

    document.getElementById("mission-title").textContent =
        data.title;

    document.getElementById("mission-description").textContent =
        data.description;

    document.getElementById("challenge-text").textContent =
        data.challenge;

    document.getElementById("mission-image").src =
        data.image;

    document.getElementById("mission-image").alt =
        data.title;

    // Pindah ke tahap 2
    keTahap(2);

}


/* =====================================
   TAHAP 2 : SUDAH MELAKUKAN
===================================== */

function sudahMelakukan() {

    // Pengunjung melaporkan bahwa tantangan
    // sudah dilakukan secara mandiri.

    document.getElementById("pengalaman").value = "";

    document.getElementById("char-count").textContent = "0";

    document.getElementById("photo-upload").value = "";

    document.getElementById("photo-preview").style.display =
        "none";

    keTahap(3);

}


/* =====================================
   BELUM MELAKUKAN
===================================== */

function belumMelakukan() {

    alert(
        "Tidak masalah! Kamu bisa melakukan tantangan ini kapan saja. Silakan coba lagi saat sudah siap. 🌱"
    );

    keTahap(1);

}


/* =====================================
   TAHAP 3 : HITUNG KARAKTER
===================================== */

const pengalaman = document.getElementById("pengalaman");

pengalaman.addEventListener("input", function() {

    document.getElementById("char-count").textContent =
        this.value.length;

});


/* =====================================
   UPLOAD FOTO DAN PREVIEW
===================================== */

const photoUpload = document.getElementById("photo-upload");

photoUpload.addEventListener("change", function() {

    const file = this.files[0];

    if (!file) {
        return;
    }

    // Pastikan file berupa gambar
    if (!file.type.startsWith("image/")) {

        alert("Silakan pilih file gambar!");

        this.value = "";

        return;
    }

    const preview = document.getElementById("photo-preview");

    const imageURL = URL.createObjectURL(file);

    preview.src = imageURL;

    preview.style.display = "block";

});


/* =====================================
   KIRIM REFLEKSI
===================================== */

function kirimRefleksi() {

    const isiPengalaman =
        document.getElementById("pengalaman").value.trim();

    // Validasi refleksi
    if (isiPengalaman.length < 10) {

        alert(
            "Ceritakan pengalamanmu minimal 10 karakter terlebih dahulu!"
        );

        return;
    }

    // Tampilkan nama misi pada halaman penghargaan
    document.getElementById("success-mission").textContent =
        "Kamu telah menyelesaikan tantangan " +
        missions[selectedMission].title +
        " dan mengirimkan refleksimu.";

    // Tampilkan halaman penghargaan
    document.querySelectorAll(".step").forEach(step => {
        step.classList.remove("active");
    });

    document.getElementById("success").classList.add("active");

    // Semua indikator selesai
    updateIndicator(4);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================
   ULANG MISI
===================================== */

function ulangMisi() {

    // Reset pilihan
    document.querySelectorAll(
        'input[name="mission"]'
    ).forEach(input => {
        input.checked = false;
    });

    selectedMission = null;

    // Reset refleksi
    document.getElementById("pengalaman").value = "";

    document.getElementById("char-count").textContent = "0";

    // Reset foto
    document.getElementById("photo-upload").value = "";

    document.getElementById("photo-preview").style.display =
        "none";

    // Kembali ke tahap pertama
    keTahap(1);

}
