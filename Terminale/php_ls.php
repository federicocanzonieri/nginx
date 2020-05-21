

<?php
    $dir    = 'uploads';
    $files1 = scandir($dir);
    $list;
    $count=0;
    foreach ($files1 as $file){
        //echo $file;
        $list[$count++]=$file;
    }
    //print_r( $list);
    //print_r(json_encode($files1));
    echo json_encode($files1);
    //print_r($files1);
   
?>