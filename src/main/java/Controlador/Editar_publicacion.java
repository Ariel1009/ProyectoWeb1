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
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.Part;
import java.io.File;
import java.util.HashMap;

/**
 *
 * @author ofeli
 */
@WebServlet(name = "Editar_publicacion", urlPatterns = {"/Editar_publicacion"})
@MultipartConfig(maxFileSize = 16177216) //1.5mb
public class Editar_publicacion extends HttpServlet {

//private String extractExtension(Part part) {
//        String content = part.getHeader("content-disposition");
//        String[] items = content.split(";");
//        for (String s : items) {
//            if (s.trim().startsWith("filename")) {
//                String filename = s.substring(s.indexOf("=") + 2, s.length() - 1);
//                return filename.substring(filename.indexOf("."), filename.length());
//            }
//        }
//
//        return "";
//    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
        HashMap resultado = new HashMap();
     
        String contenido = request.getParameter("contenido");
        String categoria = request.getParameter("categoria");

        String idpublicacion = request.getParameter("idnota");

    
           
        
        
        PublicacionDAO pbDAO = new PublicacionDAO();
        if (pbDAO.editar(Integer.parseInt(idpublicacion), contenido, categoria)) {
            resultado.put("respuesta", true);
        } else {
            resultado.put("respuesta", false);
        }

        String json = new Gson().toJson(resultado);

        PrintWriter out = response.getWriter();
        out.print(json);
        out.flush();
    }

}
