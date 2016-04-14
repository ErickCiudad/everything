<?php
require_once('connect.php');

function getProducts($conn) {
    $sql = 'SELECT * FROM products ORDER BY name';
    $stmt = $conn->prepare($sql);
    if ($stmt->execute()) {
        while ($row = $stmt->fetch()) {
            echo '<div>
                    Name: '.$row['name'].'<br>
                    Price: $'.$row['price'].'<br>
                    <form method="post" action="/SimpleCart/cart/">
                        <input type="hidden" name="id" value="'.$row['id'].'"/>
                        <input type="submit" name="add" value="ADD" style="background-color: green;"/>
                    </form>
                    <br>
                    </div>';
        }
    }
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Instruments Online</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script></head>
<body>
<ul class="nav nav-tabs">
    <li role="presentation" class=""><a href="/SimpleCart">Home</a></li>
    <li role="presentation"><a href="/SimpleCart/login">Login</a></li>
    <li role="presentation"><a href="/SimpleCart/register">Register</a></li>
    <li role="presentation"><a href="/SimpleCart/cart"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a></li>
    <h1>Instruments Online</h1>
</ul>
<br><br>
<div id="content">
    <?php
        getProducts($dbh);
    ?>
    <table id="products">

        <tr>
            <td><img id="instrumentPic"  src="https://s-media-cache-ak0.pinimg.com/236x/23/9a/64/239a640191cdf50f386e54f4cab38f0d.jpg" width="125px" height="200px"></td>
        </tr>

        <tr>
        <td><img id="instrumentPic" src="http://www.ozwinds.com.au/images/YRS-24B-700.jpg" width="125px" height="200px"></td>
        </tr>

        <tr>
        <td><img  id="instrumentPic" src="http://westmusic.cachefly.net/getDynamicImage.aspx?w=800&h=800&b=00ffffff&path=Studio-49-1600-Series-AX-1600-Rosewood-Alto-Diatonic-Xylophone.jpg" width="125px" height="200px"></td>
            </tr>

        <tr>
            <td><img  id="instrumentPic" src="http://drumshopglasgowonline.co.uk/images/CP221DWBongos.jpg" width="125px" height="200px"></td>
            </tr>
           <tr>
            <td><img id="instrumentPic" src="http://www.raleighmusiclessons.com/wp-content/uploads/2013/06/DV016_Jpg_Large_H73551_violin_and_bow.jpg" width="125px" height="200px"></td>
            </tr>
            <tr>
                <td><img id="instrumentPic" src="http://maton.com.au/assets/images/acoustic_product_MINID_2.jpg" width="125px" height="200px"></td>
            </tr>
        </table>

        <table id="products2">
        <tr>
            <td><img id="instrumentPic" src="https://www.engr.colostate.edu/~echong/images/SA500.jpg" width="125px" height="200px"></td>
           </tr>
            <tr>
            <td><img  id="instrumentPic" src="https://brucemusicstore.com/dynamic/2015/08/91b4eb129c2ce40a4658b70081b2f48a.image_.550x550.jpg" width="125px" height="200px"></td>
            </tr>
                <tr>
                <td><img id="instrumentPic"  src="http://s3.lonestarpercussion.com/resize/images/Gretsch/Gretsch-GBJ683SM-full.jpg" width="125px" height="200px"></td>
        </tr>
            <tr>
            <td><img  id="instrumentPic" src="http://quirkyberkeley.com/wp-content/uploads/2014/02/Red-Hohner.jpg" width="125px" height="200px"></td>
            </tr>
            <tr>
                <td><img  id="instrumentPic" src="http://cdn1.bigcommerce.com/server600/h6qlog4f/products/74/images/379/trumpet_gold_1__51792.1358323252.1280.1280.jpg?c=2" width="125px" height="200px"></td>
            </tr>
            <tr>
                <td><img id="instrumentPic" src="http://www.amromusic.com/assets/1942/steinway-b-grand-new-ebony-1.jpg" width="125px" height="200px"></td>

        </tr>

    </table>

</div>

<script>function goHome(){
        document.location.href = "/SimpleCart";
    }
</script>

</body>
</html>
