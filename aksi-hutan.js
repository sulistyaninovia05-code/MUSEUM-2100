
/* =====================================
   DATA MISI HUTAN
===================================== */

const missions = {

    tree: {
        label: "MISI 1",
        title: "Tree Guardian",
        description: "Menanam dan merawat pohon untuk menjaga kelestarian hutan.",
        challenge: "Tanam satu bibit pohon atau rawat tanaman yang sudah kamu miliki. Pastikan tanaman mendapatkan air dan sinar matahari yang cukup.",
        image: "images/menanam-pohon.jpg"
    },

    wildlife: {
        label: "MISI 2",
        title: "Wildlife Protector",
        description: "Melindungi satwa liar dan menjaga habitatnya.",
        challenge: "Pelajari satu satwa yang terancam kehilangan habitatnya. Bagikan informasi tentang pentingnya melindungi satwa liar dan tidak membeli produk dari perdagangan satwa ilegal.",
        image: "images/satwa-hutan.jpg"
    },

    forest: {
        label: "MISI 3",
        title: "Forest Defender",
        description: "Mendukung penggunaan produk yang berasal dari sumber bertanggung jawab.",
        challenge: "Perhatikan produk berbahan kertas atau kayu yang kamu gunakan. Pilih produk dari sumber yang dikelola secara bertanggung jawab dan kurangi penggunaan kertas yang tidak diperlukan.",
        image: "images/menjaga-hutan.jpg"
    },

    educator: {
        label: "MISI 4",
        title: "Earth Educator",
        description: "Mengajak orang lain peduli terhadap kelestarian hutan.",
        challenge: "Bagikan satu informasi tentang bahaya deforestasi kepada teman, keluarga, atau melalui media sosial agar semakin banyak orang peduli terhadap hutan.",
        image: "images/edukasi-hutan.jpg"
    }

};


// Menyimpan pilihan pengunjung
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
   TAHAP 1: PILIH MISI
===================================== */

function mulaiMisi() {

    const pilihan = document.querySelector(
        'input[name="mission"]:checked'
    );

    const message = document.getElementById("select-message");

    if (!pilihan) {

        message.textContent =
            "Silakan pilih satu misi terlebih dahulu!";

        message.style.color = "#ff9a9a";

        return;
    }

    selectedMission = pilihan.value;

    const data = missions[selectedMission];

    // Tampilkan informasi misi
    document.getElementById("mission-label").textContent =
        data.label;

    document.getElementById("mission-title").textContent =
        data.title;

    document.getElementById("mission-description").textContent =
        data.description;

    document.getElementById("challenge-text").textContent =
        data.challenge;

    // Ganti gambar sesuai misi
    const image = document.getElementById("mission-image");

    image.src = data.image;
    image.alt = data.title;

    // Pindah ke tahap kedua
    keTahap(2);

}


/* =====================================
   TAHAP 2: SUDAH MELAKUKAN
===================================== */

function sudahMelakukan() {

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
        "Tidak masalah! Kamu bisa melakukan tantangan ini kapan saja. Kembali dan coba lagi setelah siap. 🌱"
    );

    keTahap(1);

}


/* =====================================
   HITUNG KARAKTER REFLEKSI
===================================== */

const pengalaman = document.getElementById("pengalaman");

pengalaman.addEventListener("input", function() {

    document.getElementById("char-count").textContent =
        this.value.length;

});


/* =====================================
   UPLOAD FOTO
===================================== */

const photoUpload = document.getElementById("photo-upload");

photoUpload.addEventListener("change", function() {

    const file = this.files[0];

    if (!file) return;

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

    if (isiPengalaman.length < 10) {

        alert(
            "Ceritakan pengalamanmu minimal 10 karakter terlebih dahulu!"
        );

        return;
    }

    // Tampilkan nama misi
    document.getElementById("success-mission").textContent =
        "Kamu telah menyelesaikan tantangan " +
        missions[selectedMission].title +
        " dan mengirimkan refleksimu.";

    // Sembunyikan seluruh tahap
    document.querySelectorAll(".step").forEach(step => {
        step.classList.remove("active");
    });

    // Tampilkan penghargaan
    document.getElementById("success").classList.add("active");

    // Tandai semua indikator selesai
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
