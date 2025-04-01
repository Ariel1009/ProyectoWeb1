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
@WebServlet(name = "InsertUser", urlPatterns = {"/InsertUser"})
@MultipartConfig(maxFileSize = 16177216)
public class InsertUser extends HttpServlet {

//    private String extractExtension(Part part) {
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
        HashMap resultado = new HashMap();
        String uploadPath = getServletContext().getRealPath("/perfilImg/");
        
        File fdir = new File(uploadPath);
        if(!fdir.exists()){
            fdir.mkdir();
        }

        UserDAO userDAO = new UserDAO();
        String username = request.getParameter("usuario");
        String nombre = request.getParameter("nombre");
        String apellido = request.getParameter("apellido");
        String passw = request.getParameter("password");
        String email = request.getParameter("email");
        String f_nacimiento = request.getParameter("fecha");

        Part filePart2 = request.getPart("img");
        String nombreArchivo = String.valueOf(System.currentTimeMillis());
        filePart2.getContentType();
        filePart2.write(uploadPath + "/" + nombreArchivo + ".jpg");
        String foto ="perfilImg/" + nombreArchivo + ".jpg";
        

        Usuario user = new Usuario(nombre, apellido,  email, username, passw, f_nacimiento, foto);
        if (userDAO.agregar(user)) {
            resultado.put("resultado", true);
        } else {
            resultado.put("resultado", false);
        }

        String json = new Gson().toJson(resultado);

        PrintWriter out = response.getWriter();

        out.print(json);
        out.flush();
    }

}
