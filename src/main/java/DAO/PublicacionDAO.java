/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package DAO;

import Config.Conexxion;
import Model.Publicacion;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author ofeli
 */
public class PublicacionDAO {
    Conexxion cn = new Conexxion();
    Connection con;
    PreparedStatement ps;
    CallableStatement cs;
    ResultSet rs;
    Publicacion pb;
    
    public List cantidadTotal_publicacionCategoria(String busqueda) {
        ArrayList<Publicacion> list = new ArrayList();
        String sql = "SELECT * FROM publicacion WHERE categoria = ? AND estatus = 1;";
        try {
            con = cn.getConnection();
            ps = con.prepareCall(sql);
            ps.setString(1, busqueda);
            rs = ps.executeQuery();
            while (rs.next() == true) {
                pb = new Publicacion(
                    rs.getInt("idpublicacion"),
                    rs.getString("contenido"),
                    rs.getString("usuario"),
                    rs.getString("fecha"), 
                    rs.getString("categoria"), 
                    rs.getString("imagen"),
                    rs.getInt("estatus") 
                );
                list.add(pb);
            }

        } catch (Exception ex) {
            System.out.println(ex);
        } finally {
            cerrarConexiones();
        }
        return list;
    }
    
    
//    public List listarBuscadas(int indice, int cantidad, String titulo) {
//       ArrayList<Publicacion> list = new ArrayList();
//        String sql = "SELECT * FROM publicacion WHERE estatus = 1  LIMIT ?,? ";
//        try {
//            con = cn.getConnection();
//            ps = con.prepareStatement(sql);
//            ps.setInt(1, indice);
//            ps.setInt(2, cantidad);
//            rs = ps.executeQuery();
//            while (rs.next()) {
//                titulo = titulo.toLowerCase();
//                String tituloNota = rs.getString("titulo");
//                tituloNota = tituloNota.toLowerCase();
//                if (tituloNota.contains(titulo)) {
//                    list.add(new Publicacion(
//                    rs.getInt("idpublicacion"),
//                    rs.getString("contenido"),
//                    rs.getString("usuario"),
//                    rs.getString("fecha"), 
//                    rs.getString("categoria"), 
//                    rs.getString("imagen"),
//                    rs.getInt("estatus") 
//                    ));
//                }
//            }
//        } catch (Exception ex) {
//            System.out.println("" + ex);
//        } finally {
//            cerrarConexiones();
//        }
//        return list;
//    }
    
    
    public List cantidadTotal_publicacionBusqueda(String busqueda) {
        ArrayList<Publicacion> list = new ArrayList();
        String sql = "CALL busqueda_publicacion (?);";
        try {
            con = cn.getConnection();
            cs = (CallableStatement)con.prepareCall(sql);
            cs.setString(1, busqueda);
            rs = cs.executeQuery();
            while (rs.next() == true) {
                pb = new Publicacion(
                    rs.getInt("idpublicacion"),
                    rs.getString("contenido"),
                    rs.getString("usuario"),
                    rs.getString("fecha"), 
                    rs.getString("categoria"), 
                    rs.getString("imagen"),
                    rs.getInt("estatus") 
                );
                list.add(pb);
            }

        } catch (Exception ex) {
            System.out.println(ex);
        } finally {
            cerrarConexiones();
        }
        return list;
    }

    public boolean eliminar (int _id){
        String sql = "CALL baja_publicacion (?);";
        try
        {
            con = cn.getConnection();
            cs = (CallableStatement)con.prepareCall(sql);
            cs.setInt(1, _id);
            int result = cs.executeUpdate();
            if (result > 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception ex) {
            System.out.println(ex);
            return false;
        } finally {
            cerrarConexiones();
        }
    }

    public boolean editar(int _id, String _contenido, String _categoria) {
        String sql = "CALL actualizar_publicacion2 (?,?,?);";
        try {
            con = cn.getConnection();
            cs = (CallableStatement)con.prepareCall(sql);
            cs.setInt(1, _id);
            cs.setString(2, _contenido);
            cs.setString(3, _categoria);
      
            int result = cs.executeUpdate();
            if (result > 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception ex) {
            System.out.println(ex);
            return false;
        } finally {
            cerrarConexiones();
        }
    }

     public List listar() {
        ArrayList<Publicacion> list = new ArrayList();
        String sql = "SELECT idpublicacion, contenido, usuario,fecha,categoria, imagen, estatus FROM publicacion;";
        try {
            con = cn.getConnection();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                Publicacion tempNota = new Publicacion(
                        rs.getInt("idpublicacion"),
                        rs.getString("contenido"), 
                        rs.getString("usuario"),
                        rs.getString("categoria"),
                        rs.getString("imagen"),
                        rs.getInt("estatus"));
                list.add(tempNota);
            }
        } catch (Exception ex) {
            System.out.println(ex);
        } finally {
            cerrarConexiones();
        }
        return list;
    }

    public List listar(int indice, int cantidad) { //
        ArrayList<Publicacion> list = new ArrayList();
        String sql = "SELECT idpublicacion, contenido, usuario,fecha,categoria, imagen, estatus FROM publicacion  WHERE estatus = 1 LIMIT ?,?;";
        try {
            con = cn.getConnection();
            ps = con.prepareStatement(sql);
            ps.setInt(1, indice);
            ps.setInt(2, cantidad);
            rs = ps.executeQuery();

            while (rs.next()) {
                list.add(new Publicacion(
                        rs.getInt("idpublicacion"),
                        rs.getString("contenido"), 
                        rs.getString("usuario"),
                        rs.getString("fecha"),
                        rs.getString("categoria"),
                        rs.getString("imagen"),
                        rs.getInt("estatus")
                ));
            }

        } catch (Exception ex) {
            System.out.println("" + ex);
        }
        return list;
    }
    
     public boolean agregar(Publicacion _publicaciones) {
        String sql = "INSERT INTO publicacion (contenido, usuario, fecha, categoria, imagen, estatus) VALUES ('"+_publicaciones.getContenido()+"', '"+_publicaciones.getUsername()+"', '"+_publicaciones.getFecha()+"', '"+_publicaciones.getCategoria()+"', '"+_publicaciones.getImagen()+"', 1 ) ;";
        
        try {
            con = cn.getConnection();
            ps = con.prepareStatement(sql);
            if (ps.executeUpdate() > 0) {
                return true;
            } else {
                return false;
            }
        } catch (Exception ex) {
            System.out.println(ex);
            return false;
        } finally {
            cerrarConexiones();
        }

    }
    
    public int cantidadTotal() {
        String sql = "SELECT COUNT(*) AS total FROM publicacion;";
        try {
            con = cn.getConnection();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            if (rs.next()) {
                return rs.getInt("total");
            }

        } catch (Exception ex) {
            System.out.println("" + ex);
            return 0;
        } finally {
            cerrarConexiones();
        }
        return 0;
    }

    private void cerrarConexiones() {
        try {
            if (rs != null && rs.isClosed() == false) {
                rs.close();
            }

            if (cs != null && cs.isClosed() == false) {
                cs.close();
            }
            if (ps != null && ps.isClosed() == false) {
                ps.close();
            }

            if (con != null && con.isClosed() == false) {
                con.close();
            }
        } catch (Exception ex) {
            System.out.println(ex);
        }
        cn = null;
    }
}
