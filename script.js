<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <div class="img-container">
            <img src="./img/1.jpg" alt="">
        </div>
        <div class="img-container">
            <img src="./img/2.jpg" alt="">
        </div>
        <div class="img-container">
            <img src="./img/3.jpg" alt="">
        </div>
        <div class="img-container">
            <img src="./img/4.jpg" alt="">
        </div>
        <!-- <span class="left" onclick="plusSlides(-1)">&#10094</span>
        <span class="right" onclick="plusSlides(1)">&#10095</span> -->
        <div class="dot-container">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
        <div class="play">
            <div id="svg-container">
                <svg viewBox="0 0 512 512">
                <path
                    d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333     c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333     z" />
                <path
                    d="M213.333,128h-64C137.551,128,128,137.551,128,149.333v213.333c0,11.782,9.551,21.333,21.333,21.333h64     c11.782,0,21.333-9.551,21.333-21.333V149.333C234.667,137.551,225.115,128,213.333,128z M192,341.333h-21.333V170.667H192     V341.333z" />
                <path
                    d="M362.667,128h-64c-11.782,0-21.333,9.551-21.333,21.333v213.333c0,11.782,9.551,21.333,21.333,21.333h64     c11.782,0,21.333-9.551,21.333-21.333V149.333C384,137.551,374.449,128,362.667,128z M341.333,341.333H320V170.667h21.333     V341.333z" />
            </svg>
            </div>
            <div id="svg-s">
                <svg viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;">
                <path
                    d="M413.974,71.026C368.171,25.225,307.274,0,242.5,0S116.829,25.225,71.026,71.026C25.225,116.829,0,177.726,0,242.5   s25.225,125.671,71.026,171.474C116.829,459.775,177.726,485,242.5,485s125.671-25.225,171.474-71.026   C459.775,368.171,485,307.274,485,242.5S459.775,116.829,413.974,71.026z M242.5,455C125.327,455,30,359.673,30,242.5   S125.327,30,242.5,30S455,125.327,455,242.5S359.673,455,242.5,455z" />
                <polygon points="181.062,336.575 343.938,242.5 181.062,148.425  " />
    
            </svg>

                </svg>
            </div>
        </div>

    </div>


    <script src="script.js"></script>
</body>

</html>
