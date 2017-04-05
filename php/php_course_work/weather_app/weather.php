<?php
    require_once 'vendor/autoload.php';
    use GuzzleHttp\Client;
    use GuzzleHttp\Post\PostBody;
    use GuzzleHttp\Stream\StreamInterface;
    use GuzzleHttp\Exception\RequestException;
    
    if (isset($_POST['submit']) && isset($_POST['postal_code']) && !empty($_POST['postal_code'])) {
        $postal_code = $_POST['postal_code'];
        $api_key = '68e23caf6ddd811a149997fface7d8ce';
        $url = "api.openweathermap.org/data/2.5/weather?zip=$postal_code,us&appid=$api_key";
        
        $client = new Client();
        try {
            $response = $client->request('GET', $url, []);
            $response_body = $response->getBody();
            $decoded_body = json_decode($response_body);
        } catch (RequestException $e) {
            echo "HTTP Request failed\n";
            echo "<pre>";
            print_r($e->getRequest());
            echo "</pre>";
            if ($e->hasResponse()) {
                echo $e->getResponse();
            }
        }
    }
?>