/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

import Config.Conexxion;
import Model.Usuario;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author ofeli
 */
public class UserDAO {
    Conexxion cn= new Conexxion();
    Connection con;
     CallableStatement cs;
    PreparedStatement ps;
    ResultSet rs;
    Usuario user;
    
     public boolean editarUsuario(int _id, String _nombre, String _apellido, String _email) {
        String sql = "CALL actualizar_user (?,?,?,?);";
        try {
            con = cn.getConnection();
           cs = (CallableStatement)con.prepareCall(sql);
            cs.setInt(1, _id);
            cs.setString(2, _nombre);
            cs.setString(3, _apellido);
            cs.setString(4, _email);
            int resultados = ps.executeUpdate();
            if (resultados > 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception ex) {
            System.out.println("Error: " + ex);
            return false;
        } finally {
            cerrarConexiones();
        }
    }
    
        public Usuario identificar(Usuario _user){
        //String sql="SELECT idUsuario, nombreUsuario, apellidosUsuario, userName, password, email FROM usuario WHERE userName = '"+user.getUserName().trim()+"' AND password = '"+user.getPassword()+"'; ";
       String sql = "SELECT * FROM usuario WHERE username = '"+_user.getUsername()+"' AND passw = '"+_user.getPassw()+"'; ";
        try{
            con=cn.getConnection();
            ps=con.prepareStatement(sql);
            rs = ps.executeQuery();
            
            if(rs.next()){
                user = new Usuario(
                        rs.getInt("idusuario"), 
                        rs.getString("nombre"), 
                        rs.getString("apellido"), 
                        rs.getString("email"),
                        rs.getString("username"), 
                        rs.getString("passw"),  
                        rs.getString("f_nacimiento"),
                        rs.getString("fotoPerfil"));
            }
            
        }catch (Exception ex){
            System.out.println("Error: " + ex);
            
        }finally{
            cerrarConexiones();
        }
        
        return user;
    }
    
    public boolean agregar (Usuario user){
        
        String sql = "INSERT INTO usuario (nombre, apellido, email, username, passw, f_nacimiento, fotoPerfil) VALUES ('"+user.getNombre()+"', '"+user.getApellido()+"', '"+user.getEmail()+"', '"+user.getUsername()+"', '"+user.getPassw()+"', '"+user.getF_nacimiento()+"', '"+user.getFotoPerfil()+"')";
        try{
            
            con=cn.getConnection();
            ps=con.prepareStatement(sql);
            int resultado= ps.executeUpdate();
            if(resultado > 0){
                return true;
            }else{
                return false;
            }
            
        }catch (Exception ex){
            System.out.println("Error: " + ex);
            return false;
        }finally{
            cerrarConexiones();
        }
        
    }
    
    private void cerrarConexiones(){
        try{
            if(rs != null && rs.isClosed() == false){
                rs.close();
            }
            if(ps != null && ps.isClosed() == false){
                ps.close();
            }
            if(con != null && con.isClosed() == false){
                con.close();
            }
        
        }catch(Exception ex){
            System.out.println(ex);
        }
        cn = null;
    }
    
}
