<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>jQuery Move a Div Element into Another Div</title>
<style type="text/css">
    .box{
        padding: 20px;        
        background: #f0e68c;
    }
    .content{
        padding: 20px;
        margin: 30px 0;
        border: 1px solid #333;
    }
</style>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        $("button").click(function(){
            $(".content").appendTo("#target");
            $(this).hide(); // Hide move button
        });
    });
</script>
</head>
<body>
    <div id="target" class="box">
        <h1>Target Container</h1>
    </div>
    <div class="content">
        <h1>Hello World.</h1>
        <p>Click the "Move" button to move this content block inside colored box.</p>
        <button type="button">Move</button>
    </div>    
</body> 
</html>                            