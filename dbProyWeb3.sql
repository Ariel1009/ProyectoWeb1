create database proyweb3;

use proyweb3;

CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(60) NOT NULL,
  `username` varchar(45) NOT NULL,
  `passw` varchar(20) NOT NULL,
  `f_nacimiento` date NOT NULL,
  `fotoPerfil` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `publicacion` (
  `idpublicacion` int NOT NULL AUTO_INCREMENT,
  `contenido` varchar(45) DEFAULT NULL,
  `usuario` varchar(45) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `categoria` varchar(45) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `estatus` int DEFAULT NULL,
  PRIMARY KEY (`idpublicacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


insert into publicacion(contenido, usuario, fecha, categoria, imagen)values('hola mundo', 'Axel123', '20221123', 'meme', 'Captura de pantalla 2022-10-08 160945');

SELECT * FROM usuario WHERE username = 'Axel123' AND passw = 'Axel+123';

truncate table publicacion;
SELECT *  FROM publicacion;

select * from usuario;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizar_publicacion`(idpubli int, content VARCHAR(45), categot VARCHAR(45), imgn VARCHAR(100))
BEGIN
	UPDATE publicacion SET
    contenido=content,
    categoria=categot,
    imagen=imgn
    WHERE idpublicacion = idpubli;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `baja_publicacion`(idpubli int)
BEGIN
	UPDATE publicacion SET
    estatus = 0
    WHERE idpublicacion = idpubli;
END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `busqueda_publicacion`(content VARCHAR(45))
BEGIN
	SELECT * FROM publicacion WHERE contenido LIKE CONCAT('%',content,'%') AND estatus = 1;
END$$
DELIMITER ;

CALL actualizar_publicacion2 (3,'Borger','Comida');

CALL actualizar_user (1, 'Cesar', 'Medrano', 'cesar_medrano@gmail.com');
