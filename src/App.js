import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    {/* <!-- Navigation--> */}
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Product</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">Tentang</a></li>
                    <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Hubungi</a></li>
                </ul>
            </div>
        </div>
    </nav>
    {/* <!-- Masthead--> */}
    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Selamat Datang!</div>
            <div class="masthead-heading text-uppercase">Smoothies Mbak Gemoy</div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#portfolio">Lihat Lebih Banyak</a>
        </div>
    </header>
    
    {/* <!-- Portfolio Grid--> */}
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Product</h2>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 1--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Buah Naga Kocok</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 2--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Buah Alpukat Kocok</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 3--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/3.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Buah Mangga Kocok</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    {/* <!-- Portfolio item 4--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Buah Durian Kocok</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    {/* <!-- Portfolio item 5--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/5.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Es Nyoklat Klasik</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    {/* <!-- Portfolio item 6--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/6.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Es Teh Jumbo</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About--> */}
    <section class="page-section" id="about">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Tentang</h2>
            </div>
            <ul class="timeline">
                <li>
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4>Januari 2023</h4>
                            <h4 class="subheading">Awal Merintis Usaha</h4>
                        </div>
                        <div class="timeline-body"><p class="text-muted">SMOOTHIES MBAK GEMOY awal bermula pada awal tahun 2023 karena melihat trend yang sedang ramai di media sosial banyak oarang yang membuat Smoothies, Karena kak Firti atau yang lebih dikenal dengan panggilan Mbak Gemoy mulai merintis usaha untuk membuat smoothies.</p></div>
                    </div>
                </li>
                <li class="timeline-inverted">
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.png" alt="..." /></div>
                    <div class="timeline-panel">
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.2633078956205!2d100.69678944788214!3d0.8371801788689813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d4cb19f6edd52f%3A0xe738a299d5618a8c!2sWarung%20Nyantai%20Mbak%20Gemoy!5e1!3m2!1sid!2sid!4v1692599360947!5m2!1sid!2sid">
                            </iframe>
                        </div>
                        <div class="timeline-body"><p class="text-muted">Untuk Lokasi SMOOTHIES MBAK GEMOY berlokasi di Desa Bagan Tujuh RT/RW 007/004 Kecamatan Kunto Darussalam Kabupaten Rokan Hulu Riau.</p></div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    {/* <!-- Team--> */}
    <section class="page-section bg-light" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Pemilik</h2>
            </div>
            <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Tentang Fitri...</h2>
                            <p>Nama: Fitri

Pekerjaan: Pengusaha dan Pendiri Bisnis Minuman Smoothies "Smoothies Mbak Gemoy"

Deskripsi Singkat:
Fitri adalah seorang pengusaha berbakat yang memiliki hasrat besar terhadap kesehatan dan nutrisi. Fitri telah sukses dalam mengubah hasratnya menjadi kenyataan dengan mendirikan bisnis minuman smoothies yang inovatif dan berkembang pesat, yang dikenal dengan nama "Smoothies Mbak Gemoy."

Pencapaian:
Dengan dedikasi dan kerja kerasnya, Fitri telah berhasil mengubah Smoothies Mbak Gemoy menjadi merek yang dikenal secara luas Di Desa Bagan Tujuh. Keahliannya dalam memilih bahan-bahan segar dan berkualitas tinggi telah membuat pelanggan setia kembali lagi dan lagi.

Fitri adalah contoh nyata seorang pengusaha yang menggabungkan hasrat pribadi dengan pengetahuan dan keterampilan bisnis untuk menciptakan jejak sukses dalam industri minuman sehat. Melalui Smoothies Mbak Gemoy, dia telah membuktikan bahwa bisnis dapat menjadi kekuatan untuk perubahan positif dalam masyarakat.</p>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    {/* <!-- Clients--> */}
    <div class="py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
                </div>
                <div class="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
                </div>
                <div class="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
                </div>
                <div class="col-md-3 col-sm-6 my-3">
                    <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact--> */}
    <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-case">Hubungi Kami (WhatApp)</h2>
            </div>
            <div class="text-center">
                <h3 class="section-heading text-case">0822 9081 4148</h3>
                <h4 class="section-subheading text-muted">Fitri Gemoy.</h4>
            </div>
        </div>
    </section>
    {/* <!-- Footer--> */}
    <footer class="footer py-4">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
                <div class="col-lg-4 my-3 my-lg-0">
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div class="col-lg-4 text-lg-end">
                    <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                    <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Portfolio Modals--> */}
    {/* <!-- Portfolio item 1 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Buah Naga Kocok</h2>
                                <p class="item-intro text-muted">Smoothies buah naga adalah minuman yang terbuat dari buah naga (pitaya) yang diolah menjadi bentuk smoothie. 
                                Buah naga adalah buah yang berasal dari tanaman kaktus dan memiliki daging yang 
                                lembut, renyah, dan biasanya manis. Smoothies buah naga sering disiapkan dengan 
                                mencampur daging buah naga dengan bahan-bahan lain seperti cream, susu, es, atau jus 
                                buah lainnya untuk menciptakan minuman yang lezat, sehat, dan menyegarkan.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 2 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Buah Alpukat Kocok</h2>
                                <p class="item-intro text-muted">minuman yang terbuat dari alpukat yang diolah menjadi bentuk smoothie atau milkshake. 
                                Alpukat adalah buah dengan daging lembut dan kaya akan lemak sehat, serat, dan nutrisi lainnya. 
                                Minuman alpukat kocok sering disiapkan dengan mencampur daging alpukat dengan bahan-bahan 
                                lainnya untuk menciptakan minuman yang lezat dan bergizi.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 3 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Buah Mangga Kocok</h2>
                                <p class="item-intro text-muted">minuman yang terbuat dari buah mangga yang diolah menjadi smoothie atau milkshake. 
                                Mangga adalah buah tropis yang manis dan lezat, dan dapat diubah menjadi minuman yang menyegarkan dan lezat.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 4 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Buah Durian Kocok</h2>
                                <p class="item-intro text-muted">minuman yang terbuat dari buah durian yang diolah menjadi smoothie atau milkshake. Durian adalah buah tropis yang terkenal dengan aromanya yang kuat dan daging yang lezat. Meskipun aroma durian mungkin kontroversial bagi beberapa orang, 
                                minuman durian kocok dapat menjadi pilihan yang menarik bagi 
                                mereka yang menyukai rasa durian.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 5 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Es Nyoklat Klasik</h2>
                                <p class="item-intro text-muted">minuman yang terbuat dari campuran coklat dan bahan-bahan lain yang diolah menjadi bentuk es atau es serut. Ini bisa merujuk pada beberapa jenis minuman coklat yang disajikan dalam bentuk dingin, seperti minuman coklat dingin, 
                                minuman coklat es krim, atau minuman coklat es serut.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 6 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Es Teh Jumbo</h2>
                                <p class="item-intro text-muted">minuman yang terbuat dari teh yang diolah menjadi 
                                bentuk dingin dengan menambahkan es batu. Ini adalah minuman yang populer, terutama pada cuaca yang panas. Ada beberapa jenis es teh, 
                                termasuk teh hitam es, teh hijau es, dan teh buah-buahan es.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
