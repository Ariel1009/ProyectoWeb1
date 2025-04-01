/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controlador;

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
@WebServlet(name = "RevisarSession", urlPatterns = {"/RevisarSession"})
public class RevisarSession extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
        
          
        HashMap respuesta = new HashMap();
         HttpSession sesion = request.getSession();
         
         if(sesion.getAttribute("idusuario") != null){
             respuesta.put("usuario", sesion.getAttribute("usuario"));
          
             respuesta.put("respuesta", true);
         } else {
              respuesta.put("respuesta", false);
         }
         
         String json = new Gson().toJson(respuesta);
          
          PrintWriter out = response.getWriter();
      
      out.print(json);
      out.flush();
    }

}
