<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Portfolio</title> 
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" rel="stylesheet"> 
    <style> 
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        } 
        body { 
            background-color: rgb(0, 0, 33); 
            color: white; 
            font-family: 'Poppins', sans-serif; 
        } 
        nav { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            height: 80px; 
            background-color: rgb(18,18,62); 
            padding: 0 20px; 
        } 
        nav ul { 
            display: flex; 
            justify-content: center; 
        } 
        nav ul li { 
            list-style: none; 
            margin: 0 15px; 
        } 
        nav ul li a { 
            text-decoration: none; 
            color: white; 
        } 
        nav ul li a:hover { 
            color: rgb(153,153,226); 
            font-size: 1.01rem; 
        } 
        main hr { 
            border: 0; 
            background: #9c97f1; 
            height: 1.2px; 
            margin: 60px 20px; 
        } 
        .left { 
            font-size: 1.5rem; 
        } 
        .firstSection { 
            display: flex; 
            flex-wrap: wrap; 
            justify-content: space-around; 
            align-items: center; 
            margin: 50px 0; 
        } 
        .firstSection > div { 
            width: 40%; 
            text-align: center; 
        } 
        .leftSection { 
            font-size: 2.5rem; 
            margin: 20px 0; 
        } 
        .leftSection .buttons { 
            margin-top: 20px; 
        } 
        .leftSection .btn { 
            padding: 12px 20px; 
            background: #1e2167; 
            color: white; 
            border: 2px solid white; 
            border-radius: 6px; 
            font-size: 16px; 
            cursor: pointer; 
            margin: 5px; 
        } 
        .rightSection img { 
            width: 80%; 
            margin: 20px 0; 
            border-radius: 50%; 
            opacity: 80%; 
        } 
        .purple { 
            color: rgb(170,107,228); 
        } 
        .text-gray { 
            color: gray; 
        } 
        #element { 
            color: rgb(170,107,228); 
        } 
        .secondSection { 
            max-width: 80vw; 
            margin: auto; 
            height: auto; 
        } 
        .secondSection h1 { 
            font-size: 1.9rem; 
            text-align: center; 
        } 
        .secondSection .box { 
            background: rgb(2, 2,43); 
            width: 100%; 
            height: auto; 
            margin: 30px 0; 
            display: flex; 
            flex-wrap: wrap; 
            justify-content: space-evenly; 
        } 
        .secondSection .vertical { 
            height: auto; 
            width: 200px; 
            background-color: transparent; 
            margin: 20px; 
            text-align: center; 
        } 
        .vertical-title { 
            font-size: 1.2rem; 
            margin-bottom: 10px; 
        } 
        .vertical-desc { 
            color: gray; 
            font-size: 0.9rem; 
        } 
        .contactSection { 
            max-width: 80vw; 
            margin: 50px auto; 
            padding: 20px; 
            background: rgb(18,18,62); 
            border-radius: 10px; 
        } 
        .contactSection h1 { 
            text-align: center; 
            margin-bottom: 20px; 
            font-size: 2rem; 
        } 
        .contactSection form { 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
        } 
        .contactSection form input, 
        .contactSection form textarea, 
        .contactSection form button { 
            width: 80%; 
            margin: 10px 0; 
            padding: 10px; 
            font-size: 1rem; 
            border-radius: 5px; 
            border: none; 
        } 
        .contactSection form input, 
        .contactSection form textarea { 
            background: rgb(0, 0, 33); 
            color: white; 
            border: 1px solid white; 
        } 
        .contactSection form textarea { 
            resize: none; 
            height: 100px; 
        } 
        .contactSection form button { 
            background: #1e2167; 
            color: white; 
            cursor: pointer; 
            border: 2px solid white; 
        } 
        footer { 
            background-color: #0e0e1a; 
        } 
        .footer { 
            display: flex; 
            flex-wrap: wrap; 
            padding: 20px; 
            justify-content: space-around; 
            text-align: center; 
        } 
        .footer ul { 
            list-style: none; 
            padding: 0; 
        } 
        .footer > div { 
            width: auto; 
        } 
        footer .footer-rights { 
            text-align: center; 
            color: gray; 
            padding: 12px 0; 
        } 
        /* Media Queries */ 
        @media (max-width: 768px) { 
            nav ul { 
                flex-direction: column; 
                align-items: center; 
            } 
            .firstSection { 
                flex-direction: column; 
                margin: 20px 0; 
            } 
            .firstSection > div { 
                width: 80%; 
            } 
            .rightSection img { 
                width: 100%; 
            } 
            .secondSection .box { 
                flex-direction: column; 
                align-items: center; 
            } 
            .secondSection .vertical { 
                margin: 10px 0; 
            } 
        } 
        @media (max-width: 480px) { 
            .leftSection { 
                font-size: 1.5rem; 
            } 
            .leftSection .btn { 
                font-size: 14px; 
                padding: 10px 15px; 
            } 
            .footer { 
                flex-direction: column; 
            } 
        } 
    </style> 
