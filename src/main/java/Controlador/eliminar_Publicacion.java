/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controlador;

import DAO.PublicacionDAO;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.HashMap;

/**
 *
 * @author ofeli
 */
@WebServlet(name = "eliminar_Publicacion", urlPatterns = {"/eliminar_Publicacion"})
public class eliminar_Publicacion extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
         HashMap resultado = new HashMap();
         PublicacionDAO pbDAO = new PublicacionDAO();
         
       String idpublicacion = request.getParameter("idnota");
       if(pbDAO.eliminar(Integer.parseInt(idpublicacion))){
           resultado.put("respuesta", true);
       }else{
           resultado.put("respuesta", false);
       }
            String json = new Gson().toJson(resultado);
        PrintWriter out = response.getWriter();
        out.print(json);
        out.flush();
    }

}
