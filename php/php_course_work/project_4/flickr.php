<?php
    require_once 'vendor/autoload.php';
    use GuzzleHttp\Client;
    use GuzzleHttp\Post\PostBody;
    use GuzzleHttp\Stream\StreamInterface;
    use GuzzleHttp\Exception\RequestException;
    
    if (isset($_POST['submit']) && isset($_POST['keyword']) && !empty($_POST['keyword'])) {
        $keyword = $_POST['keyword'];
        $api_key = '94665bc27e7c63eb447f8259f20e0e21';
        $api_secret = 'b47d248a34740743';
        $per_page = 25;
        $url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
        $url.= '&api_key='.$api_key;
        $url.= '&tags='.$keyword;
        $url.= '&per_page='.$perPage;
        $url.= '&format=json';
        $url.= '&nojsoncallback=1';
        
        try {
            $response = json_decode(file_get_contents($url));
            $photo_array = $response->photos->photo;
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