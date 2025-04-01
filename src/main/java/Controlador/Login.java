/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controlador;

import DAO.UserDAO;
import Model.Usuario;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.util.HashMap;

/**
 *
 * @author ofeli
 */
@WebServlet(name = "Login", urlPatterns = {"/Login"})
public class Login extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
       HashMap resultado = new HashMap();
        HttpSession sesion;
        
        UserDAO userDAO = new UserDAO();
        String usuario =  request.getParameter("usuario");
        String password=  request.getParameter("password");
        
        Usuario user = new Usuario(usuario, password);
        
        Usuario respuestaUsuario = userDAO.identificar(user);
        
        if(respuestaUsuario != null){
            sesion = request.getSession();
            sesion.setAttribute("idusuario", respuestaUsuario);
            sesion.setAttribute("usuario", respuestaUsuario);
            sesion.setAttribute("nombreUsuario", user.getUsername());
           
            resultado.put("resultado", true);    
        }else{
            resultado.put("resultado", false);
        }
        
        String json = new Gson().toJson(resultado);
        PrintWriter out = response.getWriter();
        out.print(json);
        out.flush();
    }
}


