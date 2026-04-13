<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
        <link rel="stylesheet" href="CSS/styles.css">
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
        <link rel="manifest" href="favicons/site.webmanifest">
        <title>
        Full Service Digital Agency | Cambridgeshire & Norfolk | Netmatters
        </title>
    </head>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="icon-checkbox-unchecked" viewBox="0 0 32 32">
        <path d="M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM28 28h-24v-24h24v24z"></path>
        </symbol>
    </svg>
    <body id="body" class="default-body">
        <div id="background" class="default-background">

            <?php require('views/partials/header.view.php') ?>
            <div id="top-of-page">
                <p class="link-top container">
                    <a href='/'>Home </a>
                    / Our Offices
                </p>
                <h1 class="top container">Our Offices</h1>
            </div>
            <div class="contact-body container">
                <div id="contact-offices">
                    <div class="office-box">
                        <a href="#" class="office-img">
                            <img src="img/carousel-image-one.png" alt="Cambridge Office">
                        </a>
                        <div class="office-text">
                            <a href="#" class="office-title">Cambridge Office</a>
                            <p>
                                Unit 1.31,<br>
                                St John's Innovation Centre,<br>
                                Cowley Road, Milton,<br>
                                Cambridge,<br>
                                CB4 0WS 
                            </p>
                            <a href="tel:#" class="office-phone">01223 37 57 72 </a>
                            <button class="btn-office">VIEW MORE</button>
                        </div>
                    </div>
                    <div class="office-box">
                        <a href="#" class="office-img">
                            <img src="img/carousel-image-one.png" alt="Cambridge Office">
                        </a>
                        <div class="office-text">
                            <a href="#" class="office-title">Wymondham Office</a>
                            <p>
                                Unit 15,<br>
                                Penfold Drive,<br>
                                Gateway 11 Business Park,<br>
                                Wymondham, Norfolk,<br>
                                NR18 0WZ 
                            </p>
                            <a href="tel:#" class="office-phone">01603 70 40 20 </a>
                            <button class="btn-office">VIEW MORE</button>
                        </div>
                    </div>
                    <div class="office-box">
                        <a href="#" class="office-img">
                            <img src="img/carousel-image-one.png" alt="Cambridge Office">
                        </a>
                        <div class="office-text">
                            <a href="#" class="office-title">Great Yarmouth Office </a>
                            <p>
                                Suite F23,<br>
                                Beacon Innovation Centre,<br>
                                Beacon Park, Gorleston,<br>
                                Great Yarmouth, Norfolk,<br>
                                NR31 7RA 
                            </p>
                            <a href="tel:#" class="office-phone">01493 60 32 04 </a>
                            <button class="btn-office">VIEW MORE</button>
                        </div>
                    </div>
                </div>
                <div id="contact-info">
                    <p>Email us on:</p>
                    <p><a href="#">sales@netmatters.com</a></p>
                    <p>Speak to Sales on:</p>
                    <p><a href="">01603 515007</a></p>
                    <p>Business hours:</p>
                    <p>Monday - Friday 07:00 - 18:00</p>
                </div>
                <div id="ooh-contact-info">
                    <p class="accord-title">Out of Hours IT Support &#128899;</p>
                    <div class="accord-body-hide">
                        <p>
                            Netmatters IT are offering an Out of Hours service for Emergency 
                            and Critical tasks.
                        </p>
                        <p>
                            Monday - Friday 18:00 - 22:00 <br>
                            Saturday 08:00 - 16:00 <br>
                            Sunday 10:00 - 18:00
                        </p>
                        <p>
                            To log a critical task, you will need to call our main line number 
                            and select Option 2 to leave an Out of Hours  voicemail. A technician 
                            will contact you on the number provided within 45 minutes of your call.
                        </p>
                    </div>
                </div>

                    <form id="contact-form">
                        <label for="name">Your name</label>
                        <input id="name" name="name" required></input>

                        <label for="company">Your company</label>
                        <input id="company" name="company"></input>

                        <label for="email">Your email</label>
                        <input id="email" name="email" required></input>

                        <label for="number">Your Telephone Number</label>
                        <input id="number" name="number" required></input>

                        <label for="message">Message</label>
                        <input id="message" name="message" required></input>

                        <div>
                            <div id="form-bottom1">
                                
                                <svg id="checkbox"><use xlink:href="#icon-checkbox-unchecked"></use></svg>
                                <span> Please tick this box if you wish to receive marketing 
                                    information from us. Please see our 
                                    <a href="#">Privacy Policy</a> 
                                    for more 
                                    information on how we keep your data safe.
                                </span>
                            </div>
                            <div id="form-bottom2">
                                <button>SEND ENQUIRY</button>
                                <span>* Fields Required</span>
                            </div>
                        </div>
                    </form>

            </div>


            <?php require('views/partials/footer.view.php') ?>

            <?php require('views/partials/menu.view.php') ?>


        <script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"></script>
        <script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script src="js/frontend.js"></script>
    </body>
    
</html>