
const konten = {
  informasi: {
    judul: "Informasi Penting",
    deskripsi:
      "Terumbu karang merupakan rumah bagi banyak spesies laut. Pemanasan global, pencemaran, dan aktivitas manusia dapat mengancam kelestariannya."
  },

  waktu: {
    judul: "Putar Waktu",
    deskripsi:
      "Bayangkan kondisi alam pada tahun 2100. Bandingkan masa depan yang rusak dengan masa depan yang berhasil diselamatkan melalui tindakan kita hari ini."
  },

  aksi: {
    judul: "Aksi Kita",
    deskripsi:
      "Mulailah perubahan dengan mengurangi plastik sekali pakai, menghemat energi, menjaga kebersihan lingkungan, dan mendukung pelestarian alam."
  }
};

function bukaPanel(jenis) {
  const data = konten[jenis];
  if (!data) return;

  document.getElementById("modal-title").textContent =
    data.judul;

  document.getElementById("modal-description").textContent =
    data.deskripsi;

  document.getElementById("modal").classList.add("show");
}

function tutupPanel() {
  document.getElementById("modal").classList.remove("show");
}

document.getElementById("modal").addEventListener(
  "click",
  function(event) {
    if (event.target === this) {
      tutupPanel();
    }
  }
);

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") tutupPanel();
});
