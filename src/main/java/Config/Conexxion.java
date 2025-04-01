/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Config;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author ofeli
 */
public class Conexxion {
     private Connection con;
    private String servername = "localhost";
    private String portnumber = "3306";
    private String databasename = "proyweb3";
    private String url = "jdbc:mysql://" + servername + ":" + portnumber + "/" + databasename;
    private String username = "root";
    private String password = "admin";
    
    public Conexxion(){
        try{
            Class.forName("com.mysql.jdbc.Driver");
            con= DriverManager.getConnection(url, username, password);
        }catch(Exception ex){
            System.out.println("Error" + ex);
        }
    }
    
    public Connection getConnection(){
        return con;
    }
}
