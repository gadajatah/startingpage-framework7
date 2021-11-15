var app = new Framework7({
    // App root element
    el: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: [
      {
        path: '/soal1/',
        url: './pages/soal1.html',
      },
      {
        path: '/soal2/',
        url: './pages/soal2.html',
      },
      {
        path: '/soal3/',
        url: './pages/soal3.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');
  var $$ = Dom7;
// soal Nomer 1
  $$('.view-main').on('click', '#hitung', function () {
    var total = parseInt($$('#total').val());
    var voucher = $$('#voucher').val();
    var diskon = "";
    var bayar = "";
        if (voucher == "NOV21") {
        diskon = 0.02 * total;
        } else if (voucher == "MDN2021") {
        diskon = 0.01 * total;
        } else if (voucher == "THN2020") {
          if (total >= 1000000) {
            diskon = 0.5 * total
          }
        };

    $$('#diskon').val(diskon);
    bayar = total - diskon;
    $$('#bayar').val(bayar);
  });

  // Soal Nomer 2
  $$('.view-main').on('click', '#mulai', function () {
      var tampung = "";
      var angka = $$("#angka").val();
      for (var i = 0; i <= angka; i++) {
        tampung += "Data ke-" + i + "<br>";
      }
      $$('#hasil').html(tampung);
      // app.dialog.alert("tombol mulai");
  });

  // Soal Nomer 3
  $$('.view-main').on('click', '#proses', function () {
    var biaya = parseInt($$('#biaya').val());
    var laba = parseInt($$('#laba').val());
    var jual = (biaya + (biaya * laba) / 100);
    $$('#hasil').html("Total Harga Jual Produk : " + jual);
  });
