/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Model;

/**
 *
 * @author ofeli
 */
public class Usuario {
     private int idusuario;
    private String nombre;
    private String apellido;
    private String email;
    private String username;
    private String passw;
    private String f_nacimiento;
    private String fotoPerfil;

    public Usuario() {
    }

    public Usuario(int idusuario, String nombre, String apellido, String username, String passw) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.username = username;
        this.passw = passw;
    }

    public Usuario(int idusuario, String nombre, String apellido, String email, String username, String passw, String f_nacimiento, String fotoPerfil) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.username = username;
        this.passw = passw;
        this.f_nacimiento = f_nacimiento;
        this.fotoPerfil = fotoPerfil;
    }

    public Usuario(int idusuario, String nombre, String apellido, String email, String username, String passw, String f_nacimiento) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.username = username;
        this.passw = passw;
        this.f_nacimiento = f_nacimiento;
    }

    public Usuario(String username, String passw) {
        this.username = username;
        this.passw = passw;
    }

   

    public Usuario(String nombre, String apellido, String email, String username, String passw, String f_nacimiento, String fotoPerfil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.username = username;
        this.passw = passw;
        this.f_nacimiento = f_nacimiento;
        this.fotoPerfil = fotoPerfil;
    }

    public Usuario(String nombre, String apellido, String email, String username, String passw, String f_nacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.username = username;
        this.passw = passw;
        this.f_nacimiento = f_nacimiento;
    }

    public int getIdusuario() {
        return idusuario;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassw() {
        return passw;
    }

    public String getF_nacimiento() {
        return f_nacimiento;
    }

    public String getFotoPerfil() {
        return fotoPerfil;
    }
    
    
}
