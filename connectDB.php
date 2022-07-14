  <?php
    $conn = new mysqli("localhost", "root", "", "coordenadas");

    if ($conn->connect_error) {
        die("ERROR: No se puede conectar al servidor: " . $conn->connect_error);
    }

    $result = $conn->query("SELECT pos_name,supervisor,address,latitud,longitud,foto FROM pdv_semvra");
    while($r = $result->fetch_assoc()){
		$data[] = $r;
	}
    echo json_encode($data);

    $result->close();

    $conn->close();
    ?>