</head> 
<body> 
    <header> 
        <nav> 
            <div class="left">Arpita's Portfolio</div> 
            <div class="right"> 
                <ul> 
                    <li><a href="/">Home</a></li> 
                    <li><a href="/">About</a></li> 
                    <li><a href="/">Services</a></li> 
                    <li><a href="/">Projects</a></li> 
                    <li><a href="/">Contact me</a></li> 
                </ul> 
            </div> 
        </nav> 
    </header> 
    <main> 
        <section class="firstSection"> 
            <div class="leftSection"> 
                <div>Hi, My name is <span class="purple">Arpita</span></div> 
                <div>and I'm a passionate</div> 
                <span id="element"></span> 
                <div class="buttons"> 
                    <button class="btn">Download Resume</button> 
                    <button class="btn">Visit Github</button> 
                </div> 
            </div> 
            <div class="rightSection"> 
                <img src="image.jpg" alt="Profile Image"> 
            </div> 
        </section> 
        <hr> 
        <section class="secondSection"> 
            <span class="text-gray">What I have learned so far</span> 
            <h1>Tech Stack</h1> 
            <div class="box"> 
                <div class="vertical"> 
                    <div class="vertical-title">FRONTEND</div> 
                    <div class="vertical-desc">I have developed a strong foundation in front-end development by mastering essential tools and technologies. My expertise includes HTML, CSS, JavaScript, and modern frameworks like React and Angular.</div> 
                </div> 
                <div class="vertical"> 
                    <div class="vertical-title">BACKEND</div> 
                    <div class="vertical-desc">I have honed my skills in back-end development, working with technologies such as Node.js, Express, and Python-based frameworks like Django and Flask. My experience includes database management using SQL and NoSQL systems like MySQL and MongoDB, ensuring efficient data handling.</div> 
                </div> 
                <div class="vertical"> 
                    <div class="vertical-title">DATABASES</div> 
                    <div class="vertical-desc">I have gained expertise in database management, working with both relational databases like MySQL and PostgreSQL, and NoSQL databases such as MongoDB. My experience includes designing efficient schemas, optimizing queries for performance, and ensuring data integrity.</div> 
                </div> 
                <div class="vertical"> 
                    <div class="vertical-title">DEVOPS</div> 
                    <div class="vertical-desc">I have been developing skills in DevOps, focusing on tools and practices that streamline development and deployment workflows. My experience includes working with CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI.</div> 
                </div> 
                <div class="vertical"> 
                    <div class="vertical-title">MOBILE APP</div> 
                    <div class="vertical-desc">I have been building expertise in mobile app development, focusing on creating intuitive and efficient applications. My skill set includes working with frameworks like React Native and Flutter for cross-platform development, as well as native technologies such as Swift for iOS and Kotlin for Android.</div> 
                </div> 
            </div> 
        </section> 
        <section class="contactSection"> 
            <h1>Contact Me</h1> 
            <form action="#" method="post"> 
                <input type="text" name="name" placeholder="Your Name" required> 
                <input type="email" name="email" placeholder="Your Email" required> 
                <textarea name="message" placeholder="Your Message" required></textarea> 
                <button type="submit">Send Message</button> 
            </form> 
        </section> 
    </main> 
    <footer> 
        <div class="footer"> 
            <div class="footer-first"> 
                <h3>Arpita's Portfolio</h3> 
            </div> 
            <div class="footer-second"> 
                <ul> 
                    <li>Home</li> 
                    <li>About</li> 
                    <li>Services</li> 
                    <li>Contact</li> 
                </ul> 
            </div> 
        </div> 
        <div class="footer-rights"> 
            www.arpitasportfolio.com | All rights reserved 
        </div> 
    </footer> 
    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script> 
    <script> 
        var typed = new Typed('#element', { 
            strings: ['Web Developer', 'Coder'], 
            typeSpeed: 50, 
        }); 
    </script> 
</body> 
</html>
