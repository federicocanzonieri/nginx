<?php



    $file_delete=$_POST['file'];
    echo $file_delete;

    unlink("uploads/".$file_delete);






?>