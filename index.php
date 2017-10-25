<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <!-- Useful meta tags -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="robots" content="index, follow, noodp">
    <meta name="googlebot" content="index, follow">
    <meta name="google" content="notranslate">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() . '/' ?>style.css">
    <title>Home</title>
</head>
<body>

    <img src="<?php echo get_the_post_thumbnail_url() ?>" data-toggle="tooltip" data-placement="right" title="<?php the_title() ?>">
    <script src="<?php echo get_template_directory_uri() . '/' ?>js/main.js"></script>
</body>
</html>
