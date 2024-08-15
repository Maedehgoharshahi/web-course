<?php
session_start();
if (isset($_POST['submit'])){
    $_SESSION['user'] = $_POST['user'];
    header('Location: index.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="./login-style.css">
</head>
<body>
    <header>
        <h1>maedeh goharshahi</h1>
        <p id="job">Radiology Technologist</p>
        <nav>
            <ul>
                <li><a href="">summary</a></li>
                <li><a href="">skills</a></li>
                <li><a href="">experience</a></li>
                <li><a href="">contact</a></li>
            </ul>
        </nav>
        <div>
            <i class='bx bx-menu'></i>
        </div>
    </header>
    <article>
        <section>
            <h3>Log in</h3>
            <form method="post">
                <label>username</label>
                    <input type="text" name="user">
                <label>password</label>
                    <input type="password" name="pass">
                    <input type="submit" name="submit" value="login">
            </form>
        </section>
    </article>
    <footer>
        <ul>
            <li><a href="https://www.instagram.com/maedeh.ghr/"><i class='bx bxl-instagram' ></i></a></li>
            <li><a href=""><i class='bx bxl-linkedin-square' ></i></a></li>
            <li><a href="https://github.com/Maedehgoharshahi"><i class='bx bxl-github' ></i></a></li>
            <li><a href="https://t.me/maedehghr"><i class='bx bxl-telegram'></i></i></a></li>
        </ul>
    </footer>
</body>
</html>