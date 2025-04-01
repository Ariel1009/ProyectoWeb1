/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

/**
 *
 * @author ofeli
 */
public class Publicacion {
     private int idpublicacion;
    private String contenido;
    private String username;
    private String fecha;
    private String categoria;
    private String imagen;
    private int estatus;

    public Publicacion(){
    }

    public Publicacion(int idpublicacion, String contenido, String username, String fecha, String categoria, String imagen, int estatus) {
        this.idpublicacion = idpublicacion;
        this.contenido = contenido;
        this.username = username;
        this.fecha = fecha;
        this.categoria = categoria;
        this.imagen = imagen;
        this.estatus = estatus;
    }

    public Publicacion(int idpublicacion, String contenido, String fecha, String categoria, String imagen, int estatus) {
        this.idpublicacion = idpublicacion;
        this.contenido = contenido;
        this.fecha = fecha;
        this.categoria = categoria;
        this.imagen = imagen;
        this.estatus = estatus;
    }

    public Publicacion(int idpublicacion, String contenido, String categoria, String imagen) {
        this.idpublicacion = idpublicacion;
        this.contenido = contenido;
        this.categoria = categoria;
        this.imagen = imagen;
    }
    
    
    

    public Publicacion(int idpublicacion, String contenido, String username, String fecha, String categoria, String imagen) {
        this.idpublicacion = idpublicacion;
        this.contenido = contenido;
        this.username = username;
        this.fecha = fecha;
        this.categoria = categoria;
        this.imagen = imagen;
    }

    public Publicacion(String contenido, String username, String fecha, String categoria, String imagen) {
        this.contenido = contenido;
        this.username = username;
        this.fecha = fecha;
        this.categoria = categoria;
        this.imagen = imagen;
    }

    public Publicacion(String contenido, String categoria, String imagen) {
        this.contenido = contenido;
        this.categoria = categoria;
        this.imagen = imagen;
    }

    public Publicacion(int idpublicacion, String contenido, String username, String categoria, String imagen) {
        this.idpublicacion = idpublicacion;
        this.contenido = contenido;
        this.username = username;
        this.categoria = categoria;
        this.imagen = imagen;
    }
    
    

    public int getIdpublicacion() {
        return idpublicacion;
    }

    public String getContenido() {
        return contenido;
    }

    public String getUsername() {
        return username;
    }

    public String getFecha() {
        return fecha;
    }

    public String getCategoria() {
        return categoria;
    }

    public String getImagen() {
        return imagen;
    }

    public int getEstatus() {
        return estatus;
    }
    
    
    
}
